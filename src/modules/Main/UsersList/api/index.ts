import { apiSlice } from "../../../../app/api";

interface IChangeUserRoleRequest {
	id: string;
	newRoleId: string;
}

const userListApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		changeUserRole: builder.mutation<void, IChangeUserRoleRequest>({
			query: ({ id, newRoleId }) => ({
				url: `/users/${id}/change-role`,
				method: "PUT",
				body: { newRoleId }
			})
		}),
		deleteUser: builder.mutation<void, string>({
			query: (id) => ({
				url: `/users/${id}`,
				method: "DELETE"
			}),
			invalidatesTags: ["Articles", "Article", "Users"]
		})
	})
});

export const { useChangeUserRoleMutation, useDeleteUserMutation } = userListApi;
