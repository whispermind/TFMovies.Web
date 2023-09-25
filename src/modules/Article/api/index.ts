import { apiSlice } from "../../../app/api";

import type { IArticleCard } from "../../Main";
import type { ICommentData } from "../ArticleComments";
import type { ITag } from "../../Main/ArticleCard";
import { dateFormatter } from "../../../common/utils";

export interface PostByAuthor {
	id: string;
	title: string;
	createdAt: string;
	tags: ITag[];
}
export interface IArticleResponseData extends IArticleCard {
	theme: string;
	htmlContent: string;
	likesCount: number;
	commentsCount: number;
	comments: ICommentData[];
	postsByAuthor: PostByAuthor[];
}

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
		getArticle: builder.query<IArticleResponseData, { id: string; limit: number }>({
			query: ({ id, limit }) => ({
				url: `/posts/${id}?limit=${limit}`
			}),
			providesTags: ["Article"],
			transformResponse: (article: IArticleResponseData) => ({
				...article,
				createdAt: dateFormatter(article.createdAt),
				postsByAuthor: article.postsByAuthor.map((post) => ({ ...post, createdAt: dateFormatter(post.createdAt) })),
				comments: article.comments.map((comment) => ({ ...comment, createdAt: dateFormatter(comment.createdAt) }))
			})
		})
	})
});

export const { useCreateCommentMutation, useGetArticleQuery } = articleApi;