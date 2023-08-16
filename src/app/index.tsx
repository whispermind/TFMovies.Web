
import { ThemeProvider, CssBaseline, Grid } from "@mui/material"

import { mainTheme } from "./styles/theme"
import { RegistrationPage } from "../pages/Registration"

export const App = () => (
  <ThemeProvider theme={mainTheme}>
    <CssBaseline />
    <Grid container maxWidth="xl" justifyContent="center" margin="0 auto" xl={8}>
      <RegistrationPage />
    </Grid>
  </ThemeProvider>
)
