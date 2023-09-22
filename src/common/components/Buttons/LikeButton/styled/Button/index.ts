import { Button as MuiButton, styled } from "@mui/material";

export const Button = styled(MuiButton)<{ likes?: number }>(({ likes = "", theme }) => {
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

		":after": {
			content: `"${likes}"`,
			width: "100%",
			position: "absolute",
			bottom: "-10px"
		}
	};
});
