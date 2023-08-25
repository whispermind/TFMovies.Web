import { createTheme } from "@mui/material";

import { MuiLink, MuiButtonBase, MuiButton, MuiCssBaseline } from "./components";
import { typography } from "./typography";
import { palette } from "./palette";
import { breakpoints } from "./breakpoints";

export const mainTheme = createTheme({
  shape: {
    borderRadius: 8
  },
  typography,
  palette,
  breakpoints,
  components: {
    MuiCssBaseline,
    MuiButton,
    MuiButtonBase,
    MuiLink
  }
});
