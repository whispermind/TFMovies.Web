import { Link, styled } from "@mui/material";

export const MainLink = styled(Link)(({ theme }) => {
	const { palette: { mainColors: { main, white } } } = theme;

	return {
		color: white,
		cursor: 'pointer',
		transition: '.3s',
		textDecoration: 'none',
		':hover': {
			color: main,
			transition: '.3s',
		},
	}
});

export const FooterBlock = styled('footer')(({ theme }) => {
	const { palette: { mainColors: { graphite, white } } } = theme;

	return {
		backgroundColor: graphite,
		color: white,
	}
});

export const FooterDescription = styled('div')({
	width: '100%',
	display: 'flex',
	justifyContent: 'space-between',
	padding: '1rem 1.75rem'
});

export const FooterDescriptionLink = styled(Link)(({ theme }) => {
	const { palette: { greyColors: { softGrey } } } = theme;

	return {
		color: softGrey,
		textDecoration: 'none'
	}
});
