import { apiSlice } from "..";

const commentsApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		deleteComment: builder.mutation<void, string>({
			query: (id) => ({ url: `/comments/${id}`, method: "DELETE" }),
			invalidatesTags: ["Article"]
		})
	})
});

export const { useDeleteCommentMutation } = commentsApi;
