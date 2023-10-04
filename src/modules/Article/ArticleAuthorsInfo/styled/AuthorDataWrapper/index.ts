import { styled, Stack } from "@mui/material";

export const AuthorDataWrapper = styled(Stack)(
	({
		theme: {
			palette: {
				greyColors: { strokeGrey }
			}
		}
	}) => ({
		maxWidth: "380px",
		minHeight: "180px",
		flexGrow: 1,
		padding: "32px 24px",
		border: `2px solid ${strokeGrey}`,
		rowGap: "24px",
		alignSelf: "baseline",

		"& span": { textAlign: "start" }
	})
);
