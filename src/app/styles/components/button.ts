import { ButtonProps, Interpolation, Theme } from "@mui/material";

import { Opacity } from "@mui/icons-material";
import { palette } from "../palette";
import { MuiRouterLink } from "../../../common/components";

const {
	mainColors: { graphite, main, white, black },
	accentColors: { lightOrange },
	greyColors: { strokeGrey }
} = palette;

export const MuiButton: StylesOverrides<ButtonProps["variant"], Interpolation<{ theme: Theme }>> = {
	variants: [
		{
			props: { variant: "customOutlined" },
			style: {
				height: "44px",
				border: `2px solid ${main}`,
				color: main,
				textTransform: "none",
				backgroundColor: "transparent",

				":hover": {
					color: white,
					backgroundColor: main
				},

				":disabled": {
					opacity: "0.3"
				}
			}
		},
		{
			props: { variant: "ghost" },
			style: {
				height: "44px",
				color: graphite,
				textTransform: "capitalize",
				backgroundColor: "transparent",

				":hover": {
					color: main,
					backgroundColor: lightOrange
				}
			}
		},
		{
			props: { variant: "second" },
			style: {
				height: "44px",
				border: `2px solid ${strokeGrey}`,
				color: graphite,
				textTransform: "capitalize",
				backgroundColor: "transparent",

				":hover": {
					borderColor: "transparent",
					color: main,
					backgroundColor: lightOrange
				}
			}
		},
		{
			props: { variant: "signup" },
			style: {
				height: "44px",
				padding: "0 0.75rem",
				columnGap: "1.375rem",
				fontSize: "0.9375rem",
				color: white,
				textTransform: "none",
				backgroundColor: graphite,

				":hover": {
					backgroundColor: black
				},

				":disabled": {
					color: white,
					opacity: "0.85"
				}
			}
		},
		{
			props: { variant: "close" },
			style: {
				height: "44px",
				padding: "10px",
				display: "flex",
				alignItems: "center",
				columnGap: "14px",
				textTransform: "none",
				border: `solid 2px ${white}`,

				":hover": {
					border: `solid 2px ${main}`,
					transition: "ease"
				},
				":hover span": {
					color: main,
					transition: "ease .2s"
				},
				":hover svg": {
					fill: main,
					transition: "ease .2s"
				}
			}
		}
	]
};

export const MuiButtonBase = {
	defaultProps: {
		LinkComponent: MuiRouterLink
	}
};
