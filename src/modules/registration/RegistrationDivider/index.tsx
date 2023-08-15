import { DividerProps, Divider, Typography } from "@mui/material"


export const RegistrationDivider = ({sx, ...restProps}: DividerProps) => (
  <Divider {...restProps} sx={{
    margin: "1.5rem 0",
    "& > span": { padding: "0 2.5rem" },
    ...sx 
  }}>
    <Typography variant="HBody">or</Typography>
  </Divider>
)