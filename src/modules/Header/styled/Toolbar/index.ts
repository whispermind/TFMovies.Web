import { Toolbar as _Toolbar, styled } from "@mui/material";

export const Toolbar = styled(_Toolbar)(() => ({
	"&.MuiToolbar-root": {
		padding: 0,
		minHeight: "100px",
		display: "flex",
		alignItems: "center"
	}
}));
