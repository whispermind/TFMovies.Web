import { Stack, Avatar, Typography } from "@mui/material";

export const TopArticleAuthor = () => {
	return (
		<Stack direction='row' alignItems='center' gap='16px'>
			<Avatar sx={{ width: '72px', height: '72px' }}>H</Avatar>
			<Stack direction='column' alignItems='start'>
				<Typography variant="Sector">Harold</Typography>
				<Typography variant="Sector" >Painless</Typography>
			</Stack>
		</Stack>
	);
}
