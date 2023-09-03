import { Stack, Typography } from "@mui/material";

import { Avatar } from "../../../common/components";

interface IHeaderAvatarProps {
	username: string;
	access: string;
}

export const HeaderAvatar = ({ username, access }: IHeaderAvatarProps) => {
	return (
		<Stack
			columnGap={1.5}
			direction="row"
		>
			<Avatar sx={{ width: "44px", height: "44px" }}>{username[0]}</Avatar>
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
		</Stack>
	);
};
