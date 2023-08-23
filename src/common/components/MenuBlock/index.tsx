import { Box } from "@mui/material"
import { NavigationMenu } from "./NavigationMenu/NavigationMenu"
import { OthersMenu } from "./OthersMenu/OthersMenu"

export const MenuBlock = () => {
	return (
		<Box>
			<NavigationMenu />
			<OthersMenu />
		</Box>
	)
}