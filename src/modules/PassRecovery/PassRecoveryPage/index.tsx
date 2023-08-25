import { Typography } from "@mui/material";

import { PassRecoveryForm } from "..";
import { LogAuthWrapper } from "../../../common/components";

export const PassRecoveryPage = () => {
  return (
    <LogAuthWrapper
      maxWidth="50%"
      flexGrow="1"
    >
      <Typography
        display="block"
        variant="Sector"
        mb={5}
      >
        Password Recovery
      </Typography>
      <PassRecoveryForm />
    </LogAuthWrapper>
  );
};
