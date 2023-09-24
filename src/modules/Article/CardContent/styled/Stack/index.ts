import { Stack as MuiStack, styled } from "@mui/material";

export const Stack = styled(MuiStack)(() => ({
	alignItems: "start",
	padding: "32px 24px",
	rowGap: "40px"
}));
