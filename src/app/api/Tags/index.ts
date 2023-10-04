import { apiSlice } from "..";

interface IGetTopTagsResponseData {
	id: string;
	name: string;
}

const tagsApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getTopTags: builder.query<IGetTopTagsResponseData[], string | void>({
			query: (query = "") => ({ url: `/tags${query}` })
		})
	})
});

export const { useGetTopTagsQuery } = tagsApi;
