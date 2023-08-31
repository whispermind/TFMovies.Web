import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Stack } from "@mui/material";

import { ForgotPassForm, IForgotPassForm } from "../ForgotPasswordForm";
import { LogAuthWrapper, Loader } from "../../../common/components";
import { useForgotPassword } from "../../../common/hooks";

export const ForgotPassPage = () => {
  const [forgotPasswordReq, { isLoading }] = useForgotPassword();
  const navigate = useNavigate();

  const heading = "Forgot your Password?";
  const description = "You need to enter your email to recover your password. We will send an instruction with password recovery to your e-mail.";

  const onSubmit = useCallback(
    async ({ email }: IForgotPassForm) => {
      try {
        await forgotPasswordReq(email).unwrap();
        navigate("/");
      } catch (e) {
        console.log(e);
      }
    },
    [forgotPasswordReq, navigate]
  );

  return isLoading ? (
    <Loader />
  ) : (
    <LogAuthWrapper maxWidth="50%">
      <Stack
        rowGap={1.5}
        mb={7.5}
      >
        <Typography variant="Sector">{heading}</Typography>
        <Typography variant="HBody">{description}</Typography>
      </Stack>
      <ForgotPassForm onSubmit={onSubmit} />
    </LogAuthWrapper>
  );
};
