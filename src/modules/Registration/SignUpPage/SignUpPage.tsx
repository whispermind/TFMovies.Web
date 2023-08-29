import { useState, useCallback } from "react";

import { SignUpConfirm, ISignUpForm, SignUpForm } from "..";
import { FormDivider, LogoHeading, LogAuthWrapper, PrimaryButton, LogoName } from "../../../common/components";
import { capitalizer } from "../../../common/utils";
import { useSignUp, useSignUpConfirmation } from "../../../common/hooks";

export const SignUpPage = () => {
  const [submitedMail, setSubmitedMail] = useState("");
  const [signUpReq] = useSignUp();
  const [signUpConfirmationReq] = useSignUpConfirmation();

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
        await signUpConfirmationReq(formData.email);
        setSubmitedMail(formData.email);
      } catch (e) {
        console.log(e);
      }
    },
    [setSubmitedMail, signUpReq, signUpConfirmationReq]
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
          <SignUpForm onSubmit={onSubmit} />
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
