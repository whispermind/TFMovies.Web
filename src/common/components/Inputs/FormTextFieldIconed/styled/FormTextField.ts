import { styled } from "@mui/material";

import { FormTextField as _FormTextField } from "../../FormTextField";

export const FormTextField = styled(_FormTextField)(({ theme }) => {
	const {
		palette: {
			mainColors: { black },
			greyColors: { grey }
		}
	} = theme;

	return {
		"& path": {
			fill: grey
		},

		"&:has(input:not(:placeholder-shown)) path": {
			fill: black
		},

		"&:has(.Mui-focused) path": {
			fill: black
		}
	};
});
