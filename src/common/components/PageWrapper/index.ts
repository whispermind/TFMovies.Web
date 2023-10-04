import { Stack, styled } from "@mui/material";

export const PageWrapper = styled(Stack)(() => ({
	width: "100%",
	flexGrow: "1",
	flexDirection: "row",
	justifyContent: "space-between",
	alignItems: "normal",
	flexWrap: "nowrap",
	gap: "40px"
}));
