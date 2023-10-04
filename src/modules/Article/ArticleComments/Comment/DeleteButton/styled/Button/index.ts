import { Button as MuiButton, styled } from "@mui/material";

export const Button = styled(MuiButton)(
	({
		theme: {
			palette: {
				mainColors: { main, black }
			}
		}
	}) => ({
		position: "absolute",
		right: "-10px",
		top: "10px",

		"&:hover": {
			backgroundColor: "transparent",
			"& path": {
				fill: main
			}
		},
		"& path": {
			fill: black
		}
	})
);
