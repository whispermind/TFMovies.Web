import { Stack, styled } from "@mui/material";

export const Wrapper = styled(Stack)(
	({
		theme: {
			palette: {
				greyColors: { strokeGrey }
			}
		}
	}) => ({
		padding: "32px 24px",
		border: `2px solid ${strokeGrey}`,
		alignItems: "flex-start",
		rowGap: "36px"
	})
);
