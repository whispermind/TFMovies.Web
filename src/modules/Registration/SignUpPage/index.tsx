import { useState, useCallback } from "react";
import { enqueueSnackbar } from "notistack";

import { SignUpConfirmation, ISignUpForm, SignUpForm } from "..";
import { FormDivider, LogoHeading, SubPageWrapper, PrimaryButton, LogoName } from "../../../common/components";
import { capitalizer, snackBarMessages } from "../../../common/utils";
import { useSignUpMutation } from "../api";

export const SignUpPage = () => {
	const [submitedMail, setSubmitedMail] = useState("");
	const [signUpReq, { isLoading }] = useSignUpMutation();

	const description = `We are the largest society of movies enthusiasts.
  Here you are sure to find like - minded people! To create an account,
    choose to register via social network or e - mail.`;
	const heading = (
		<>
			Welcome to the <LogoName variant="HHeader" />
		</>
	);

	const onSubmit = useCallback(
		async (formData: ISignUpForm) => {
			const capitalizedData = { ...formData, nickname: capitalizer(formData.nickname) };
			try {
				await signUpReq(capitalizedData).unwrap();
				setSubmitedMail(formData.email);
				enqueueSnackbar(snackBarMessages.instructions, { variant: "success" });
			} catch (e) {
				// handled by middleware
			}
		},
		[setSubmitedMail, signUpReq]
	);

	return (
		<SubPageWrapper maxWidth="1080px">
			{submitedMail ? (
				<SignUpConfirmation email={submitedMail} />
			) : (
				<>
					<LogoHeading
						mb={7.5}
						heading={heading}
					>
						{description}
					</LogoHeading>
					<SignUpForm
						onSubmit={onSubmit}
						isLoading={isLoading}
					/>
					<FormDivider>or</FormDivider>
					<PrimaryButton
						variant="ghost"
						href="/signin"
						fullWidth
					>
						Log in
					</PrimaryButton>
				</>
			)}
		</SubPageWrapper>
	);
};
