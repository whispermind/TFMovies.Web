import { apiSlice } from "../../../../app/api";

import type { IPassRecoveryForm } from "..";

const passRecoveryApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		resetPassword: builder.mutation<void, IPassRecoveryForm & Tokened>({
			query: (credentials) => ({
				url: "/users/reset-password",
				method: "POST",
				body: credentials
			})
		})
	})
});

export const { useResetPasswordMutation } = passRecoveryApi;
