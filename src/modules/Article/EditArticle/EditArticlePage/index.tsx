import { useEffect, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { enqueueSnackbar } from "notistack";

import { useUpdateArticleMutation } from "../api";
import { PageWrapper } from "../../CreateArticle/CreateArticlePage/styled";
import { CreateArticleForm, CreationAdvice, ICreateArticleFormSubmit } from "../../CreateArticle";
import { isArticle } from "../../../../common/utils/helpers/isArticle";
import { IArticleResponseData } from "../../api";
import { snackBarMessages } from "../../../../common/utils";
import { Routes } from "../../../../common/enums";

export const EditArticlePage = () => {
	const [updateArticleReq, { isLoading }] = useUpdateArticleMutation();
	const { state } = useLocation();
	const navigate = useNavigate();

	const { title, theme, tags, coverImageUrl, htmlContent, id } = state as IArticleResponseData;

	useEffect(() => {
		if (!isArticle(state)) {
			navigate("/");
		}
	}, [state, navigate]);

	const onUpdate = useCallback(
		async (updatedData: ICreateArticleFormSubmit) => {
			const { attachment, tags: updatedTags, ThemeId, title: updatedTitle, HtmlContent: updatedContent } = updatedData;
			try {
				const articleData = { coverImageUrl: attachment, tags: updatedTags.split(" "), ThemeId, title: updatedTitle, HtmlContent: updatedContent };
				await updateArticleReq({ id, articleData }).unwrap();
				navigate(`${Routes.article}/${id}`);
				enqueueSnackbar(snackBarMessages.articleUpdated, { variant: "success" });
			} catch (e) {
				// handled by middleware
			}
		},
		[navigate, updateArticleReq, id]
	);

	return (
		<PageWrapper>
			<CreateArticleForm
				title={title}
				theme={theme}
				tags={tags}
				coverImageUrl={coverImageUrl}
				htmlContent={htmlContent}
				onSubmit={onUpdate}
				isLoading={isLoading}
			/>
			<CreationAdvice />
		</PageWrapper>
	);
};
