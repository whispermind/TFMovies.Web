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

		"& .MuiSelect-icon": {
			transition: "transform 0.3s ease-in-out"
		},

		"& .MuiSelect-iconOpen": {
			transform: "rotate(90deg)"
		},

		"& fieldset": {
			border: "none"
		},

		"&:has(.MuiSelect-iconOpen)": {
			"& fieldset": { border: `2px solid ${main} !important` }
		}
	};
});
