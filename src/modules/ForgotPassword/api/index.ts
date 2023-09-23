import { apiSlice } from "../../../app/api";

const forgotPasswordApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		forgotPassword: builder.mutation<void, string>({
			query: (email) => ({
				url: "/users/forgot-password",
				method: "POST",
				body: { email }
			})
		})
	})
});

export const { useForgotPasswordMutation } = forgotPasswordApi;
