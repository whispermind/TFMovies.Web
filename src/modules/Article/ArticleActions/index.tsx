import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { enqueueSnackbar } from "notistack";

import { LikeButton, ConfirmationModal } from "../../../common/components";
import { IconSizes, UserRoles, Routes } from "../../../common/enums";
import { ActionButton } from "./ActionButton";
import { CommentsButton } from "./CommentsButton";
import { useAppSelector } from "../../../app/store";
import { selectAuth } from "../../Authorization";
import { useDeleteArticleMutation } from "../../../app/api/Articles";
import * as Styled from "./styled";

import type { IGetArticleResponseData } from "../../../app/api/Articles";
import { snackBarMessages } from "../../../common/utils";

export const ArticleActions = (props: Partial<IGetArticleResponseData>) => {
	const { likesCount, commentsCount, isLiked, id, authorId } = props;
	const [isModalOpen, setModalOpen] = useState(false);
	const [deleteArticleReq] = useDeleteArticleMutation();

	const navigate = useNavigate();
	const { currentUser } = useAppSelector(selectAuth);

	const onEdit = useCallback(() => {
		navigate(`${Routes.editArticle}/${id}`, { state: props });
	}, [navigate, props, id]);

	const onDelete = useCallback(
		async (confirmed: boolean) => {
			if (!confirmed) return;
			try {
				navigate("/");
				await deleteArticleReq(id || "");
				enqueueSnackbar(snackBarMessages.articleDelete, { variant: "success" });
			} catch {
				// handled by middleware
			}
		},
		[deleteArticleReq, id, navigate]
	);

	const openModal = useCallback(() => setModalOpen(true), [setModalOpen]);
	const closeModal = useCallback(() => setModalOpen(false), [setModalOpen]);

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
			{isEditable && (
				<>
					<ActionButton onClick={onEdit}>
						<EditIcon fontSize={IconSizes.large} />
					</ActionButton>
					<ActionButton onClick={openModal}>
						<DeleteOutlineIcon fontSize={IconSizes.large} />
					</ActionButton>
				</>
			)}
			<ConfirmationModal
				title="Are you sure you want to delete this article?"
				isOpen={isModalOpen}
				handleClose={closeModal}
				onConfrim={onDelete}
			/>
		</Styled.Stack>
	);
};
