import { styled } from "@mui/material";

export const ArticleContentWrapper = styled("div")(({ theme }) => {
	const {
		palette: {
			mainColors: { main, white }
		}
	} = theme;

	return {
		maxWidth: "1080px",
		width: "100%",
		backgroundColor: white,
		wordBreak: "break-word",

		blockquote: {
			borderLeft: `4px solid ${main}`,
			margin: 0,
			paddingLeft: "20px",
			fontWeight: "bold"
		},

		p: {
			margin: 0,
			padding: 0,
			fontSize: "1.25rem",
			lineHeight: "2.125rem"
		},

		img: {
			display: "block",
			width: "100%",
			margin: "36px 0",
			maxHeight: "420px",
			objectPosition: "center center",
			objectFit: "cover"
		},

		"& > img": {
			margin: 0,
			borderTopLeftRadius: "8px",
			borderTopRightRadius: "8px"
		},

		h2: {
			marginTop: "36px",
			marginBottom: "16px",
			fontSize: "2rem",
			lineHeight: "3rem"
		},

		h3: {
			marginTop: "16px",
			marginBottom: "8px",
			color: main,
			fontSize: "1.5rem",
			lineHeight: "2.5rem"
		},

		"& > div > div:last-child ul": {
			display: "flex",
			flexDirection: "column",
			rowGap: "16px",
			listStyle: "none",
			padding: 0,

			"& li": {
				display: "flex",
				alignItems: "center"
			},

			"& li::before": {
				content: '""',
				display: "inline-block",
				alignItems: "center",
				marginRight: "12px",
				width: "14px",
				height: "14px",
				borderRadius: "50%",
				backgroundColor: main
			}
		}
	};
});
