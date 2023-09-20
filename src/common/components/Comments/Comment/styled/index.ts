import { ListItem, styled } from "@mui/material";
import { palette } from "../../../../../app/styles/palette";

export const CommentItem = styled(ListItem)(({ theme }) => {
	const { palette: { greyColors: { strokeGrey } } } = theme;

	return {
		borderRadius: "8px",
		border: `1px solid ${strokeGrey}`,
		padding: "16px"
	}
})