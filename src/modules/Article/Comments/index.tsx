import { Typography } from "@mui/material";

import { CommentsForm } from "./CommentsForm";
import { CommentsList } from "./CommentsList";
import { CommentsWrapper } from "./styled";

export interface ICommentData {
	content: string;
	createdAt: string;
	author: string;
}

interface ICommentProps {
	data: ICommentData[];
}

export const Comments = ({ data }: ICommentProps) => {
	return (
		<CommentsWrapper>
			<Typography variant="Section">Comments: {data?.length || 0}</Typography>
			<CommentsForm />
			<CommentsList comments={data} />
		</CommentsWrapper>
	);
};
