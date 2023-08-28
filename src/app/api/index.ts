import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import type { ISignUpForm } from "../../modules/Registration";

interface ISignUpResponse {
  token: string;
}

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
  endpoints: (builder) => ({
    signup: builder.mutation<ISignUpResponse, ISignUpForm>({
      query: (user) => ({
        url: "/api/v1/users",
        method: "POST",
        body: user
      })
    })
  })
});

export const { useSignupMutation } = apiSlice;
