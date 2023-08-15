import { createTheme } from "@mui/material";

import { typography } from "./typography";
import { palette } from "./palette";
import { MuiCssBaseline } from "./components/cssbaseline";
import { MuiButton } from "./components/button";
import { breakpoints } from "./breakpoints";

export const mainTheme = createTheme({
  shape: {
    borderRadius: 8,
  },
  typography,
  palette,
  breakpoints,
  components: {
    MuiCssBaseline,
    MuiButton,
  },
});
