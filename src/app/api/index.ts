import { createApi } from "@reduxjs/toolkit/query/react";

import { refreshBaseQuery } from "./refreshBaseQuery";
import type { ISignUpForm } from "../../modules/Registration";
import type { ISignInForm, IAuthState } from "../../modules/Authorization";
import type { IPassRecoveryForm } from "../../modules/PassRecovery";
import type { IArticle } from "../../common/components";
import { ICommentData } from "../../common/components/Comments/CommentsList";

interface IFormData {
  body: string;
	author: string;
}

interface IGetArticleResponseData {
	page: number;
	pages: number;
	articles: IArticle[];
}

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
		signOut: builder.mutation<void, Omit<IAuthState, "currentUser">>({
			query: (tokens) => ({
				url: "/users/logout",
				method: "POST",
				body: tokens
			})
		}),
		signUpEmailConfirmation: builder.mutation<void, string>({
			query: (email) => ({
				url: "/users/send-activation-email",
				method: "POST",
				body: { email }
			})
		}),
		forgotPassword: builder.mutation<void, string>({
			query: (email) => ({
				url: "/users/forgot-password",
				method: "POST",
				body: { email }
			})
		}),
		validateToken: builder.mutation<void, { token: string; endpoint: string }>({
			query: ({ token, endpoint }) => ({
				url: `/users/${endpoint}`,
				method: "POST",
				body: { token }
			})
		}),
		resetPassword: builder.mutation<void, IPassRecoveryForm & Tokened>({
			query: (credentials) => ({
				url: "/users/reset-password",
				method: "POST",
				body: credentials
			})
		}),
		getArticles: builder.query<IGetArticleResponseData, string>({
			query: (query) => ({
				url: `/posts${query}`
			})
		}),
		getTopAuthors: builder.query<string[], void>({
			query: () => ({ url: "/topauthors" })
		}),
		getTopTags: builder.query<string[], void>({
			query: () => ({ url: "/toptags" })
		}),
		getThemes: builder.query<string[], void>({
			query: () => ({ url: "/themes" })
		}),
		getComments: builder.query<ICommentData[], void>({
			query: () => ({ url: "http://localhost:3004/comments"})
		}),
		createComment: builder.mutation<void, IFormData>({
      query: (comment) => ({
        url: "/comments",
        method: "POST",
        body: comment,
      }),
    }),
	})
});

export const {
	useResetPasswordMutation,
	useValidateTokenMutation,
	useSignInMutation,
	useSignOutMutation,
	useSignUpEmailConfirmationMutation,
	useForgotPasswordMutation,
	useSignUpMutation,
	useGetArticlesQuery,
	useGetTopAuthorsQuery,
	useGetTopTagsQuery,
	useGetThemesQuery,
	useGetCommentsQuery,
	useCreateCommentMutation,
} = apiSlice;
