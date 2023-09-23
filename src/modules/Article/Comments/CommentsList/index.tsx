import { Comment } from "../Comment";
import { StyledCommentsList } from "./styled";

import type { ICommentData } from "..";

export const CommentsList = ({ comments }: { comments: ICommentData[] | undefined }) => {
	const commentsList = comments?.map((comment) => {
		return (
			<Comment
				key={comment.author + comment.createdAt}
				nickname={comment.author}
				createdAt={comment.createdAt}
				commentText={comment.content}
			/>
		);
	});

	return <StyledCommentsList>{commentsList}</StyledCommentsList>;
};
