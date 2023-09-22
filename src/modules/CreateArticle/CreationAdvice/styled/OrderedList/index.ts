import { styled, List } from "@mui/material";

export const OrderList = styled(List)(() => ({
	maxWidth: "520px",
	display: "flex",
	flexDirection: "column",
	rowGap: "20px",
	margin: 0,
	paddingLeft: "20px",
	listStyle: "decimal"
}));
