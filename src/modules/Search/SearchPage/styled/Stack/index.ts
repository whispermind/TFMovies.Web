import { styled, Stack as MuiStack } from "@mui/material";

export const Stack = styled(MuiStack)(() => ({
	width: "100%",
	minHeight: "250px",
	columnGap: "40px",
	rowGap: "24px",
	flexDirection: "row",
	flexWrap: "wrap",
	alignContent: "baseline",
	alignItems: "center"
}));
