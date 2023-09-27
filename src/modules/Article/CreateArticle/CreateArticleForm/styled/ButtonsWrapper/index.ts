import { styled, Stack } from "@mui/material";

export const ButtonsWrapper = styled(Stack)(() => ({
	marginTop: "40px",
	flexDirection: "row",
	columnGap: "40px",

	"& button": {
		width: "240px"
	}
}));
