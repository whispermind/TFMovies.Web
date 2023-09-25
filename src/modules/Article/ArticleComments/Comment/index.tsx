import { Stack, Typography } from "@mui/material";

import { UserAvatar } from "../../../../common/components";
import * as Styled from "./styled";

interface ICommentProps {
	nickname: string;
	commentText: string;
	createdAt: string;
}

export const Comment = ({ nickname, commentText, createdAt }: ICommentProps) => {
	return (
		<Styled.CommentItem>
			<Stack columnGap="12px">
				<Styled.CommentAuthorWrappper>
					<UserAvatar
						nickname={nickname}
						nicknameStyle="HBodyBold"
						size={44}
					>
						<Typography
							variant="HBody"
							color="greyColors.grey"
						>
							{createdAt}
						</Typography>
					</UserAvatar>
				</Styled.CommentAuthorWrappper>
				<Typography
					variant="HBody"
					textAlign="start"
					mt="12px"
				>
					{commentText}
				</Typography>
			</Stack>
		</Styled.CommentItem>
	);
};
