import { MuiRouterLink } from "../../../common/components";
import { palette } from "../palette";

const {
	mainColors: { main }
} = palette;

export const MuiLink = {
	defaultProps: {
		component: MuiRouterLink
	},
	styleOverrides: {
		root: {
			color: "inherit",
			textDecoration: "none",
			textDecorationColor: "inherit",
			cursor: "pointer",
			":hover": {
				color: main
			}
		}
	}
};
