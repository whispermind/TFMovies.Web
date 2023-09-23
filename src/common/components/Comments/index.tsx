import { Box, Typography } from "@mui/material"
import { useEffect, useState } from "react";

import { CommentsForm } from "./CommentsForm";
import { CommentsList } from "./CommentsList";
import { CommentsWrapper } from "./styled";

export interface ICommentData {
  content: string;
  createdAt: string;
  author: string;
}

interface Props {
  data: ICommentData[];
}

export const Comments: React.FC<Props> = ({data}) => {
	return (
		<CommentsWrapper>
			<Typography variant="Section">Comments: {data?.length || 0}</Typography>
			<CommentsForm />
			<CommentsList comments={data} />
		</CommentsWrapper>
	)
}