import { Box, styled } from "@mui/material";

export const CustomBox = styled(Box)(({ theme }) => {
	const { palette: { mainColors: { white }, greyColors: { strokeGrey } } } = theme;
	return {
		borderRadius: '8px',
		width: '380px',
		padding: '32px 24px',
		border: `2px solid ${strokeGrey}`,
		background: white,
	}
})
