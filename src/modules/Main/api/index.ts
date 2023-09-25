import { apiSlice } from "../../../app/api";

import type { IArticleCard } from "..";
import { dateFormatter } from "../../../common/utils";

export interface IGetThemeResponseData {
	id: string;
	name: string;
}
interface IGetArticlesResponseData {
	page: number;
	totalPages: number;
	totalRecords: number;
	themeId: string;
	sort: string;
	limit: number;
	data: IArticleCard[];
}

interface IGetTopAuthorsResponseData {
	id: string;
	nickname: string;
	email: string;
}

interface IGetTopTagsResponseData {
	id: string;
	name: string;
}

const mainApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
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
			query: (query = "") => ({ url: `/users/authors${query}` })
		}),
		getTopTags: builder.query<IGetTopTagsResponseData[], string | void>({
			query: (query = "") => ({ url: `/tags${query}` })
		}),
		getThemes: builder.query<IGetThemeResponseData[], void>({
			query: () => ({ url: "/themes" })
		})
	})
});

export const { useGetTopAuthorsQuery, useGetTopTagsQuery, useGetThemesQuery, useLikeArticleMutation, useUnlikeArticleMutation, useGetArticlesQuery } = mainApi;
