import { apiSlice } from "..";

import { IGetUsersResponseData } from "../Users";
import { IGetArticlesResponseData } from "../Articles";

interface IGetCombinedRequest {
	endpoint: "users" | "posts";
	query: string;
}

const combinedApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getUsersOrArticles: builder.query<IGetUsersResponseData | IGetArticlesResponseData, IGetCombinedRequest>({
			query: ({ endpoint, query }) => ({
				url: `/${endpoint}${query}`
			}),
			providesTags: ["Users", "Articles"]
		})
	})
});

export const { useGetUsersOrArticlesQuery } = combinedApi;
