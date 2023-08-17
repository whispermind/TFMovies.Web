import { useState, useCallback } from "react";

import { SignUp, SignUpConfirm, ISignUpForm } from "../../modules/registration";
import { capitalizer } from "../../common/utils";

export const SignUpPage = () => {
  const [submitedMail, setSubmitedMail] = useState("");

  const onSubmit = useCallback(
    (formData: ISignUpForm) => {
      setSubmitedMail(formData.email);
      const capitalizedData = { ...formData, nickname: capitalizer(formData.nickname) };
    },
    [setSubmitedMail]
  );

  return submitedMail ? <SignUpConfirm email={submitedMail} /> : <SignUp onSubmit={onSubmit} />;
};
