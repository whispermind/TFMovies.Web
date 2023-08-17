import { ThemeProvider, CssBaseline, Grid, Container } from "@mui/material";
import { Outlet } from "react-router-dom";

import { mainTheme } from "./styles/theme";

export function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <Container maxWidth="xl">
        <Grid container justifyContent="center" margin="0 auto" xl={8.15}>
          <Grid item width="100%">
            <Outlet />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
