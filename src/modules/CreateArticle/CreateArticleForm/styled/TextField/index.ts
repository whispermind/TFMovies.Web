import { TextField as MuiTextField, styled, CSSObject } from "@mui/material";

export interface IStyledTextField {
	fontStyles?: "title";
}

export const TextField = styled(MuiTextField, { shouldForwardProp: (prop) => prop !== "fontStyles" })<IStyledTextField>(({ theme, fontStyles }) => {
	const {
		palette: {
			greyColors: { grey }
		}
	} = theme;

	const titleStyles: CSSObject = {
		"& input": {
			fontSize: "3.25rem",
			lineHeight: "4.875rem",
			fontWeight: "700"
		}
	};
	const standartStyles: CSSObject = {
		"& input": {
			fontSize: "0.9375rem",
			lineHeight: "1.5rem"
		}
	};
	const commonStyles: CSSObject = {
		color: grey,
		width: "100%",
		textDecoration: "none",

		"&.MuiTextField-root input": {
			padding: "0 !important"
		}
	};

	Object.assign(commonStyles, fontStyles === "title" ? titleStyles : standartStyles);

	return commonStyles;
});
