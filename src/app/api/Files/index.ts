import { apiSlice } from "..";

const filesApi = apiSlice.injectEndpoints({
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
		})
	})
});

export const { useImageUploadMutation } = filesApi;
