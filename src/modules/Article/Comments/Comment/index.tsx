import { Stack, Avatar, Typography } from "@mui/material";

import { CommentAuthorWrappper, CommentItem, styledAvatar } from "./styled";

interface ICommentProp {
	nickname: string;
	commentText: string;
	createdAt: string;
}

export const Comment = ({ nickname, commentText, createdAt }: ICommentProp) => {
	return (
		<CommentItem>
			<Stack columnGap="12px">
				<CommentAuthorWrappper>
					<Avatar sx={styledAvatar}>{nickname[0]}</Avatar>
					<Stack>
						<Typography
							variant="HBodyBold"
							maxWidth="100px"
						>
							{nickname}
						</Typography>
						<Typography
							variant="HBody"
							color="greyColors.grey"
						>
							{createdAt}
						</Typography>
					</Stack>
				</CommentAuthorWrappper>
				<Typography
					variant="HBody"
					textAlign="start"
				>
					{commentText}
				</Typography>
			</Stack>
		</CommentItem>
	);
};
