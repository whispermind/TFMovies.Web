import { styled } from "@mui/material";

export const Form = styled("form")(({ theme }) => {
	const {
		palette: {
			greyColors: { strokeGrey }
		}
	} = theme;

	return {
		border: `2px solid ${strokeGrey}`,
		borderRadius: "8px"
	};
});
