import { Typography } from "@mui/material";

import { PassRecoveryForm } from "../../modules/PassRecovery";
import { LogAuthWrapper } from "../../common/components";

export const PassRecoveryPage = () => {
  return (
    <LogAuthWrapper maxWidth="49%">
      <Typography
        variant="Sector"
        mb={5}
        display="block"
      >
        Password Recovery
      </Typography>
      <PassRecoveryForm />
    </LogAuthWrapper>
  );
};
