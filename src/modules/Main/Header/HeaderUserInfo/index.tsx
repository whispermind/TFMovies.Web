import { Typography, Stack } from "@mui/material";

interface IHeaderUserInfo {
	username: string;
	access: string;
}

export const HeaderUserInfo = ({ username, access }: IHeaderUserInfo) => {
	return (
		<Stack>
			<Typography
				variant="HBodyBold"
				color="mainColors.black"
			>
				{username}
			</Typography>
			<Typography
				lineHeight="1.5rem"
				fontSize="0.875rem"
				fontWeight="500"
				color="greyColors.grey"
			>
				{access}
			</Typography>
		</Stack>
	);
};
