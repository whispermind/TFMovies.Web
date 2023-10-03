import { TableCell as MuiTableCell, styled } from "@mui/material";

export const TableCell = styled(MuiTableCell)(() => ({
	width: "30%",
	height: "56px",
	display: "inline-flex",
	alignItems: "center",

	"&:last-child": {
		width: "10%"
	}
}));
