import { Button, Link, styled } from "@mui/material";

export const CustomButton = styled(Button)(({ theme }) => {
	const { palette: { mainColors: { main, white } } } = theme
	return {
		textTransform: 'none',
		gap: '12px',
		":hover": {
			backgroundColor: white
		},
		":hover path": {
			fill: main,
		},
	}
})
