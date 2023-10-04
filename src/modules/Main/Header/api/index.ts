import { apiSlice } from "../../../../app/api";

const headerApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		requestAuthorRole: builder.mutation<void, void>({
			query: () => ({
				url: "users/me/request-role",
				method: "PUT"
			})
		})
	})
});

export const { useRequestAuthorRoleMutation } = headerApi;
