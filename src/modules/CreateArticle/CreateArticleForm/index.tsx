import { ComponentProps, useCallback, ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Editor } from "./Editor";
import { FileInput } from "./FileInput";
import { ThemeAutocomplete } from "./ThemeAutocomplete";
import { PrimaryButton } from "../../../common/components";
import { withController, withButtonLoader } from "../../../common/hocs";
import { yupErrorMessages } from "../../../common/utils/yupErrorMessages";
import { useImageUploadMutation } from "../api";
import { IGetThemeResponseData } from "../../Main/api";
import { ArticleContent } from "../../Article";
import * as Styled from "./styled";

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

const { requiredError, attachmentSize, tagsLimit, traillingSpace } = yupErrorMessages;

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
		.test("tagsLimit", tagsLimit(TAGS_LIMIT), (value) => {
			const spacesAmount = value.split("").reduce((acc, symbol) => (symbol === " " ? acc + 1 : acc), 0);
			return spacesAmount < TAGS_LIMIT;
		}),
	ThemeId: yup.string().required(requiredError()).notOneOf(["placeholder"], requiredError())
});

export const CreateArticleForm = ({ onSubmit: onSubmitFromProps }: ILoadingForm<ICreateArticleFormSubmit>) => {
	const [imageUploadReq] = useImageUploadMutation();
	const [isPreview, setPreview] = useState(false);
	const [editorState, setEditorState] = useState("");
	const [coverImage, setCoverImage] = useState("");
	const [previewTheme, setPreviewTheme] = useState("");

	const { handleSubmit, control, setValue, getValues } = useForm<ICreateArticleForm>({
		defaultValues: {
			title: "",
			tags: "",
			ThemeId: "placeholder"
		},
		resolver: yupResolver<ICreateArticleForm>(schema),
		mode: "onBlur"
	});

	const { title, tags } = getValues();
	const previewTags = tags.split(" ").map((tag) => ({ name: tag, id: Date.now().toString() }));

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
					setCoverImage(fileUrl);
				} catch {
					// handled by middleware
				}
			}
		},
		[imageUploadReq, setCoverImage, setValue]
	);

	const onSubmit = useCallback(
		(formData: ICreateArticleForm) => {
			onSubmitFromProps({ ...formData, attachment: coverImage, HtmlContent: editorState });
		},
		[onSubmitFromProps, editorState, coverImage]
	);

	const togglePreview = useCallback(() => setPreview(true), [setPreview]);
	const toggleEdit = useCallback(() => setPreview(false), [setPreview]);

	const isPreviwable = !(previewTags.length && previewTheme && title && coverImage);
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
			disabled={isPreviwable}
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
						title={title}
						theme={previewTheme}
						coverImageUrl={coverImage}
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
								required
							/>
							<ThemeAutocomplete
								control={control}
								onChange={onThemeChange}
							/>
						</Styled.TextFieldsWrapper>
					</Styled.FieldsWrapper>
					<Editor
						formFieldState={editorState}
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
