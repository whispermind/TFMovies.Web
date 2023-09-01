import { createApi } from "@reduxjs/toolkit/query/react";

import { refreshBaseQuery } from "./refreshBaseQuery";
import type { ISignUpForm } from "../../modules/Registration";
import type { ISignInForm, IAuthState } from "../../modules/Authorization";
import { IPassRecoveryForm } from "../../modules/PassRecovery";

export const apiSlice = createApi({
  baseQuery: refreshBaseQuery,
  endpoints: (builder) => ({
    signUp: builder.mutation<void, ISignUpForm>({
      query: (user) => ({
        url: "/users/signup",
        method: "POST",
        body: user
      })
    }),
    signIn: builder.mutation<IAuthState, ISignInForm>({
      query: (credentials) => ({
        url: "/users/login",
        method: "POST",
        body: credentials
      })
    }),
    signUpEmailConfirmation: builder.mutation<void, string>({
      query: (email) => ({
        url: "/users/send-activation-email",
        method: "POST",
        body: { email }
      })
    }),
    signUpVerification: builder.mutation<void, string>({
      query: (token) => ({
        url: "/users/verify-email",
        method: "POST",
        body: { token }
      })
    }),
    forgotPassword: builder.mutation<void, string>({
      query: (email) => ({
        url: "/users/forgot-password",
        method: "POST",
        body: { email }
      })
    }),
    validateResetToken: builder.mutation<void, string>({
      query: (token) => ({
        url: "/users/validate-reset-token",
        method: "POST",
        body: { token }
      })
    }),
    resetPassword: builder.mutation<void, IPassRecoveryForm & { token: string }>({
      query: (credentials) => ({
        url: "/users/reset-password",
        method: "POST",
        body: credentials
      })
    })
  })
});

export const {
  useResetPasswordMutation,
  useValidateResetTokenMutation,
  useSignInMutation,
  useSignUpEmailConfirmationMutation,
  useForgotPasswordMutation,
  useSignUpVerificationMutation,
  useSignUpMutation
} = apiSlice;
