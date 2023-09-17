import { ListItem as MuiListItem, styled } from "@mui/material";

export const ListItem = styled(MuiListItem)(() => ({
	height: "100%",
	minWidth: "140px",
	padding: 0,
	flexBasis: "content",

	"&:last-child": {
		padding: 0,
		marginLeft: "auto"
	},

	"& button": {
		padding: 0
	}
}));
