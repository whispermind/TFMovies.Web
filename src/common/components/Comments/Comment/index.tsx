import { Stack, Avatar, Typography } from "@mui/material"

import { CommentItem } from "./styled";

interface ICommentProp {
	nickname: string;
	commentText: string;
}

export const Comment = ({ nickname, commentText }: ICommentProp) => {
	return (
		<CommentItem>
			<Stack columnGap="12px">
				<Stack
					direction="row"
					alignItems="center"
					gap="16px"
					mb="12px"
				>
					<Avatar sx={{ width: "44px", height: "44px", backgroundColor: `#${Math.floor(Math.random() * (100000 - 0) + 100000)}` }}>{nickname[0]}</Avatar>
					<Stack>
						<Typography
							variant="HBodyBold"
							maxWidth="100px"
						>
							{nickname}
						</Typography>
						<Typography variant="HBody" color="greyColors.grey">123123121</Typography>
					</Stack>
				</Stack>
				<Typography variant="HBody" sx={{ml: "-16px"}}>{commentText}</Typography>
			</Stack>
		</CommentItem>
	)
}