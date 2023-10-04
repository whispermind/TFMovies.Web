import { TableCell as MuiTableCell, styled } from "@mui/material";

export const TableCell = styled(MuiTableCell)(
	({
		theme: {
			palette: {
				mainColors: { black, main }
			}
		}
	}) => ({
		width: "30%",
		height: "56px",
		display: "inline-flex",
		alignItems: "center",

		"&:last-child": {
			width: "10%"
		},

		"& button:not(:disabled)": {
			"& path": { fill: black },

			"&:hover path": {
				fill: main
			}
		}
	})
);
