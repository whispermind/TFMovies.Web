import { ButtonProps, Interpolation, Theme } from "@mui/material";

import { palette } from "../palette";

const {
  mainColors: { graphite, main, white, black },
  accentColors: { lightOrange },
  greyColors: { strokeGrey },
} = palette;

export const MuiButton: StylesOverrides<
  ButtonProps["variant"],
  Interpolation<{ theme: Theme }>
> = {
  variants: [
    {
      props: { variant: "customOutlined" },
      style: {
        height: "44px",
        border: `2px solid ${main}`,
        borderRadius: "8px",
        color: main,
        textTransform: "capitalize",
        backgroundColor: "transparent",

        ":hover": {
          color: white,
          backgroundColor: main,
        },
      },
    },
    {
      props: { variant: "ghost" },
      style: {
        height: "44px",
        borderRadius: "8px",
        color: graphite,
        textTransform: "capitalize",
        backgroundColor: "transparent",

        ":hover": {
          color: main,
          backgroundColor: lightOrange,
        },
      },
    },
    {
      props: { variant: "second" },
      style: {
        height: "44px",
        border: `2px solid ${strokeGrey}`,
        borderRadius: "8px",
        color: graphite,
        textTransform: "capitalize",
        backgroundColor: "transparent",

        ":hover": {
          borderColor: "transparent",
          color: main,
          backgroundColor: lightOrange,
        },
      },
    },
    {
      props: { variant: "signup" },
      style: {
        height: "44px",
        padding: "0 0.75rem",
        borderRadius: "8px",
        columnGap: "1.375rem",
        fontSize: "0.9375rem",
        color: white,
        textTransform: "none",
        backgroundColor: graphite,

        ":hover": {
          backgroundColor: black,
        },
      },
    },
  ],
};
