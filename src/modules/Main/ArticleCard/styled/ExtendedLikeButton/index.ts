import { styled, Typography } from "@mui/material";

export const LikeButtonDescription = styled(Typography)(({ theme }) => {
	const {
		palette: {
			mainColors: { main }
		}
	} = theme;

	return {
		textTransform: "capitalize",

		":hover": {
			color: main,

			"& .MuiTypography-root": {
				color: main
			}
		}
	};
});
