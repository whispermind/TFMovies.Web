import {
  AccentColors,
  mainColors,
  greyColors,
  additionalColors,
} from "../../theme/theme";

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
    HHeader: React.CSSProperties;
    HBody: React.CSSProperties;
    HBodyBold: React.CSSProperties;
    Sector: React.CSSProperties;
    ABody: React.CSSProperties;
    ABodyBold: React.CSSProperties;
    ABodyItalic: React.CSSProperties;
    ABodyUnderlined: React.CSSProperties;
    ABodyHyperlink: React.CSSProperties;
    ASubheader: React.CSSProperties;
    ASecondHeader: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    HHeader: React.CSSProperties;
    HBody: React.CSSProperties;
    HBodyBold: React.CSSProperties;
    Sector: React.CSSProperties;
    ABody: React.CSSProperties;
    ABodyBold: React.CSSProperties;
    ABodyItalic: React.CSSProperties;
    ABodyUnderlined: React.CSSProperties;
    ABodyHyperlink: React.CSSProperties;
    ASubheader: React.CSSProperties;
    ASecondHeader: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
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
