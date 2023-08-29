import { createApi } from "@reduxjs/toolkit/query/react";

import { refreshBaseQuery } from "./refreshBaseQuery";
import type { ISignUpForm } from "../../modules/Registration";
import type { ISignInForm, IAuthState } from "../../modules/Authorization";

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
    signUpConfirmation: builder.mutation<void, string>({
      query: (email) => ({
        url: "/users/send-activation-email",
        method: "POST",
        body: email
      })
    }),
    forgotPassword: builder.mutation<void, string>({
      query: (email) => ({
        url: "/users/send-activation-email",
        method: "POST",
        body: email
      })
    })
  })
});

export const { useSignUpMutation, useSignInMutation, useSignUpConfirmationMutation, useForgotPasswordMutation } = apiSlice;
