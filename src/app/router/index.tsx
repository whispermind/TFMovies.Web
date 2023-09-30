import { createRoutesFromElements, createBrowserRouter, Route } from "react-router-dom";

import { App } from "..";
import {
	ErrorPage,
	SignUpSuccessPage,
	SignUpPage,
	SignInPage,
	PassRecoveryPage,
	ForgotPassPage,
	MainPage,
	SearchPage,
	CreateArticlePage,
	CreateArticleSuccessPage,
	ArticlePage,
	EditArticlePage,
	LikedArticles
} from "../../pages";

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path="/"
			element={<App />}
			errorElement={<ErrorPage />}
		>
			<Route
				path="/"
				element={<MainPage />}
			/>

			<Route
				path="signup"
				element={<SignUpPage />}
			>
				<Route
					path=":token"
					element={<SignUpSuccessPage />}
				/>
			</Route>

			<Route path="/auth">
				<Route
					path="signin"
					element={<SignInPage />}
				/>
				<Route
					path="passrecovery/:token"
					element={<PassRecoveryPage />}
				/>
				<Route
					path="forgotpass"
					element={<ForgotPassPage />}
				/>
			</Route>

			<Route path="/article">
				<Route
					path="create"
					element={<CreateArticlePage />}
				/>
				<Route
					path="published"
					element={<CreateArticleSuccessPage />}
				/>
				<Route
					path=":id"
					element={<ArticlePage />}
				/>
				<Route path="edit">
					<Route
						path="favorites"
						element={<LikedArticles />}
					/>
					<Route
						path=":id"
						element={<EditArticlePage />}
					/>
				</Route>
			</Route>

			<Route
				path="search"
				element={<SearchPage />}
			/>
		</Route>
	)
);
