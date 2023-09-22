import { styled } from "@mui/material";

export const EditorWrapper = styled("div")(({ theme }) => {
	const {
		palette: {
			greyColors: { strokeGrey }
		}
	} = theme;

	return {
		".quill .ql-toolbar": {
			border: `solid 2px ${strokeGrey}`,
			borderLeft: "none",
			borderRight: "none"
		},

		".ql-container": {
			display: "flex",
			flexDirection: "column",
			border: "none",
			minHeight: "445px"
		},

		".ql-editor": {
			flexGrow: "1"
		},

		".ql-editor, .ql-toolbar": {
			padding: "16px 32px"
		}
	};
});
