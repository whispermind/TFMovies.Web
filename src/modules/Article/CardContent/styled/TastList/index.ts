import { List, styled } from "@mui/material";

export const TagsList = styled(List)(() => ({
	display: "flex",
	columnGap: "12px",
	padding: 0,
	margin: "12px 0",

	"& li": {
		padding: 0,
		width: "auto"
	}
}));
