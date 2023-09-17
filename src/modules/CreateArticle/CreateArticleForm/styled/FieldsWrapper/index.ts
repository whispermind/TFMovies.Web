import { Stack, styled } from "@mui/material";

export const FieldsWrapper = styled(Stack)(
	({
		theme: {
			palette: {
				greyColors: { strokeGrey }
			}
		}
	}) => ({
		padding: "32px",
		minHeight: "350px",
		rowGap: "24px",
		borderRadius: "8px",
		border: `2px solid ${strokeGrey}`
	})
);
