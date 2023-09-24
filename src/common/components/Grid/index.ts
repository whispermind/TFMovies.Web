import { Grid as MuiGrid, styled } from "@mui/material";

export const PageGrid = styled(MuiGrid)(() => ({
	flexDirection: "row",
	justifyContent: "space-between",
	alignItems: "normal",
	flexWrap: "nowrap",
	gap: "40px"
}));
