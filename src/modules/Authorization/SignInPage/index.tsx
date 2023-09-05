import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { enqueueSnackbar } from "notistack";

import { SignInForm, ISignInForm } from "..";
import { FormDivider, SignUpButton, LogAuthWrapper, LogoHeading, LogoName } from "../../../common/components";
import { useSignIn, useAppDispatch } from "../../../common/hooks";
import { signIn } from "../AuthSlice";
import { isApiError } from "../../../common/utils/helpers/errorHelpers";
import { snackBarMessages } from "../../../common/utils";

export const SignInPage = () => {
	const [signInReq, { isLoading }] = useSignIn();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

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
				if (isApiError(e)) {
					enqueueSnackbar(e.data.ErrorMessage, { variant: "error" });
				}
			}
		},
		[navigate, dispatch, signInReq]
	);

	return (
		<LogAuthWrapper maxWidth="65%">
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
		</LogAuthWrapper>
	);
};
