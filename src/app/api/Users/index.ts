import { apiSlice } from "..";

import type { ISignUpForm } from "../../../modules/Registration";
import type { IUser, IAuthState } from "../../../modules/Authorization/AuthSlice";
import type { ISignInForm } from "../../../modules/Authorization";

export type TTokenValidationEndpoints = "validate-reset-token" | "verify-email";

export interface IGetUsersResponseData extends IPaginationResponse<(IUser & { email: string })[]> {}

interface IChangeUserRoleRequest {
	id: string;
	newRoleId: string;
}

interface IGetTopAuthorsResponseData {
	id: string;
	nickname: string;
	email: string;
}

const usersApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		signUp: builder.mutation<void, ISignUpForm>({
			query: (user) => ({
				url: "/users/signup",
				method: "POST",
				body: user
			})
		}),
		sendSignUpEmailConfirmation: builder.mutation<void, string>({
			query: (email) => ({
				url: "/users/send-activation-email",
				method: "POST",
				body: { email }
			})
		}),
		validateToken: builder.mutation<void, { endpoint: TTokenValidationEndpoints } & Tokened>({
			query: ({ token, endpoint }) => ({
				url: `/users/${endpoint}`,
				method: "POST",
				body: { token }
			})
		}),
		deleteUser: builder.mutation<void, string>({
			query: (id) => ({
				url: `/users/${id}`,
				method: "DELETE"
			}),
			invalidatesTags: ["Articles", "Article", "Users"]
		}),
		changeUserRole: builder.mutation<void, IChangeUserRoleRequest>({
			query: ({ id, newRoleId }) => ({
				url: `/users/${id}/change-role`,
				method: "PUT",
				body: { newRoleId }
			}),
			invalidatesTags: ["Users"]
		}),
		requestAuthorRole: builder.mutation<void, void>({
			query: () => ({
				url: "users/me/request-role",
				method: "PUT"
			})
		}),
		getUsers: builder.query<IGetUsersResponseData, string>({
			query: (query) => ({
				url: `/users${query}`
			}),
			providesTags: (result) => (result ? [...result.data.map(({ id }) => ({ type: "Users" as const, id })), "Users"] : ["Users"])
		}),
		getTopAuthors: builder.query<IGetTopAuthorsResponseData[], string | void>({
			query: (query = "") => ({ url: `/users/authors${query}` }),
			providesTags: ["Users"]
		}),
		signIn: builder.mutation<IAuthState, ISignInForm>({
			query: (credentials) => ({
				url: "/users/login",
				method: "POST",
				body: credentials
			})
		}),
		signOut: builder.mutation<void, string>({
			query: (refreshToken) => ({
				url: "/users/logout",
				method: "POST",
				body: { refreshToken }
			})
		})
	})
});

export const {
	useSignUpMutation,
	useGetTopAuthorsQuery,
	useGetUsersQuery,
	useSendSignUpEmailConfirmationMutation,
	useValidateTokenMutation,
	useDeleteUserMutation,
	useChangeUserRoleMutation,
	useRequestAuthorRoleMutation,
	useSignInMutation,
	useSignOutMutation
} = usersApi;
