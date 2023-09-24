import { CircularProgress, styled } from "@mui/material";

export const PageSpinner = styled(CircularProgress)(
	({
		theme: {
			palette: {
				mainColors: { main }
			}
		}
	}) => ({
		margin: "auto 0",
		alignSelf: "center",
		color: main
	})
);
