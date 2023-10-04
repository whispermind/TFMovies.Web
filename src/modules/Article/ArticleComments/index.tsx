import { Typography } from "@mui/material";

import { CommentsForm } from "./CommentsForm";
import { CommentsList } from "./CommentsList";
import { CommentsWrapper } from "./styled";

export interface ICommentData {
	id: string;
	content: string;
	createdAt: string;
	author: string;
	authorId: string;
}

interface ICommentProps {
	data: ICommentData[];
}

export const ArticleComments = ({ data }: ICommentProps) => {
	return (
		<CommentsWrapper>
			<Typography variant="Section">Comments: {data?.length || 0}</Typography>
			<CommentsForm />
			<CommentsList comments={data} />
		</CommentsWrapper>
	);
};
