import { Stack, styled } from "@mui/material";

export const ContentWrapper = styled(Stack)(() => ({
	maxWidth: "1220px",
	columnGap: "40px",
	flexDirection: "row",
	flexWrap: "wrap",
	rowGap: "20px",
	flexGrow: 1
}));
