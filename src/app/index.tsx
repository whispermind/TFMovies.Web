import { ThemeProvider, CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";

import { AppLayout } from "../modules/AppLayout";
import { mainTheme } from "./styles/theme";

export const App = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <AppLayout>
        <Outlet />
      </AppLayout>
    </ThemeProvider>
  );
};
