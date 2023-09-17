import { Stack, Typography } from "@mui/material";

import { Avatar } from "../../../../common/components";

interface TopAuthorProps {
	nickname: string;
}

export const TopAuthor = ({ nickname }: TopAuthorProps) => {
	return (
		<Stack
			direction="row"
			alignItems="center"
			columnGap="16px"
		>
			<Avatar sx={{ width: "72px", height: "72px" }}>{nickname[0]}</Avatar>
			<Typography
				variant="Section"
				maxWidth="100px"
			>
				{nickname}
			</Typography>
		</Stack>
	);
};
