import { apiSlice } from "../../../app/api";
import { dateFormatter } from "../../../common/utils";

import type { IArticleCard } from "..";
import type { IUser } from "../../Authorization/AuthSlice";

export interface IGetThemeResponseData {
	id: string;
	name: string;
}
export interface IGetArticlesResponseData extends IPaginationResponse<IArticleCard[]> {}

export interface IGetUsersResponseData extends IPaginationResponse<(IUser & { email: string })[]> {}

interface IGetTopAuthorsResponseData {
	id: string;
	nickname: string;
	email: string;
}

interface IGetTopTagsResponseData {
	id: string;
	name: string;
}

interface IGetCombinedRequest {
	endpoint: "users" | "posts";
	query: string;
}

interface IGetUserRolesResponseData {
	id: string;
	name: string;
}

const mainApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getUsers: builder.query<IGetUsersResponseData, string>({
			query: (query) => ({
				url: `/users${query}`
			}),
			providesTags: (result) => (result ? [...result.data.map(({ id }) => ({ type: "Users" as const, id })), "Users"] : ["Users"])
		}),
		getArticles: builder.query<IGetArticlesResponseData, string>({
			query: (query) => ({
				url: `/posts${query}`
			}),
			providesTags: (result) => (result ? [...result.data.map(({ id }) => ({ type: "Articles" as const, id })), "Articles"] : ["Articles"]),
			transformResponse: (articles: IGetArticlesResponseData) => ({
				...articles,
				data: articles.data.map((article) => ({ ...article, createdAt: dateFormatter(article.createdAt) }))
			})
		}),
		getUsersOrArticles: builder.query<IGetUsersResponseData | IGetArticlesResponseData, IGetCombinedRequest>({
			query: ({ endpoint, query }) => ({
				url: `/${endpoint}${query}`
			}),
			providesTags: ["Users", "Articles"]
		}),
		getLikedArticles: builder.query<IGetArticlesResponseData, string>({
			query: (query) => ({
				url: `/posts/liked-by/me${query}`
			}),
			providesTags: (result) => (result ? [...result.data.map(({ id }) => ({ type: "Articles" as const, id })), "Articles"] : ["Articles"]),
			transformResponse: (articles: IGetArticlesResponseData) => ({
				...articles,
				data: articles.data.map((article) => ({ ...article, createdAt: dateFormatter(article.createdAt) }))
			})
		}),
		getUserRoles: builder.query<IGetUserRolesResponseData[], void>({
			query: () => ({
				url: "/roles"
			})
		}),
		getArticlesByAuthor: builder.query<IGetArticlesResponseData, string>({
			query: (query) => ({
				url: `/posts${query}`
			}),
			providesTags: (result) => (result ? [...result.data.map(({ id }) => ({ type: "Articles" as const, id })), "Articles"] : ["Articles"]),
			transformResponse: (articles: IGetArticlesResponseData) => ({
				...articles,
				data: articles.data.map((article) => ({ ...article, createdAt: dateFormatter(article.createdAt) }))
			})
		}),
		likeArticle: builder.mutation<void, string>({
			query: (id) => ({
				url: `/posts/${id}/likes`,
				method: "POST"
			}),
			invalidatesTags: ["Article", "Articles"]
		}),
		unlikeArticle: builder.mutation<void, string>({
			query: (id) => ({
				url: `/posts/${id}/likes`,
				method: "DELETE"
			}),
			invalidatesTags: ["Article", "Articles"]
		}),
		getTopAuthors: builder.query<IGetTopAuthorsResponseData[], string | void>({
			query: (query = "") => ({ url: `/users/authors${query}` }),
			providesTags: ["Users"]
		}),
		getTopTags: builder.query<IGetTopTagsResponseData[], string | void>({
			query: (query = "") => ({ url: `/tags${query}` })
		}),
		getThemes: builder.query<IGetThemeResponseData[], void>({
			query: () => ({ url: "/themes" })
		})
	})
});

export const {
	useGetTopAuthorsQuery,
	useGetTopTagsQuery,
	useGetThemesQuery,
	useLikeArticleMutation,
	useUnlikeArticleMutation,
	useGetArticlesQuery,
	useGetLikedArticlesQuery,
	useGetUsersQuery,
	useGetUsersOrArticlesQuery,
	useGetUserRolesQuery,
	useGetArticlesByAuthorQuery
} = mainApi;
