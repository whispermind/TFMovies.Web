import { Stack as MuiStack, styled } from "@mui/material";

export const Stack = styled(MuiStack)(() => ({
	flexDirection: "row",
	justifyContent: "space-between"
}));
