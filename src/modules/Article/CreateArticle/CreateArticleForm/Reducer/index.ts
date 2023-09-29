import type { ICreateArticleFormProps } from "..";

export interface ICreateArticlePreviewState extends ICreateArticleFormProps {
	isPreview: boolean;
}

export const reducer = (state: ICreateArticlePreviewState, update: Partial<ICreateArticlePreviewState>) => {
	return {
		...state,
		...update
	};
};
