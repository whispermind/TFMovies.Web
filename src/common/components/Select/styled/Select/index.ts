import { Select as MuiSelect, styled } from "@mui/material";

export const Select = styled(MuiSelect)(({ theme }) => {
	const {
		palette: {
			mainColors: { main },
			accentColors: { lightOrange }
		}
	} = theme;

	return {
		width: "180px",
		padding: 0,

		"&:hover": {
			backgroundColor: lightOrange,
			color: main,

			"& path": {
				fill: main
			}
		},

		"& fieldset": {
			border: "none"
		},

		"&:has(.MuiSelect-iconOpen)": {
			"& fieldset": { border: `2px solid ${main} !important` }
		}
	};
});
