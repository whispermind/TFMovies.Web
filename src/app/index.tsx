import { ThemeProvider, CssBaseline } from "@mui/material"

import { mainTheme } from "./styles/theme"

export const App = () => (
  <ThemeProvider theme={mainTheme}>
    <CssBaseline />
  </ThemeProvider>
)
