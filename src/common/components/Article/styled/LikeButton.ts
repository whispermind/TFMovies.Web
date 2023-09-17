import { Button, styled } from "@mui/material";

export const LikeButton = styled(Button)(({ theme }) => {
	const {
		palette: {
			mainColors: { main, white, black }
		}
	} = theme;
	return {
		textTransform: "none",
		gap: "12px",

		"& path": {
			fill: black
		},

		":hover": {
			backgroundColor: white,

			"& path": {
				fill: main
			},

			"& .MuiTypography-root": {
				color: main
			}
		}
	};
});
