import { createApi } from "@reduxjs/toolkit/query/react";

import { refreshBaseQuery } from "./refreshBaseQuery";

import type { ISignUpForm } from "../../modules/Registration";
import type { ISignInForm, IAuthState } from "../../modules/Authorization";
import type { IPassRecoveryForm } from "../../modules/PassRecovery";
import type { IArticleCard } from "../../common/components";

interface IGetArticleResponseData {
	page: number;
	totalPages: number;
	totalRecords: number;
	themeId: string;
	sort: string;
	limit: number;
	data: IArticleCard[];
}

interface ICreateArticleReq {
	coverImageUrl: string;
	ThemeId: string;
	title: string;
	HtmlContent: string;
	tags: string[];
}

export interface IGetThemeResponseData {
	id: string;
	name: string;
}

export const apiSlice = createApi({
	baseQuery: refreshBaseQuery,
	tagTypes: ["Article"],
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
		imageUpload: builder.mutation<{ fileUrl: string }, Blob>({
			query: (file) => {
				const bodyFormData = new FormData();
				bodyFormData.append("File", file);

				return {
					url: "/files/upload-image",
					method: "POST",
					body: bodyFormData,
					formData: true
				};
			}
		}),
		createArticle: builder.mutation<void, ICreateArticleReq>({
			query: (articleData) => ({
				url: "/posts",
				method: "POST",
				body: articleData
			}),
			invalidatesTags: ["Article"]
		}),
		likeArticle: builder.mutation<void, string>({
			query: (id) => ({
				url: `/posts/${id}/likes`,
				method: "POST"
			}),
			invalidatesTags: ["Article"]
		}),
		unlikeArticle: builder.mutation<void, string>({
			query: (id) => ({
				url: `/posts/${id}/likes`,
				method: "DELETE"
			}),
			invalidatesTags: ["Article"]
		}),
		getArticles: builder.query<IGetArticleResponseData, string>({
			query: (query) => ({
				url: `/posts${query}`
			}),
			providesTags: (result) => (result ? [...result.data.map(({ id }) => ({ type: "Article" as const, id })), "Article"] : ["Article"])
		}),
		getTopAuthors: builder.query<string[], void>({
			query: () => ({ url: "/topauthors" })
		}),
		getTopTags: builder.query<string[], void>({
			query: () => ({ url: "/toptags" })
		}),
		getThemes: builder.query<IGetThemeResponseData[], void>({
			query: () => ({ url: "/themes" })
		})
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
	useImageUploadMutation,
	useCreateArticleMutation,
	useUnlikeArticleMutation,
	useLikeArticleMutation
} = apiSlice;
