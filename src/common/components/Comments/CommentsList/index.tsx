import { Comment } from "../Comment";
import { StyledCommentsList } from "./styled";

export interface ICommentData {
	id: string;
	body: string;
	author: string;
	postId: number;
}

export const CommentsList = ({ comments }: { comments: ICommentData[] | undefined }) => {

	const commentsList = comments?.map(( comment ) => {
		return (
			<Comment nickname={comment.author} key={comment.id} commentText={comment.body}/>
		)
	})

	return (
		<StyledCommentsList>
			{commentsList}
		</StyledCommentsList>
	)
}