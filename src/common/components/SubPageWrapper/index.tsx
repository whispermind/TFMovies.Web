import { styled, Box } from "@mui/material";

export const SubPageWrapper = styled(Box)(({ theme }) => {
	const {
		palette: {
			mainColors: { white },
			greyColors: { strokeGrey }
		}
	} = theme;

	return {
		backgroundColor: white,
		padding: "52px 140px",
		border: `2px solid ${strokeGrey}`
	};
});
