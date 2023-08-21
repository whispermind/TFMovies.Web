import ArchivoItalic from "../../assets/fonts/Archivo-Italic.ttf";
import ArchivoRegular from "../../assets/fonts/Archivo-Regular.ttf";
import ArchivoBold from "../../assets/fonts/Archivo-Bold.ttf";
import ArchivoMedium from "../../assets/fonts/Archivo-Medium.ttf";
import ArchivoSemiBold from "../../assets/fonts/Archivo-SemiBold.ttf";

export const MuiCssBaseline = {
  styleOverrides: `
  @font-face {
    font-family: 'Archivo';
    src: url(${ArchivoItalic});
    font-style: italic;
    font-weight: 400;
    font-stretch: 100%;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'Archivo';
    src: url(${ArchivoMedium});
    font-style: normal;
    font-weight: 500;
    font-stretch: 100%;
    font-display: swap;
  }

  @font-face {
    font-family: 'Archivo';
    src: url(${ArchivoRegular});
    font-style: normal;
    font-weight: 400;
    font-stretch: 100%;
    font-display: swap;
  }

  @font-face {
    font-family: 'Archivo';
    src: url(${ArchivoBold});
    font-style: normal;
    font-weight: 700;
    font-stretch: 100%;
    font-display: swap;
  }

  @font-face {
    font-family: 'Archivo';
    src: url(${ArchivoSemiBold});
    font-style: normal;
    font-weight: 600;
    font-stretch: 100%;
    font-display: swap;
  }
`
};
