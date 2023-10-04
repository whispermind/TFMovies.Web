import { useCallback } from "react";
import { Stack, Typography } from "@mui/material";
import { enqueueSnackbar } from "notistack";

import { UserAvatar } from "../../../../common/components";
import { DeleteButton } from "./DeleteButton";
import { useDeleteCommentMutation } from "../../../../app/api/Comments";
import { useAppSelector } from "../../../../app/store";
import { selectAuth } from "../../../Authorization";
import { snackBarMessages } from "../../../../common/utils";
import { UserRoles } from "../../../../common/enums";
import * as Styled from "./styled";

import type { ICommentData } from "..";

export const Comment = ({ content, author, createdAt, id, authorId }: ICommentData) => {
	const [deleteCommentReq] = useDeleteCommentMutation();

	const { currentUser } = useAppSelector(selectAuth);

	const onDelete = useCallback(async () => {
		try {
			await deleteCommentReq(id);
			enqueueSnackbar(snackBarMessages.commentDelete, { variant: "success" });
		} catch {
			// handled by middleware
		}
	}, [deleteCommentReq, id]);

	const isDeleteble = currentUser?.id === authorId || currentUser?.role.name === UserRoles.admin;

	return (
		<Styled.CommentItem>
			<Stack columnGap="12px">
				<Styled.CommentAuthorWrappper>
					<UserAvatar
						nickname={author}
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
					sx={{ wordBreak: "break-all" }}
				>
					{content}
				</Typography>
			</Stack>
			{isDeleteble && <DeleteButton onClick={onDelete} />}
		</Styled.CommentItem>
	);
};
