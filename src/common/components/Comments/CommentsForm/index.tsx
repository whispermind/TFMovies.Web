import { Box, Button, Stack, TextFieldProps } from "@mui/material"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"

import { FormTextField, PrimaryButton } from "../../../components"
import { useCreateComment } from "../../../hooks"
import { yupErrorMessages } from "../../../utils"

interface IFormData {
  body: string;
	author: string;
}

const { requiredError } = yupErrorMessages;

const schema = yup.object().shape({
  body: yup.string().required(requiredError()).trim(),
});

export const CommentsForm = ({ onAddComment }) => {
	const { handleSubmit, control, reset, formState: { isDirty, errors }, setValue } = useForm({
		defaultValues: {body: ""},
		resolver: yupResolver(schema),
		mode: "onBlur"
	});

	const [createComment, { isLoading, isError, isSuccess }] = useCreateComment();

	// const qwe = withController<FormData, <React.componentType<typeof FormTextField>>(FormTextField)

	const clearInput = () => {
		setValue("body", "");
	}

	
	const onSubmit: SubmitHandler<IFormData | any> = async ({body}: IFormData) => {
		try {
			const newComment = await createComment({ body, author: '13231' }).unwrap();
      onAddComment(newComment);
			clearInput();
		} catch (error) {
			console.error("Error", error);
		}
	};

	return (
		<Box mb="50px" mt="20px">
			<form onSubmit={handleSubmit(onSubmit)}>
				<Controller
					name="body"
					control={control}
					render={({field}) => (
						<FormTextField
							placeholder="Write your comment here"
							{...field}
							fullWidth 
							error={!!errors.body}
							helperText={errors.body?.message} />
					)} />
				<Stack direction="row" gap="40px" mt="30px">
					<PrimaryButton
						variant="customOutlined"
						type="submit"
						sx={{ width: "216px" }}
					>
						Send comment
					</PrimaryButton>
					<Button
						variant="ghost"
						sx={{ width: "216px" }}
						onClick={clearInput}
						disabled={!isDirty}
					>
						Clear input
					</Button>
				</Stack>
			</form>
		</Box>
	)
}