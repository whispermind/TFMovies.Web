import { List as MuiList, styled } from "@mui/material";

export const List = styled(MuiList)(() => ({
	display: "flex",
	borderRadius: "8px",
	flexDirection: "column",
	rowGap: "28px"
}));
