import { Button, styled } from "@mui/material";

export const FileInputWrapper = styled(Button)<{ component: "label" }>(({ theme }) => {
	const {
		palette: {
			mainColors: { main, black },
			accentColors: { lightOrange },
			greyColors: { strokeGrey }
		}
	} = theme;

	return {
		width: "350px",
		height: "44px",
		color: black,
		backgroundColor: "transparent",
		textTransform: "none",
		boxShadow: "none",
		border: `2px solid ${strokeGrey}`,

		"&:hover": {
			boxShadow: "none",
			border: "none",
			borderColor: strokeGrey,
			backgroundColor: lightOrange,
			color: main
		}
	};
});
