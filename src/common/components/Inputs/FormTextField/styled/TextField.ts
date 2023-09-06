import { TextField as _TextField, styled } from "@mui/material";

export const TextField = styled(_TextField)(({ theme }) => {
	const {
		shape: { borderRadius },
		typography: {
			Input: { fontSize, lineHeight }
		},
		palette: {
			greyColors: { strokeGrey, grey },
			mainColors: { black, white },
			additionalColors: { errorRed }
		}
	} = theme;

	return {
		".MuiInput-root": {
			height: "44px",
			padding: "0.625rem 1rem",
			border: `2px solid ${strokeGrey}`,
			borderRadius: `${borderRadius}px`,
			color: black,
			fontSize,
			lineHeight,
			cursor: "pointer",

			"&:hover": {
				borderColor: grey
			},

			"& + .Mui-error": {
				marginLeft: "12px"
			},

			"&:has(+ .Mui-error)": {
				borderColor: errorRed
			},

			"& input": {
				padding: 0,

				"::placeholder": {
					opacity: "1",
					color: grey
				},

				"&:not(:placeholder-shown)": {
					backgroundColor: `${white} !important`
				}
			},

			"&.Mui-focused": {
				borderColor: "#ffbfbf"
			},

			"&:has(input:active)": {
				borderColor: "#ffbfbf"
			}
		}
	};
});
