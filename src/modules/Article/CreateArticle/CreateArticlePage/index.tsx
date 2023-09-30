import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { enqueueSnackbar } from "notistack";

import { CreateArticleForm, CreationAdvice, ICreateArticleFormSubmit } from "..";
import { useCreateArticleMutation } from "../api";
import { snackBarMessages } from "../../../../common/utils";
import { useUserAccess } from "../../../../common/hooks";
import { Routes, UserRoles } from "../../../../common/enums";
import * as Styled from "./styled";

export const CreateArticlePage = () => {
	const [createArticleReq, { isLoading: isArticleLoading }] = useCreateArticleMutation();
	const navigate = useNavigate();

	const onSubmit = useCallback(
		async ({ attachment, tags, ThemeId, title, htmlContent }: ICreateArticleFormSubmit) => {
			try {
				const articleData = { coverImageUrl: attachment, tags: tags.split(" "), ThemeId, title, htmlContent };
				await createArticleReq(articleData).unwrap();
				navigate(Routes.articlePublished);
				enqueueSnackbar(snackBarMessages.articleCreated, { variant: "success" });
			} catch (e) {
				// handled by middleware
			}
		},
		[createArticleReq, navigate]
	);

	useUserAccess(UserRoles.author, "/");

	return (
		<Styled.PageWrapper>
			<CreateArticleForm
				onSubmit={onSubmit}
				isLoading={isArticleLoading}
			/>
			<CreationAdvice />
		</Styled.PageWrapper>
	);
};
