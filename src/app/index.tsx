import { Provider } from "react-redux";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";

import { AppLayout } from "../modules/AppLayout";
import { mainTheme } from "./styles/theme";
import { store } from "./store";

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={mainTheme}>
        <CssBaseline />
        <AppLayout>
          <Outlet />
        </AppLayout>
      </ThemeProvider>
    </Provider>
  );
};
