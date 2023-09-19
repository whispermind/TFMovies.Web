import { useCallback } from "react";

import { CreateArticleForm, ICreateArticleFormWithEditor } from "..";
import { useImageUpload, useCreateArticle } from "../../../common/hooks";

export const CreateArticlePage = () => {
	const [imageUploadReq, { isLoading: isImageLoading }] = useImageUpload();
	const [createArticleReq, { isLoading: isArticleLoading }] = useCreateArticle();

	const onSubmit = useCallback(
		async ({ attachment, tags, theme, title, HtmlContent }: ICreateArticleFormWithEditor) => {
			if (attachment) {
				const { fileUrl } = await imageUploadReq(attachment[0]).unwrap();
				const articleData = { coverImageUrl: fileUrl, tags: tags.split(" "), theme, title, HtmlContent };
				await createArticleReq(articleData);
			}
		},
		[imageUploadReq, createArticleReq]
	);

	return (
		<CreateArticleForm
			onSubmit={onSubmit}
			isLoading={isArticleLoading || isImageLoading}
		/>
	);
};
