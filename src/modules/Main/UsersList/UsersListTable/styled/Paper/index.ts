import { Paper as MuiPaper, styled } from "@mui/material";

export const Paper = styled(MuiPaper)(() => ({
	width: "100%",
	height: "100%",
	display: "flex",
	flexWrap: "wrap",
	justifyContent: "flex-end"
}));
