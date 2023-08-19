import { mainTheme } from "../../../app/styles/theme";

export const closeButton = {
	display: 'flex',
	alignItems: 'center',
	border: `solid 2px ${mainTheme.palette.mainColors.white}`,
	":hover": {
		border: `solid 2px ${mainTheme.palette.mainColors.main}`,
		transition: 'ease'
	},
	":hover span": {
		color: mainTheme.palette.mainColors.main,
		transition: 'ease .2s'
	},
	":hover svg": {
		fill: mainTheme.palette.mainColors.main,
		transition: 'ease .2s'
	}
}