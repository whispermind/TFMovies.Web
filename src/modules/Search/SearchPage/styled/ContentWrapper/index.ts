import { Stack, styled } from "@mui/material";

export const ContentWrapper = styled(Stack)(() => ({
	columnGap: "40px",
	flexDirection: "row",
	rowGap: "20px",
	justifyContent: "space-between",
	flexGrow: 1
}));
