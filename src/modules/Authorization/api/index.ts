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
		signOut: builder.mutation<void, Omit<IAuthState, "currentUser">>({
			query: (tokens) => ({
				url: "/users/logout",
				method: "POST",
				body: tokens
			})
		})
	})
});

export const { useSignInMutation, useSignOutMutation } = authApi;
