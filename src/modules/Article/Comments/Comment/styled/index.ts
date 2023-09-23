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

export const styledAvatar = {
	width: "44px",
	height: "44px",
	backgroundColor: `#${Math.floor(Math.random() * (100000 - 0) + 100000)}`
};

export const CommentAuthorWrappper = styled(Stack)({
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	gap: "16px",
	marginBottom: "12px"
});
