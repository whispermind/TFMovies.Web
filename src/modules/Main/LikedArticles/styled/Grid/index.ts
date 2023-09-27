import { Grid as MuiGrid, styled } from "@mui/material";

export const Grid = styled(MuiGrid)(() => ({
	flexDirection: "row",
	justifyContent: "start",
	alignItems: "normal",
	flexWrap: "nowrap",
	gap: "40px"
}));
