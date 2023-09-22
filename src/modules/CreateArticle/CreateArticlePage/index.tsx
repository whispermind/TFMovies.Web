import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { enqueueSnackbar } from "notistack";

import { CreateArticleForm, CreationAdvice, ICreateArticleFormWithEditor } from "..";
import { useImageUpload, useCreateArticle } from "../../../common/hooks";
import { snackBarMessages } from "../../../common/utils";
import * as Styled from "./styled";

export const CreateArticlePage = () => {
	const [imageUploadReq, { isLoading: isImageLoading }] = useImageUpload();
	const [createArticleReq, { isLoading: isArticleLoading }] = useCreateArticle();
	const navigate = useNavigate();

	const onSubmit = useCallback(
		async ({ attachment, tags, ThemeId, title, HtmlContent }: ICreateArticleFormWithEditor) => {
			if (attachment) {
				try {
					const { fileUrl } = await imageUploadReq(attachment[0]).unwrap();
					const articleData = { coverImageUrl: fileUrl, tags: tags.split(" "), ThemeId, title, HtmlContent };
					await createArticleReq(articleData).unwrap();
					navigate("/createarticle/success");
					enqueueSnackbar(snackBarMessages.articleCreated, { variant: "success" });
				} catch (e) {
					// handled by middleware
				}
			}
		},
		[imageUploadReq, createArticleReq, navigate]
	);

	return (
		<Styled.PageWrapper>
			<CreateArticleForm
				onSubmit={onSubmit}
				isLoading={isArticleLoading || isImageLoading}
			/>
			<CreationAdvice />
		</Styled.PageWrapper>
	);
};
