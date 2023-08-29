import { Stack, Avatar, Typography } from "@mui/material";

export const CommentAuthor = () => {
	return (
		<Stack direction='row' alignItems='center' mb='25px' gap='16px'>
			<Avatar sx={{ width: '44px', height: '44px' }}>H</Avatar>
			<Stack direction='column'>
				<Typography variant="HBodyBold">Harold Painless</Typography>
				<Typography variant="HBody" color='greyColors.grey'>October 17, 2023</Typography>
			</Stack>
		</Stack>
	);
}
