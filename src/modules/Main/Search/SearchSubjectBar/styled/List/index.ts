import { List as MuiList, styled } from "@mui/material";

export const List = styled(MuiList)(() => ({
	padding: 0,
	display: "flex",
	flexDirection: "column",
	rowGap: "20px"
}));
