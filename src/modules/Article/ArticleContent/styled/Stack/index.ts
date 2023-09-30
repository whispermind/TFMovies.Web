import { Stack as MuiStack, styled } from "@mui/material";

export const Stack = styled(MuiStack)(
	({
		theme: {
			palette: {
				greyColors: { strokeGrey }
			}
		}
	}) => ({
		alignItems: "start",
		padding: "32px 24px",
		rowGap: "40px",
		border: `2px solid ${strokeGrey}`,
		borderTop: 0
	})
);
