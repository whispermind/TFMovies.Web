import { styled, Stack } from "@mui/material";

export const CardWrapper = styled(Stack)(
	({
		theme: {
			palette: {
				greyColors: { strokeGrey }
			}
		}
	}) => ({
		width: "380px",
		minHeight: "120px",
		height: "max-content",
		padding: "24px",
		border: `solid 2px ${strokeGrey}`,
		borderRadius: "8px",
		position: "relative",
		alignItems: "flex-start",
		rowGap: "12px"
	})
);
