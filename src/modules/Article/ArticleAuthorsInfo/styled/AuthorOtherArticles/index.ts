import { styled, Stack } from "@mui/material";

export const AuthorOtherArticles = styled(Stack)(
	({
		theme: {
			palette: {
				greyColors: { strokeGrey }
			}
		}
	}) => ({
		width: "100%",
		maxWidth: "380px",
		border: `2px solid ${strokeGrey}`,
		borderRadius: "8px",
		alignItems: "start"
	})
);
