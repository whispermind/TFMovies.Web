import { useState, useCallback } from "react";

import { SignUpConfirm, ISignUpForm, SignUpForm } from "../../modules/registration";
import { FormDivider, LogoHeading, LogAuthWrapper, PrimaryButton, LogoName } from "../../common/components";
import { capitalizer } from "../../common/utils";

export const SignUpPage = () => {
  const [submitedMail, setSubmitedMail] = useState("");

  const description = `We are the largest society of movies enthusiasts.
  Here you are sure to find like - minded people! To create an account,
    choose to register via social network or e - mail.`;
  const heading = (
    <>
      Welcome to the <LogoName variant="HHeader" />
    </>
  );

  const onSubmit = useCallback(
    (formData: ISignUpForm) => {
      setSubmitedMail(formData.email);
      const capitalizedData = { ...formData, nickname: capitalizer(formData.nickname) };
    },
    [setSubmitedMail]
  );

  return submitedMail ? (
    <LogAuthWrapper>
      <LogoHeading
        marginBottom={7.5}
        heading={heading}
      >
        {description}
      </LogoHeading>
      <SignUpForm onSubmit={onSubmit} />
      <FormDivider>or</FormDivider>
      <PrimaryButton
        innerText="Log in"
        variant="ghost"
        href="/signin"
        fullWidth
      />
    </LogAuthWrapper>
  ) : (
    <SignUpConfirm email={submitedMail} />
  );
};
