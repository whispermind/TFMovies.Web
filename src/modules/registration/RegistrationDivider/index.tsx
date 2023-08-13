import { DividerProps, Divider, Typography } from "@mui/material"

export const RegistrationDivider = (props: DividerProps) => (
  <Divider {...props} sx={{
    margin: "2rem 0",
    "& > span": { padding: "0 2.5rem" }
  }}>
    <Typography variant="HBody">or</Typography>
  </Divider>
)