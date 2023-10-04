import { styled, Stack } from "@mui/material";

export const AuthorOtherArticles = styled(Stack)(
	({
		theme: {
			palette: {
				greyColors: { strokeGrey }
			}
		}
	}) => ({
		maxWidth: "380px",
		flexGrow: 1,
		border: `2px solid ${strokeGrey}`,
		borderRadius: "8px",
		alignItems: "start"
	})
);
