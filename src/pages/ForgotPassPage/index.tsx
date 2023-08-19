import { Typography, Stack } from "@mui/material";

import { ForgotPassForm } from "../../modules/forgotPassword/forgotPasswordForm";
import { LogAuthWrapper } from "../../common/components";

export const ForgotPassPage = () => {
  const heading = "Forgot your Password?";
  const description = "You need to enter your email to recover your password. We will send an instruction with password recovery to your e-mail.";
  return (
    <LogAuthWrapper>
      <Stack
        rowGap={1.5}
        marginBottom={7.5}
      >
        <Typography variant="Sector">{heading}</Typography>
        <Typography variant="HBody">{description}</Typography>
      </Stack>
      <ForgotPassForm />
    </LogAuthWrapper>
  );
};
