import { useEffect, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { enqueueSnackbar } from "notistack";

import { useUpdateArticleMutation, IGetArticleResponseData } from "../../../../app/api/Articles";
import { PageWrapper } from "../../CreateArticle/CreateArticlePage/styled";
import { CreateArticleForm, CreationAdvice, ICreateArticleFormSubmit } from "../../CreateArticle";
import { snackBarMessages, isArticle } from "../../../../common/utils";
import { Routes } from "../../../../common/enums";

export const EditArticlePage = () => {
	const [updateArticleReq, { isLoading }] = useUpdateArticleMutation();
	const { state } = useLocation();
	const navigate = useNavigate();

	const { id } = state as IGetArticleResponseData;

	useEffect(() => {
		if (!isArticle(state)) {
			navigate("/");
		}
	}, [state, navigate]);

	const onUpdate = useCallback(
		async (updatedData: ICreateArticleFormSubmit) => {
			const { attachment, tags, ThemeId, title, htmlContent } = updatedData;
			try {
				const articleData = { coverImageUrl: attachment, tags: tags.split(" "), ThemeId, title, htmlContent };
				await updateArticleReq({ id, articleData }).unwrap();
				navigate(`${Routes.article}/${id}`);
				enqueueSnackbar(snackBarMessages.articleUpdated, { variant: "success" });
			} catch (e) {
				// handled by middleware
			}
		},
		[navigate, updateArticleReq, id]
	);

	useEffect(() => {
		if (!isArticle(state)) {
			navigate("/");
		}
	}, [state, navigate]);

	return (
		<PageWrapper>
			<CreateArticleForm
				{...state}
				onSubmit={onUpdate}
				isLoading={isLoading}
			/>
			<CreationAdvice />
		</PageWrapper>
	);
};
