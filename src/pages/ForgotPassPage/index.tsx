import { Typography, Stack } from "@mui/material";

import { ForgotPassForm } from "../../modules/forgotPassword/forgotPasswordForm";
import { LogAuthWrapper } from "../../common/components";

export const ForgotPassPage = () => {
  return (
    <LogAuthWrapper>
      <Stack
        rowGap={1.5}
        marginBottom={7.5}
      >
        <Typography variant="Sector">Forgot your Password?</Typography>
        <Typography variant="HBody">
          You need to enter your email to recover your password. We will send an instruction with password recovery to your e-mail.
        </Typography>
      </Stack>
      <ForgotPassForm />
    </LogAuthWrapper>
  );
};
