import { Provider } from "react-redux";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";

import { AppLayout } from "../modules/AppLayout";
import { mainTheme } from "./styles/theme";
import { store } from "./store";
import { AuthorsAndTagsBlock, MenuBlock, Post } from "../common/components";

export const App = () => {
	return (
		<Provider store={store}>
			<ThemeProvider theme={mainTheme}>
				<CssBaseline />
				<AppLayout>
					<Outlet />
					<MenuBlock />
					<Post />
					<AuthorsAndTagsBlock />
				</AppLayout>
			</ThemeProvider>
		</Provider>
	);
};
