import { Stack, styled } from "@mui/material";

export const FilteringSubjectContainer = styled(Stack)(({ theme }) => {
	const {
		palette: {
			mainColors: { white },
			greyColors: { strokeGrey }
		}
	} = theme;
	return {
		borderRadius: "8px",
		width: "20vw",
		padding: "32px 24px",
		border: `2px solid ${strokeGrey}`,
		background: white,
		rowGap: "28px"
	};
});
