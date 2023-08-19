import { ThemeProvider, CssBaseline } from "@mui/material"

import { mainTheme } from "./styles/theme"
import { AppPage } from "../pages/AppPage"

export const App = () => (
	<ThemeProvider theme={mainTheme}>
		<CssBaseline />
		<AppPage />
	</ThemeProvider>
)
