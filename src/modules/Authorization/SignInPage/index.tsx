import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { enqueueSnackbar } from "notistack";

import { SignInForm, ISignInForm, selectAuth } from "..";
import { FormDivider, SignUpButton, SubPageWrapper, LogoHeading, LogoName } from "../../../common/components";
import { useSignIn, useAppDispatch, useAppSelector } from "../../../common/hooks";
import { signIn } from "../AuthSlice";
import { snackBarMessages } from "../../../common/utils";

export const SignInPage = () => {
	const [signInReq, { isLoading }] = useSignIn();
	const { accessToken } = useAppSelector(selectAuth);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		if (accessToken) navigate("/");
	}, [accessToken, navigate]);

	const description = `We are largest society of movies enthusiasts. 
		Here you are sure to find like-minded people! To log into your account, enter your username and password`;
	const heading = (
		<>
			Welcome back to the <LogoName variant="HHeader" />
		</>
	);

	const onSubmit = useCallback(
		async (credentials: ISignInForm) => {
			try {
				const authData = await signInReq(credentials).unwrap();
				dispatch(signIn(authData));
				enqueueSnackbar(snackBarMessages.signIn, { variant: "success" });
				navigate("/");
			} catch (e) {
				// handled by middleware
			}
		},
		[navigate, dispatch, signInReq]
	);

	return (
		<SubPageWrapper maxWidth="1080px">
			<LogoHeading
				mb={7.5}
				heading={heading}
			>
				{description}
			</LogoHeading>
			<SignInForm
				onSubmit={onSubmit}
				isLoading={isLoading}
			/>
			<FormDivider sx={{ m: "2.25rem 0" }}>Don`t have an account?</FormDivider>
			<SignUpButton
				href="/signup"
				fullWidth
			/>
		</SubPageWrapper>
	);
};
