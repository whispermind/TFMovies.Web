import { apiSlice } from "../../../app/api";

const articleApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		createComment: builder.mutation<void, { postId: string; content: string }>({
			query: ({ postId, content }) => ({
				url: `/posts/${postId}/comments`,
				method: "POST",
				body: content
			})
		})
	})
});

export const { useCreateCommentMutation } = articleApi;
