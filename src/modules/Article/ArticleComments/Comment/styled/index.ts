import { ListItem, Stack, styled } from "@mui/material";

export const CommentItem = styled(ListItem)(({ theme }) => {
	const {
		palette: {
			greyColors: { strokeGrey }
		}
	} = theme;

	return {
		borderRadius: "8px",
		border: `1px solid ${strokeGrey}`,
		padding: "16px"
	};
});

export const CommentAuthorWrappper = styled(Stack)({
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	gap: "16px",
	marginBottom: "12px"
});
