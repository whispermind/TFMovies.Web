import { styled, Stack } from "@mui/material";

export const AuthorDataWrapper = styled(Stack)(
	({
		theme: {
			palette: {
				greyColors: { strokeGrey }
			}
		}
	}) => ({
		minWidth: "300px",
		maxWidth: "380px",
		minHeight: "180px",
		padding: "32px 24px",
		border: `2px solid ${strokeGrey}`,
		rowGap: "24px",
		alignSelf: "baseline",

		"& span": { textAlign: "start" }
	})
);
