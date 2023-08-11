import { ButtonProps } from "@mui/material";
import { Typography } from "@mui/material";
import { StyledSignUpButton } from "./styled";

import { EmailIcon } from "../../utils";


export const SignUpButton = (props: ButtonProps) => {
  return (
    <StyledSignUpButton variant="contained"  type="submit" {...props} >
      {EmailIcon}
      <Typography>Sign up with Email</Typography>
    </StyledSignUpButton>)
}