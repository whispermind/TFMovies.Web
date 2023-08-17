import { Typography, Stack, StackProps } from "@mui/material";
import { PropsWithChildren } from "react";

import { LogoIcon } from "../Icons/LogoIcon";

export interface ILogoHeadingProps {
  heading?: JSX.Element | string;
}

export const LogoHeading = ({ heading, children, ...restProps }: PropsWithChildren<ILogoHeadingProps & StackProps>) => {
  return (
    <Stack
      rowGap={1.5}
      alignItems="center"
      {...restProps}
    >
      <LogoIcon sx={{ width: "120px", height: "115px" }} />
      <Typography variant="HHeader">{heading}</Typography>
      <Typography variant="HBody">{children}</Typography>
    </Stack>
  );
};
