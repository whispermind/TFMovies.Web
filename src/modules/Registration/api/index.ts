import { apiSlice } from "../../../app/api";

import type { ISignUpForm } from "../SignUpForm";

export type TTokenValidationEndpoints = "validate-reset-token" | "verify-email";

const registrationApi = apiSlice.injectEndpoints({
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
		})
	})
});

export const { useSignUpMutation, useSendSignUpEmailConfirmationMutation, useValidateTokenMutation } = registrationApi;
