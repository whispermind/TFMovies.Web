import { Typography } from "@mui/material";

import { PassRecoveryForm } from "../../modules/passRecovery";
import { LogAuthWrapper } from "../../common/components";

export const PassRecoveryPage = () => {
  return (
    <LogAuthWrapper>
      <Typography
        variant="Sector"
        marginBottom={5}
        display="block"
      >
        Password Recovery
      </Typography>
      <PassRecoveryForm />
    </LogAuthWrapper>
  );
};
