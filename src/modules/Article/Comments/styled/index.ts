import { Box, styled } from "@mui/material";

export const CommentsWrapper = styled(Box)(({ theme }) => {
	const {
		palette: {
			greyColors: { strokeGrey }
		}
	} = theme;
	return {
		padding: "50px 25px",
		borderRadius: "0px 0px 8px 8px",
		border: `2px solid ${strokeGrey}`
	};
});
