import { styled, CircularProgress } from "@mui/material";

export const ButtonSpinner = styled(CircularProgress)(({
	size,
	theme: {
		palette: {
			mainColors: { main }
		}
	}
}) => {
	const shift = `${parseInt(`${size}`, 10) / 2}px`;

	return {
		color: main,
		position: "absolute",
		top: `calc(50% - ${shift})`,
		left: `calc(50% - ${shift})`
	};
});
