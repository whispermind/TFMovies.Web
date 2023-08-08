import { Button, ButtonProps } from "@mui/material";
import { EmailIcon } from "../../utils";
import { Typography } from "@mui/material";

export const SignUpButton = (props: ButtonProps) => {
  return (
    <Button sx={{
      padding: "0px, 12px, 0px, 12px",
      columnGap: "22px",
      textTransform: "none"
    }} type="submit" {...props} >
      {EmailIcon}
      <Typography>Sign up with Email</Typography>
    </Button>)
}