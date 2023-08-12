import { ButtonProps } from "@mui/material";

import { StyledSignUpButton } from "./styled";
import { EmailIcon } from "../../Icons/email";


export const SignUpButton = (props: ButtonProps) => {
  return (
    <StyledSignUpButton variant="contained" type="submit" {...props} >
      {<EmailIcon />}
      Sign up with Email
    </StyledSignUpButton>)
}