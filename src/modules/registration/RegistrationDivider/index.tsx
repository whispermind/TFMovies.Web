import { DividerProps, Typography } from "@mui/material"

import { StyledDivider } from "./styled"

export const RegistrationDivider = (props: DividerProps) => (
<StyledDivider {...props}>
  <Typography variant="HBody">or</Typography>
</StyledDivider>
)