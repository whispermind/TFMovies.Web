import { ICommentData } from "..";
import { Comment } from "../Comment";
import { StyledCommentsList } from "./styled";

export const CommentsList = ({ comments }: { comments: ICommentData[] | undefined }) => {

	const commentsList = comments?.map(( comment, i ) => {
		return (
			<Comment key={i} nickname={comment.author} createdAt={comment.createdAt} commentText={comment.content}/>
		)
	})

	return (
		<StyledCommentsList>
			{commentsList}
		</StyledCommentsList>
	)
}