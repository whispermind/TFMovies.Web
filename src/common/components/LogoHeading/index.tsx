import { Typography, Stack, StackProps } from "@mui/material"
import { PropsWithChildren } from "react";

import { LogoIcon } from "../Icons/LogoIcon"
import { Tagline } from "../Tagline";

export interface ILogoHeadingProps {
  headingText?: string;
}

export const LogoHeading = ({ headingText, children, ...restProps }: PropsWithChildren<ILogoHeadingProps & StackProps>) => {
  return (
    <Stack rowGap="0.75rem" alignItems="center" {...restProps}>
      <LogoIcon sx={{ width: "120px", height: "115px" }} />
      <Typography variant="HHeader">{headingText || <Tagline variant="HHeader" />}</Typography>
      <Typography variant="HBody">{children}</Typography>
    </Stack>
  )
}