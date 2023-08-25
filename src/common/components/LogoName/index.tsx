import { Typography, TypographyProps } from "@mui/material";

export const LogoName = (props: TypographyProps) => {
  return (
    <Typography
      color="mainColors.black"
      {...props}
    >
      MEDIA
      <Typography
        {...props}
        color="mainColors.main"
        display="inline-block"
      >
        FLIX
      </Typography>
    </Typography>
  );
};
