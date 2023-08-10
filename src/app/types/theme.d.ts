import { CSSProperties } from "react";

import {
  AccentColors,
  mainColors,
  greyColors,
  additionalColors,
} from "../styles/theme";

declare module "@mui/material/styles" {
  interface PaletteColor {
    white?: string;
    lightGrey?: string;
    black?: string;
    graphite?: string;
    red?: string;
    lightOrange?: string;
    grey?: string;
    strokeGrey?: string;
    errorRed?: string;
  }

  interface SimplePaletteColorOptions {
    white?: string;
    lightGrey?: string;
    black?: string;
    graphite?: string;
    red?: string;
    lightOrange?: string;
    grey?: string;
    strokeGrey?: string;
    errorRed?: string;
  }

  interface Palette {
    mainColors: mainColors;
    accentColors: AccentColors;
    greyColors: greyColors;
    additionalColors: additionalColors;
  }

  interface PaletteOptions {
    mainColors?: mainColors;
    accentColors?: AccentColors;
    greyColors?: greyColors;
    additionalColors?: additionalColors;
  }

  interface TypographyVariants {
    Input: CSSProperties;
    HHeader: CSSProperties;
    HBody: CSSProperties;
    HBodyBold: CSSProperties;
    Sector: CSSProperties;
    ABody: CSSProperties;
    ABodyBold: CSSProperties;
    ABodyItalic: CSSProperties;
    ABodyUnderlined: CSSProperties;
    ABodyHyperlink: CSSProperties;
    ASubheader: CSSProperties;
    ASecondHeader: CSSProperties;
  }

  interface TypographyVariantsOptions {
    Input: CSSProperties;
    HHeader: CSSProperties;
    HBody: CSSProperties;
    HBodyBold: CSSProperties;
    Sector: CSSProperties;
    ABody: CSSProperties;
    ABodyBold: CSSProperties;
    ABodyItalic: CSSProperties;
    ABodyUnderlined: CSSProperties;
    ABodyHyperlink: CSSProperties;
    ASubheader: CSSProperties;
    ASecondHeader: CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    Input: true;
    HHeader: true;
    HBody: true;
    HBodyBold: true;
    Sector: true;
    ABody: true;
    ABodyBold: true;
    ABodyItalic: true;
    ABodyUnderlined: true;
    ABodyHyperlink: true;
    ASubheader: true;
    ASecondHeader: true;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    mainColors: true;
    accentColors: true;
    greyColors: true;
    additionalColors: true;
  }
}
