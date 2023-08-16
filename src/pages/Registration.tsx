import { useState, useCallback } from "react";

import { SignUp, SignUpConfirm, ISignUpForm } from "../modules/registration";

export const RegistrationPage = () => {
  const [submitedMail, setSubmitedMail] = useState('');

  const onSubmit = useCallback((formData: ISignUpForm) => {
    setSubmitedMail(formData.email)
  }, [setSubmitedMail])

  return (
    submitedMail ? <SignUpConfirm email={submitedMail} /> : <SignUp onSubmit={onSubmit} />
  )
}