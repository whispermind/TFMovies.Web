import { Stack, styled } from "@mui/material";

export const Wrapper = styled(Stack)(
	({
		theme: {
			palette: {
				mainColors: { white },
				greyColors: { strokeGrey }
			}
		}
	}) => ({
		padding: "32px 24px",
		border: `2px solid ${strokeGrey}`,
		alignItems: "flex-start",
		flexGrow: 1,
		rowGap: "36px",
		backgroundColor: white
	})
);
