import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
import { SnackbarProvider } from "notistack";

import { AppLayout } from "../common/components/AppLayout";
import { mainTheme } from "./styles/theme";
import { store, persistor } from "./store";

export const App = () => {
	return (
		<Provider store={store}>
			<PersistGate
				loading={null}
				persistor={persistor}
			>
				<ThemeProvider theme={mainTheme}>
					<SnackbarProvider />
					<CssBaseline />
					<AppLayout>
						<Outlet />
					</AppLayout>
				</ThemeProvider>
			</PersistGate>
		</Provider>
	);
};
