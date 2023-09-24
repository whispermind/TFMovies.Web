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
		borderLeft: `2px solid ${strokeGrey}`,
		borderRight: `2px solid ${strokeGrey}`
	})
);
