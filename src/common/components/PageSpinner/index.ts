import { CircularProgress, styled } from "@mui/material";

export const PageSpinner = styled(CircularProgress)(
	({
		theme: {
			palette: {
				mainColors: { main }
			}
		}
	}) => ({
		margin: "auto auto",
		alignSelf: "center",
		color: main
	})
);
