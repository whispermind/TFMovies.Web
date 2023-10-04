import { apiSlice } from "..";

interface IGetUserRolesResponseData {
	id: string;
	name: string;
}

const rolesApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getUserRoles: builder.query<IGetUserRolesResponseData[], void>({
			query: () => ({
				url: "/roles"
			})
		})
	})
});

export const { useGetUserRolesQuery } = rolesApi;
