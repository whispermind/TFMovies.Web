import { apiSlice } from "../../../../app/api";

export interface ICreateArticleReq {
	coverImageUrl: string;
	ThemeId: string;
	title: string;
	htmlContent: string;
	tags: string[];
}

const createArticleApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		imageUpload: builder.mutation<{ fileUrl: string }, Blob>({
			query: (file) => {
				const bodyFormData = new FormData();
				bodyFormData.append("File", file);

				return {
					url: "/files/upload-image",
					method: "POST",
					body: bodyFormData,
					formData: true
				};
			}
		}),
		createArticle: builder.mutation<void, ICreateArticleReq>({
			query: (articleData) => ({
				url: "/posts",
				method: "POST",
				body: articleData
			}),
			invalidatesTags: ["Articles"]
		})
	})
});

export const { useCreateArticleMutation, useImageUploadMutation } = createArticleApi;
