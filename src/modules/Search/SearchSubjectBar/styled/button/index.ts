import { styled, Button as MuiButton } from "@mui/material";

interface IActiveButton {
	isActive?: boolean;
}

export const Button = styled(MuiButton, { shouldForwardProp: (prop) => prop !== "isActive" })<IActiveButton>(({ theme, isActive }) => {
	const {
		palette: {
			mainColors: { main, black },
			accentColors: { lightOrange }
		}
	} = theme;

	return {
		width: "240px",
		minHeight: "44px",
		padding: "10px 16px",
		justifyContent: "flex-start",
		textAlign: "start",
		textTransform: "uppercase",
		color: isActive ? main : black,
		backgroundColor: isActive ? lightOrange : ""
	};
});
