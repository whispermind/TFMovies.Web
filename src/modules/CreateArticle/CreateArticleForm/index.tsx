import { ComponentProps, SyntheticEvent, useCallback, ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { FileInput } from "./FileInput";
import { ThemeAutocomplete } from "./ThemeAutocomplete";
import { PrimaryButton } from "../../../common/components";
import { withController, withButtonLoader } from "../../../common/hocs";
import { yupErrorMessages } from "../../../common/utils/yupErrorMessages";
import * as Styled from "./styled";

export interface ICreateArticleForm {
	attachment: FileList | null;
	title: string;
	tags: string;
	theme: string;
}

export type TStyledInputProps = ComponentProps<typeof Styled.TextField>;

const { requiredError, attachmentSize } = yupErrorMessages;

const MAX_ATTACHMENT_SIZE = 5;

export const schema = yup.object().shape({
	attachment: yup
		.mixed<FileList>()
		.required(requiredError("cover image"))
		.test("size", attachmentSize(MAX_ATTACHMENT_SIZE), (file) => {
			const maxSize = MAX_ATTACHMENT_SIZE * 1024 * 1024;
			return file[0]?.size < maxSize || !file.length;
		}),
	title: yup.string().required(requiredError()),
	tags: yup.string().required(requiredError()),
	theme: yup.string().required(requiredError()).notOneOf(["placeholder"], requiredError())
});

export const CreateArticleForm = ({ onSubmit }: IStatedForm<ICreateArticleForm>) => {
	const { handleSubmit, control, setValue } = useForm<ICreateArticleForm>({
		defaultValues: {
			attachment: null,
			title: "",
			tags: "",
			theme: "placeholder"
		},
		resolver: yupResolver<ICreateArticleForm>(schema),
		mode: "onBlur"
	});

	const Title = withController<ICreateArticleForm, TStyledInputProps>(Styled.TextField);
	const Tags = withController<ICreateArticleForm, TStyledInputProps>(Styled.TextField);
	const SubmitButton = withButtonLoader(PrimaryButton);

	const onThemeChange = useCallback(
		(_: SyntheticEvent, value: string | null) => {
			setValue("theme", value || "placeholder");
		},
		[setValue]
	);

	const onFileUpload = useCallback(
		({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			const fileList = ("files" in target && target.files) || null;
			setValue("attachment", fileList);
		},
		[setValue]
	);

	return (
		<Styled.Form onSubmit={handleSubmit(onSubmit)}>
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
			<SubmitButton type="submit">Submit</SubmitButton>
		</Styled.Form>
	);
};
