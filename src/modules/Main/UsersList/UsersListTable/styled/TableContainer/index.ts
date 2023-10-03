import { TableContainer as MuiTableContainer, styled } from "@mui/material";

export const TableContainer = styled(MuiTableContainer)(
	({
		theme: {
			palette: {
				mainColors: { main }
			}
		}
	}) => ({
		maxWidth: "1360px",
		maxHeight: "665px",
		display: "flex",
		justifyContent: "center",

		"svg:hover": {
			cursor: "pointer",
			fill: main
		}
	})
);
