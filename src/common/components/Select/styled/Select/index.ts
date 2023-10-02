import { Select as MuiSelect, styled } from "@mui/material";

export interface IStyledSelectProps {
	bordered?: boolean;
	width?: number;
}

export const Select = styled(MuiSelect, { shouldForwardProp: (prop) => prop !== "bordered" && prop !== "width" })<IStyledSelectProps>(({
	theme,
	bordered,
	width
}) => {
	const {
		palette: {
			mainColors: { main },
			accentColors: { lightOrange },
			greyColors: { strokeGrey }
		}
	} = theme;

	return {
		height: "44px",
		width: width ? `${width}px` : "auto",
		border: `2px solid ${bordered ? strokeGrey : "transparent"}`,

		".MuiSelect-select": {
			padding: "10px 12px"
		},

		"&:hover": {
			backgroundColor: lightOrange,
			borderColor: lightOrange,
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
			border: `2px solid ${main} !important`
		}
	};
});
