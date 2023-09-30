import { ICreateArticleReq } from "../../CreateArticle/api/index";
import { apiSlice } from "../../../../app/api";

interface IUpdateArticleReq extends ICreateArticleReq {}
interface IUpdateArticleResponse extends ICreateArticleReq {}

const updateArticleApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		updateArticle: builder.mutation<IUpdateArticleResponse, { id: string; articleData: IUpdateArticleReq }>({
			query: ({ id, articleData }) => ({
				url: `/posts/${id}`,
				method: "PUT",
				body: articleData
			}),
			invalidatesTags: ["Article", "Articles"]
		})
	})
});

export const { useUpdateArticleMutation } = updateArticleApi;
