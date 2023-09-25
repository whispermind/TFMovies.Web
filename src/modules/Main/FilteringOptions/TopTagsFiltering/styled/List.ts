import { List as MuiList, styled } from "@mui/material";

export const List = styled(MuiList)(() => ({
	display: "flex",
	flexDirection: "column",
	rowGap: "12px"
}));
