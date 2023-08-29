import { createApi } from "@reduxjs/toolkit/query/react";

import { refreshBaseQuery } from "./refreshBaseQuery";
import type { ISignUpForm } from "../../modules/Registration";
import type { ISignInForm, IAuthState } from "../../modules/Authorization";

interface ISignUpResponse {}

export const apiSlice = createApi({
  baseQuery: refreshBaseQuery,
  endpoints: (builder) => ({
    signUp: builder.mutation<ISignUpResponse, ISignUpForm>({
      query: (user) => ({
        url: "/api/v1/users",
        method: "POST",
        body: user
      })
    }),
    signIn: builder.mutation<IAuthState, ISignInForm>({
      query: (credentials) => ({
        url: "/api/v1/auth",
        method: "POST",
        body: credentials
      })
    })
  })
});

export const { useSignUpMutation, useSignInMutation } = apiSlice;
