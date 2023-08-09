import { ThemeProvider, CssBaseline } from "@mui/material"
import { mainTheme } from "../theme"

export const App = () => (
  <ThemeProvider theme={mainTheme}>
    <CssBaseline />
  </ThemeProvider>
)
