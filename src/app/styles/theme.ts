import { createTheme } from "@mui/material";

import ArchivoItalic from "../assets/fonts/Archivo-Italic.ttf";
import ArchivoRegular from "../assets/fonts/Archivo-Regular.ttf";
import ArchivoBold from "../assets/fonts/Archivo-Bold.ttf";

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

    Input: {
      fontSize: "0.9375rem",
      lineHeight: "1.5rem",
      fontWeight: "normal",
      fontStyle: "normal"
    },

    HHeader: {
      fontSize: "3.25rem",
      lineHeight: "4.875rem",
      fontWeight: "bold",
      fontStyle: "normal"
    },

    HBody: {
      fontSize: "1rem",
      lineHeight: "1.5rem",
      fontWeight: "normal",
      fontStyle: "normal"
    },

    HBodyBold: {
      fontSize: "1rem",
      lineHeight: "1.5rem",
      fontWeight: "bold",
      fontStyle: "normal"
    },

    Sector: {
      fontSize: "1.5rem",
      lineHeight: "2.25rem",
      fontWeight: "bold",
      fontStyle: "normal"
    },

    ABody: {
      fontSize: "1.25rem",
      lineHeight: "2.125rem",
      fontWeight: "normal",
      fontStyle: "normal"
    },
    
    ABodyBold: {
      fontSize: "1.25rem",
      lineHeight: "2.125rem",
      fontWeight: "bold",
      fontStyle: "normal"
    },

    ABodyItalic: {
      fontSize: "1.25rem",
      lineHeight: "2.125rem",
      fontWeight: "normal",
      fontStyle: "italic",
    },

    ABodyUnderlined: {
      fontSize: "1.25rem",
      lineHeight: "2.125rem",
      fontWeight: "normal",
      fontStyle: "normal",
      textDecoration: "underline",
    },

    ABodyHyperlink: {
      fontSize: "1.25rem",
      lineHeight: "2.125rem",
      fontWeight: "bold",
      fontStyle: "normal",
      textDecoration: "underline",
    },

    ASubheader: {
      fontSize: "2rem",
      lineHeight: "3rem",
      fontWeight: "bold",
      fontStyle: "normal"
    },
    
    ASecondHeader: {
      fontSize: "1.5rem",
      lineHeight: "2.5rem",
      fontWeight: "bold",
      fontStyle: "normal"
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
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
      }

      @font-face {
        font-family: 'Archivo';
        font-style: normal;
        font-weight: 400;
        font-stretch: 100%;
        font-display: swap;
        src: url(${ArchivoRegular});
      }
   `,
    },
  },
});
