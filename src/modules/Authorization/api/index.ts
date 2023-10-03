import { apiSlice } from "../../../app/api";

import type { ISignInForm } from "../SignInForm";
import type { IAuthState } from "..";

const authApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
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

export const { useSignInMutation, useSignOutMutation } = authApi;
