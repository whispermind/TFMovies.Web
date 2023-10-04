import { Button as MuiButton, styled } from "@mui/material";

export const Button = styled(MuiButton)(
	({
		theme: {
			palette: {
				mainColors: { black, main }
			}
		}
	}) => ({
		path: {
			fill: black
		},
		":hover path": {
			fill: main
		}
	})
);
