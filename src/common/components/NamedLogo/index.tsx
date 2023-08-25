import { Box, TypographyProps, BoxProps, Button } from "@mui/material";

import { LogoIcon } from "../Icons/LogoIcon";
import { LogoName } from "../LogoName";

interface INamedLogoProps extends TypographyProps {
  boxProps?: BoxProps;
}

export const NamedLogo = ({ boxProps, ...typoProps }: INamedLogoProps) => {
  return (
    <Button
      href="/"
      color="inherit"
    >
      <Box
        {...boxProps}
        sx={{
          display: "flex",
          alignItems: "center",
          ...boxProps?.sx
        }}
      >
        <LogoIcon
          disabled
          sx={{ width: "44px", height: "44px", mr: "1.5rem" }}
        />
        <LogoName
          {...typoProps}
          variant="Logo"
        />
      </Box>
    </Button>
  );
};
