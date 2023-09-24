import { Button as MuiButton, styled } from "@mui/material";

export const Button = styled(MuiButton)<{ amount?: number }>(({ amount = "", theme }) => {
	const {
		palette: {
			mainColors: { main, black }
		}
	} = theme;

	return {
		padding: 0,
		columnGap: "12px",

		"& path": {
			fill: black
		},

		":hover path": {
			fill: main
		},

		"&:hover:after": {
			color: main
		},

		":after": {
			content: `"${amount}"`,
			width: "100%",
			position: "absolute",
			bottom: "-25px",
			fontSize: "16px",
			lineHeight: "24px",
			fontWeight: "bold",
			color: black
		}
	};
});
