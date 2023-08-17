import ArchivoItalic from "../../assets/fonts/Archivo-Italic.ttf";
import ArchivoRegular from "../../assets/fonts/Archivo-Regular.ttf";
import ArchivoBold from "../../assets/fonts/Archivo-Bold.ttf";

export const MuiCssBaseline = {
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
`
};
