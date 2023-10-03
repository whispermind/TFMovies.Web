import { Select as MuiSelect, styled } from "@mui/material";

export interface IStyledSelectProps {
	bordered?: boolean;
	width?: string;
	maxWidth?: string;
	disablePadding?: boolean;
}

export const Select = styled(MuiSelect, {
	shouldForwardProp: (prop) => prop !== "bordered" && prop !== "width" && prop !== "disablePadding" && prop !== "maxWidth"
})<IStyledSelectProps>(({ theme, bordered, width, disablePadding, maxWidth }) => {
	const {
		palette: {
			mainColors: { main },
			accentColors: { lightOrange },
			greyColors: { strokeGrey }
		}
	} = theme;

	return {
		height: "44px",
		width: width ? `${width}` : "auto",
		maxWidth: maxWidth ? `${maxWidth}` : "auto",
		border: `2px solid ${bordered ? strokeGrey : "transparent"}`,

		".MuiSelect-select": {
			padding: disablePadding ? 0 : "10px 12px"
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
			border: bordered ? `2px solid ${main} !important` : ""
		}
	};
});
