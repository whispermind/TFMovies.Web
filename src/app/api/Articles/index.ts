import { apiSlice } from "..";

import { dateFormatter } from "../../../common/utils";

import type { IArticleCard, ITag } from "../../../modules/Article/ArticleCard";
import type { ICommentData } from "../../../modules/Article/ArticleComments";

export interface PostByAuthor {
	id: string;
	title: string;
	createdAt: string;
	tags: ITag[];
}
export interface IGetArticleResponseData extends IArticleCard {
	htmlContent: string;
	likesCount: number;
	commentsCount: number;
	comments: ICommentData[];
	postsByAuthor: PostByAuthor[];
	theme: {
		name: string;
		id: string;
	};
}

export interface ICreateArticleReq {
	coverImageUrl: string;
	ThemeId: string;
	title: string;
	htmlContent: string;
	tags: string[];
}

export interface IGetArticlesResponseData extends IPaginationResponse<IArticleCard[]> {}

interface IUpdateArticleReq extends ICreateArticleReq {}
interface IUpdateArticleResponse extends ICreateArticleReq {}

const articleApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		createComment: builder.mutation<void, { id: string; content: string }>({
			query: ({ id, content }) => ({
				url: `/posts/${id}/comments`,
				method: "POST",
				body: { content }
			}),
			invalidatesTags: ["Article"]
		}),
		getArticle: builder.query<IGetArticleResponseData, { id: string; limit: number }>({
			query: ({ id, limit }) => ({
				url: `/posts/${id}?limit=${limit}`
			}),
			providesTags: ["Article"],
			transformResponse: (article: IGetArticleResponseData) => ({
				...article,
				createdAt: dateFormatter(article.createdAt),
				postsByAuthor: article.postsByAuthor.map((post) => ({ ...post, createdAt: dateFormatter(post.createdAt) })),
				comments: article.comments.map((comment) => ({ ...comment, createdAt: dateFormatter(comment.createdAt) }))
			})
		}),
		createArticle: builder.mutation<void, ICreateArticleReq>({
			query: (articleData) => ({
				url: "/posts",
				method: "POST",
				body: articleData
			}),
			invalidatesTags: ["Articles"]
		}),
		updateArticle: builder.mutation<IUpdateArticleResponse, { id: string; articleData: IUpdateArticleReq }>({
			query: ({ id, articleData }) => ({
				url: `/posts/${id}`,
				method: "PUT",
				body: articleData
			}),
			invalidatesTags: ["Article", "Articles"]
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
		deleteArticle: builder.mutation<void, string>({
			query: (id) => ({
				url: `/posts/${id}`,
				method: "DELETE"
			}),
			invalidatesTags: ["Article", "Articles"]
		})
	})
});

export const {
	useDeleteArticleMutation,
	useCreateCommentMutation,
	useLikeArticleMutation,
	useUnlikeArticleMutation,
	useGetArticlesQuery,
	useGetLikedArticlesQuery,
	useUpdateArticleMutation,
	useGetArticleQuery,
	useCreateArticleMutation,
	useGetArticlesByAuthorQuery
} = articleApi;
