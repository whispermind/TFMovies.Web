import { apiSlice } from "../../../app/api";

import type { IArticleCard } from "../../Main";
import type { ICommentData } from "../Comments";

interface PostByAuthor {
	id: string;
	title: string;
	createdAt: string;
	tags: string[];
}
export interface IArticle extends IArticleCard {
	theme: string;
	htmlContent: string;
	authorId: string;
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
		getArticle: builder.query<IArticle, string>({
			query: (id) => ({
				url: `/posts/${id}`
			}),
			providesTags: ["Article"]
		})
	})
});

export const { useCreateCommentMutation, useGetArticleQuery } = articleApi;
