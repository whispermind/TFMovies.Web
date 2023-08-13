import { createTheme } from "@mui/material";

import { typography } from "./typography";
import { palette } from "./palette";
import { MuiCssBaseline } from "./components/cssbaseline";
import { MuiButton } from "./components/button";

export const mainTheme = createTheme({
  shape: {
    borderRadius: 8,
  },
  typography,
  palette,
  components: {
    MuiCssBaseline,
    MuiButton,
  },
});
