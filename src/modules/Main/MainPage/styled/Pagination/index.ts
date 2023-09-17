import { Pagination as MuiPagination, styled } from "@mui/material";

export const Pagination = styled(MuiPagination)(({ theme }) => {
	const {
		palette: {
			mainColors: { main, white }
		}
	} = theme;

	return {
		marginTop: "72px",
		display: "flex",
		justifyContent: "center",

		"& .Mui-selected": {
			border: `2px solid ${main}`,
			backgroundColor: `${white} !important`,
			color: main
		}
	};
});
