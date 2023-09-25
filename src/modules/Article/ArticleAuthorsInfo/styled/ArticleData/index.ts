import { styled, Stack } from "@mui/material";

export const ArticleData = styled(Stack)(
	({
		theme: {
			palette: {
				greyColors: { strokeGrey }
			}
		}
	}) => ({
		width: "100%",
		padding: "16px 24px",
		rowGap: "8px",

		":not(:last-child)": {
			borderBottom: `2px solid ${strokeGrey}`
		}
	})
);
