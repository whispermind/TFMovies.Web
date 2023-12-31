import { styled } from "@mui/material";
import { AppLink } from "../../AppLink";

export const MainLink = styled(AppLink)(({ theme }) => {
	const {
		palette: {
			mainColors: { main, graphite },
			accentColors: { lightOrange }
		}
	} = theme;

	return {
		borderRadius: "5px",
		transition: ".3s",
		display: "flex",
		alignItems: "center",
		color: graphite,
		textDecoration: "none",
		cursor: "pointer",
		width: "100%",
		marginBottom: "12px",
		":hover": {
			backgroundColor: lightOrange
		},
		":hover path": {
			fill: main,
			transition: ".3s"
		},
		":hover span": {
			color: main,
			transition: ".3s"
		}
	};
});
