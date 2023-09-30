import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { LikeButton } from "../../../common/components";
import { IconSizes, UserRoles, Routes } from "../../../common/enums";
import { EditButton } from "./EditButton";
import { CommentsButton } from "./CommentsButton";
import { useAppSelector } from "../../../app/store";
import { selectAuth } from "../../Authorization";
import * as Styled from "./styled";

import type { IArticleResponseData } from "../api";

export const ArticleActions = (props: Partial<IArticleResponseData>) => {
	const { likesCount, commentsCount, isLiked, id, authorId } = props;

	const navigate = useNavigate();
	const { currentUser } = useAppSelector(selectAuth);

	const onEdit = useCallback(() => {
		navigate(`${Routes.editArticle}/${id}`, { state: props });
	}, [navigate, props, id]);

	const isEditable = currentUser?.id === authorId || currentUser?.role.name === UserRoles.admin;

	return (
		<Styled.Stack>
			<LikeButton
				id={id || ""}
				likesAmount={likesCount}
				isLiked={!!isLiked}
				size={IconSizes.large}
			/>
			<CommentsButton
				commentsAmount={commentsCount}
				size={IconSizes.large}
			/>
			{isEditable && <EditButton onClick={onEdit} />}
		</Styled.Stack>
	);
};
