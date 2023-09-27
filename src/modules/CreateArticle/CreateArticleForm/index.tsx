import { ComponentProps, useCallback, ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { enqueueSnackbar } from "notistack";
import * as yup from "yup";

import { Editor } from "./Editor";
import { FileInput } from "./FileInput";
import { ThemeAutocomplete } from "./ThemeAutocomplete";
import { PrimaryButton } from "../../../common/components";
import { withController, withButtonLoader } from "../../../common/hocs";
import { yupErrorMessages, snackBarMessages, formValidation } from "../../../common/utils";
import { useImageUploadMutation } from "../api";
import { IGetThemeResponseData } from "../../Main/api";
import { ArticleContent } from "../../Article";
import * as Styled from "./styled";

import type { ITag } from "../../Main/ArticleCard";

export interface ICreateArticleForm {
	attachment: FileList | null;
	title: string;
	tags: string;
	ThemeId: string;
}

export interface ICreateArticleFormSubmit extends Omit<ICreateArticleForm, "attachment"> {
	HtmlContent: string;
	attachment: string;
}

export type TStyledInputProps = ComponentProps<typeof Styled.TextField>;

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

export const CreateArticleForm = ({ onSubmit: onSubmitFromProps }: ILoadingForm<ICreateArticleFormSubmit>) => {
	const [imageUploadReq] = useImageUploadMutation();
	const [isPreview, setPreview] = useState(false);
	const [previewTheme, setPreviewTheme] = useState("");
	const [previewTags, setPreviewTags] = useState<ITag[]>([]);
	const [previewTitle, setPreviewTitle] = useState("");
	const [coverImageUrl, setCoverImageUrl] = useState("");
	const [editorState, setEditorState] = useState("");

	const { handleSubmit, control, setValue, getValues } = useForm<ICreateArticleForm>({
		defaultValues: {
			title: "",
			tags: "",
			ThemeId: "placeholder"
		},
		resolver: yupResolver<ICreateArticleForm>(schema),
		mode: "onBlur"
	});

	const Title = withController<ICreateArticleForm, TStyledInputProps>(Styled.TextField);
	const Tags = withController<ICreateArticleForm, TStyledInputProps>(Styled.TextField);
	const SubmitButton = withButtonLoader(PrimaryButton);

	const onThemeChange = useCallback(
		(theme: IGetThemeResponseData) => {
			setValue("ThemeId", theme.id || "placeholder");
			setPreviewTheme(theme.name);
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
					setCoverImageUrl(fileUrl);
				} catch {
					// handled by middleware
				}
			}
		},
		[imageUploadReq, setCoverImageUrl, setValue]
	);

	const onSubmit = useCallback(
		(formData: ICreateArticleForm) => {
			onSubmitFromProps({ ...formData, attachment: coverImageUrl, HtmlContent: editorState });
		},
		[onSubmitFromProps, editorState, coverImageUrl]
	);

	const togglePreview = useCallback(() => {
		const [tags, title] = getValues(["tags", "title"]);
		const formattedTags = tags && tags.split(" ").map((tag) => ({ name: tag, id: Date.now().toString() }));
		const isPreviwable = formattedTags.length && title && previewTheme && coverImageUrl && editorState;

		if (isPreviwable && formattedTags) {
			setPreviewTitle(title);
			setPreviewTags(formattedTags);
			setPreview(true);
		} else {
			enqueueSnackbar(snackBarMessages.articlePreview, { variant: "info" });
		}
	}, [setPreview, setPreviewTags, setPreviewTitle, coverImageUrl, previewTheme, editorState, getValues]);
	const toggleEdit = useCallback(() => setPreview(false), [setPreview]);

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
				{isPreview && (
					<ArticleContent
						tags={previewTags}
						title={previewTitle}
						theme={previewTheme}
						coverImageUrl={coverImageUrl}
						htmlContent={editorState}
					/>
				)}
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
							/>
						</Styled.TextFieldsWrapper>
					</Styled.FieldsWrapper>
					<Editor
						initState={editorState}
						onChange={setEditorState}
					/>
				</Styled.Form>
			</Styled.FormWrapper>
			<Styled.ButtonsWrapper>
				<SubmitButton
					type="submit"
					variant="customOutlined"
					form="create-article-form"
				>
					Submit
				</SubmitButton>
				{togglePreviewButton}
			</Styled.ButtonsWrapper>
		</div>
	);
};
