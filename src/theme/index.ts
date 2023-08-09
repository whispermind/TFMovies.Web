import { createTheme } from "@mui/material";
import ArchivoItalic from "./../fonts/Archivo-Italic.ttf";
import ArchivoRegular from "./../fonts/Archivo-Regular.ttf";
import ArchivoBold from "./../fonts/Archivo-Bold.ttf";

export interface mainColors {
  main?: string;
  white?: string;
  lightGrey?: string;
  black?: string;
  graphite?: string;
}

export interface AccentColors {
  orange?: string;
  lightOrange?: string;
}

export interface greyColors {
  grey?: string;
  strokeGrey?: string;
}

export interface additionalColors {
  errorRed?: string;
}

export const mainTheme = createTheme({
  palette: {
    mainColors: {
      main: "#E30000",
      white: "#FFF",
      lightGrey: "#F5F5F5",
      black: "#060606",
      graphite: "#242424",
    },
    accentColors: {
      orange: "#F26601",
      lightOrange: "#FFECDE",
    },
    greyColors: {
      grey: "#676767",
      strokeGrey: "#D4D4D4",
    },
    additionalColors: {
      errorRed: "#EA0000",
    },
  },
  typography: {
    fontFamily: "Archivo",

    HHeader: {
      fontSize: "3.25rem",
      lineHeight: "4.875rem",
      fontWeight: "bold",
    },
    HBody: {
      fontSize: "1rem",
      lineHeight: "1.5rem",
    },
    HBodyBold: {
      fontSize: "1rem",
      lineHeight: "1.5rem",
      fontWeight: "bold",
    },
    Sector: {
      fontSize: "1.5rem",
      lineHeight: "2.25rem",
      fontWeight: "bold",
    },
    ABody: {
      fontSize: "1.25rem",
      lineHeight: "2.125rem",
    },
    ABodyBold: {
      fontSize: "1.25rem",
      lineHeight: "2.125rem",
      fontWeight: "bold",
    },
    ABodyItalic: {
      fontSize: "1.25rem",
      lineHeight: "2.125rem",
      fontStyle: "italic",
    },
    ABodyUnderlined: {
      fontSize: "1.25rem",
      lineHeight: "2.125rem",
      textDecoration: "underline",
    },
    ABodyHyperlink: {
      fontSize: "1.25rem",
      lineHeight: "2.125rem",
      textDecoration: "underline",
      fontWeight: "bold",
    },
    ASubheader: {
      fontSize: "2rem",
      lineHeight: "3rem",
      fontWeight: "bold",
    },
    ASecondHeader: {
      fontSize: "1.5rem",
      lineHeight: "2.5rem",
      fontWeight: "bold",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      @font-face {
        font-family: 'Archivo';
        font-style: normal;
        font-weight: 400;
        font-stretch: 100%;
        font-display: swap;
        src: url(${ArchivoRegular});
      }
      @font-face {
        font-family: 'Archivo';
        font-style: italic;
        font-weight: 400;
        font-stretch: 100%;
        font-display: swap;
        src: url(${ArchivoItalic});
      }
      @font-face {
        font-family: 'Archivo';
        font-style: 'normal;
        font-weight: 700;
        font-stretch: 100%;
        font-display: swap;
        src: url(${ArchivoBold});
      }`,
    },
  },
});
