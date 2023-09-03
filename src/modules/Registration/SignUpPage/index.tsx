import { useState, useCallback } from "react";

import { SignUpConfirm, ISignUpForm, SignUpForm } from "..";
import { FormDivider, LogoHeading, LogAuthWrapper, PrimaryButton, LogoName } from "../../../common/components";
import { capitalizer } from "../../../common/utils";
import { useSignUp } from "../../../common/hooks";

export const SignUpPage = () => {
	const [submitedMail, setSubmitedMail] = useState("");
	const [signUpReq, { isLoading }] = useSignUp();

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
			} catch (e) {
				console.log(e);
			}
		},
		[setSubmitedMail, signUpReq]
	);

	return (
		<LogAuthWrapper maxWidth="65%">
			{submitedMail ? (
				<SignUpConfirm email={submitedMail} />
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
		</LogAuthWrapper>
	);
};
