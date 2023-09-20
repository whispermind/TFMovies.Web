import { Box, Typography } from "@mui/material"
import { useEffect, useState } from "react";

import { CommentsForm } from "./CommentsForm";
import { CommentsList, ICommentData } from "./CommentsList";
import { useGetComments } from "../../hooks";
import { CommentsWrapper } from "./styled";

export const Comments = () => {
	const { data } = useGetComments();
	const [commentsData, setCommentsData] = useState<ICommentData[]>([]);

	useEffect(() => {
    if (data) {
      setCommentsData(data);
    }
  }, [data]);

  const handleAddComment = (newComment: ICommentData) => {
    setCommentsData((prevComments) => [ newComment, ...prevComments]);
  };

	return (
		<CommentsWrapper>
			<Typography variant="Section">Comments: {commentsData?.length || 0}</Typography>
			<CommentsForm onAddComment={handleAddComment}/>
			<CommentsList comments={commentsData} />
		</CommentsWrapper>
	)
}