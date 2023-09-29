import { ComponentProps, useCallback, ChangeEvent, useReducer } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { enqueueSnackbar } from "notistack";
import { v4 as uuidv4 } from "uuid";
import * as yup from "yup";

import { Editor } from "./Editor";
import { FileInput } from "./FileInput";
import { ThemeAutocomplete } from "./ThemeAutocomplete";
import { PrimaryButton } from "../../../../common/components";
import { withController, withButtonLoader } from "../../../../common/hocs";
import { yupErrorMessages, snackBarMessages, formValidation } from "../../../../common/utils";
import { useImageUploadMutation } from "../api";
import { ArticleContent } from "../..";
import { reducer } from "./Reducer";
import * as Styled from "./styled";

import type { IGetThemeResponseData } from "../../../Main/api";
import type { IArticleResponseData } from "../../api";

export interface ICreateArticleForm {
	attachment: FileList | null;
	title: string;
	tags: string;
	ThemeId: string;
}

export interface ICreateArticleFormSubmit extends Omit<ICreateArticleForm, "attachment"> {
	htmlContent: string;
	attachment: string;
}

export interface IStyledInputProps extends ComponentProps<typeof Styled.TextField> {}

export interface ICreateArticleFormProps extends Pick<IArticleResponseData, "title" | "theme" | "coverImageUrl" | "htmlContent" | "tags"> {}

const { tags: tagsRegExp } = formValidation;
const { requiredError, attachmentSize, tagsLimit, traillingSpace, tagsFormatt } = yupErrorMessages;

const MAX_ATTACHMENT_SIZE = 5;
const TAGS_LIMIT = 5;

export const schema = yup.object().shape({
	attachment: yup
		.mixed<FileList>()
		.required(requiredError("cover image"))
		.test("size", attachmentSize(MAX_ATTACHMENT_SIZE), (file) => {
			const maxSize = MAX_ATTACHMENT_SIZE * 1024 * 1024;
			return file[0]?.size < maxSize || !file.length;
		}),
	title: yup.string().required(requiredError()).trim(traillingSpace()),
	tags: yup
		.string()
		.required(requiredError())
		.trim(traillingSpace())
		.matches(tagsRegExp, tagsFormatt())
		.test("tagsLimit", tagsLimit(TAGS_LIMIT), (value) => {
			const spacesAmount = value.split("").reduce((acc, symbol) => (symbol === " " ? acc + 1 : acc), 0);
			return spacesAmount < TAGS_LIMIT;
		}),
	ThemeId: yup.string().required(requiredError()).notOneOf(["placeholder"], requiredError())
});

export const CreateArticleForm = ({
	onSubmit: onSubmitFromProps,
	isLoading,
	...editingState
}: Partial<ICreateArticleFormProps> & ILoadingForm<ICreateArticleFormSubmit>) => {
	const [imageUploadReq] = useImageUploadMutation();

	const [previewState, dispatch] = useReducer(reducer, {
		htmlContent: "",
		tags: [],
		title: "",
		theme: { id: "", name: "" },
		coverImageUrl: "",
		...editingState,
		isPreview: false
	});
	const { isPreview, htmlContent, theme, coverImageUrl } = previewState;

	const { handleSubmit, control, setValue, getValues } = useForm<ICreateArticleForm>({
		defaultValues: {
			title: editingState.title || "",
			tags: editingState.tags?.map(({ name }) => name).join(" ") || "",
			ThemeId: editingState.theme?.id || "placeholder"
		},
		resolver: yupResolver<ICreateArticleForm>(schema),
		mode: "onBlur"
	});

	const Title = withController<ICreateArticleForm, IStyledInputProps>(Styled.TextField);
	const Tags = withController<ICreateArticleForm, IStyledInputProps>(Styled.TextField);
	const SubmitButton = withButtonLoader(PrimaryButton);

	const onThemeChange = useCallback(
		(themeUpdate: IGetThemeResponseData) => {
			setValue("ThemeId", themeUpdate.id || "placeholder");
			dispatch({ theme: themeUpdate });
		},
		[setValue]
	);

	const onFileUpload = useCallback(
		async ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			const fileList = ("files" in target && target.files) || null;
			if (fileList) {
				setValue("attachment", fileList);
				try {
					const { fileUrl } = await imageUploadReq(fileList[0]).unwrap();
					dispatch({ coverImageUrl: fileUrl });
				} catch {
					// handled by middleware
				}
			}
		},
		[imageUploadReq, setValue, dispatch]
	);

	const togglePreview = useCallback(() => {
		const [tags, title] = getValues(["tags", "title"]);
		const formattedTags = tags && tags.split(" ").map((tag) => ({ name: tag, id: uuidv4() }));
		const isPreviwable = formattedTags.length && title && theme.id && coverImageUrl && htmlContent;

		if (isPreviwable && formattedTags) {
			dispatch({
				tags: formattedTags,
				title,
				isPreview: true
			});
		} else {
			enqueueSnackbar(snackBarMessages.articlePreview, { variant: "info" });
		}
	}, [dispatch, getValues, theme, coverImageUrl, htmlContent]);
	const toggleEdit = useCallback(() => dispatch({ isPreview: false }), [dispatch]);

	const setHtmlContent = useCallback((updatedHtmlContent: string) => dispatch({ htmlContent: updatedHtmlContent }), [dispatch]);

	const onSubmit = useCallback(
		(formData: ICreateArticleForm) => {
			onSubmitFromProps({ ...formData, attachment: coverImageUrl || "", htmlContent: htmlContent || "" });
		},
		[onSubmitFromProps, coverImageUrl, htmlContent]
	);

	const togglePreviewButton = isPreview ? (
		<PrimaryButton
			variant="ghost"
			onClick={toggleEdit}
		>
			Edit Article
		</PrimaryButton>
	) : (
		<PrimaryButton
			variant="ghost"
			onClick={togglePreview}
		>
			Preview Article
		</PrimaryButton>
	);

	return (
		<div>
			<Styled.FormWrapper>
				{isPreview && <ArticleContent {...previewState} />}
				<Styled.Form
					sx={isPreview ? { position: "absolute", visibility: "hidden" } : {}}
					onSubmit={handleSubmit(onSubmit)}
					id="create-article-form"
				>
					<Styled.FieldsWrapper>
						<Styled.TextFieldsWrapper>
							<FileInput
								control={control}
								onChange={onFileUpload}
							/>
							<Title
								type="text"
								name="title"
								placeholder="Enter the title..."
								fontStyles="title"
								variant="standard"
								control={control}
							/>
							<Tags
								name="tags"
								type="text"
								variant="standard"
								placeholder="Add up to 5 tags to your title"
								control={control}
							/>
							<ThemeAutocomplete
								control={control}
								onChange={onThemeChange}
								value={theme.name || "placeholder"}
							/>
						</Styled.TextFieldsWrapper>
					</Styled.FieldsWrapper>
					<Editor
						initState={htmlContent}
						onChange={setHtmlContent}
					/>
				</Styled.Form>
			</Styled.FormWrapper>
			<Styled.ButtonsWrapper>
				<SubmitButton
					type="submit"
					variant="customOutlined"
					form="create-article-form"
					disabled={isLoading}
				>
					Submit
				</SubmitButton>
				{togglePreviewButton}
			</Styled.ButtonsWrapper>
		</div>
	);
};
