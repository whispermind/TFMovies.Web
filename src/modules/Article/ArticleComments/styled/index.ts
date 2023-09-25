import { Box, styled } from "@mui/material";

export const CommentsWrapper = styled(Box)(({ theme }) => {
	const {
		palette: {
			mainColors: { white },
			greyColors: { strokeGrey }
		}
	} = theme;
	return {
		maxWidth: "1080px",
		width: "100%",
		padding: "50px 25px",
		borderRadius: "0px 0px 8px 8px",
		border: `2px solid ${strokeGrey}`,
		backgroundColor: white
	};
});
