import { Avatar as MuiAvatar, styled } from "@mui/material";

export const Avatar = styled(MuiAvatar)(
	({
		theme: {
			palette: {
				mainColors: { main, white }
			}
		}
	}) => ({
		backgroundColor: main,
		color: white
	})
);
