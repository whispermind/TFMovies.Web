import { Typography, TypographyProps } from "@mui/material";

export const Tagline = (props: TypographyProps) => {
  return (
    <Typography {...props}>
      Media
      <Typography
        {...props}
        color="mainColors.main"
        display="inline-block"
      >
        Flix
      </Typography>
    </Typography>
  );
};
