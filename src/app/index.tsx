
import { ThemeProvider, CssBaseline } from "@mui/material"

import { mainTheme } from "./styles/theme"
import { RegistrationPage } from "../pages/Registration"

export const App = () => (
  <ThemeProvider theme={mainTheme}>
    <CssBaseline />
    <RegistrationPage />
  </ThemeProvider>
)
