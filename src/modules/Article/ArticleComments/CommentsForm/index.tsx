import { Box, Button, Stack } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useParams } from "react-router-dom";
import { enqueueSnackbar } from "notistack";

import { FormTextField, PrimaryButton } from "../../../../common/components";
import { useCreateCommentMutation } from "../../../../app/api/Articles";
import { snackBarMessages, yupErrorMessages } from "../../../../common/utils";

export interface ICreateCommentForm {
	content: string;
}

const { requiredError } = yupErrorMessages;

const schema = yup.object().shape({
	content: yup.string().required(requiredError()).trim()
});

export const CommentsForm = () => {
	const {
		handleSubmit,
		control,
		formState: { isDirty, errors },
		setValue
	} = useForm({
		defaultValues: { content: "" },
		resolver: yupResolver(schema),
		mode: "onBlur"
	});

	const resetForm = () => {
		setValue("content", "");
	};

	const [createCommentReq] = useCreateCommentMutation();
	const { id = "" } = useParams();

	const onSubmit = async ({ content }: ICreateCommentForm) => {
		try {
			await createCommentReq({ content, id }).unwrap();
			enqueueSnackbar(snackBarMessages.addComment, { variant: "success" });
			resetForm();
		} catch (error) {
			// handled by middleware
		}
	};

	return (
		<Box
			mb="50px"
			mt="20px"
		>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Controller
					name="content"
					control={control}
					render={({ field }) => (
						<FormTextField
							placeholder="Write your comment here"
							{...field}
							fullWidth
							error={!!errors.content}
							helperText={errors.content?.message}
						/>
					)}
				/>
				<Stack
					direction="row"
					gap="40px"
					mt="30px"
				>
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
						onClick={resetForm}
						disabled={!isDirty}
					>
						Clear input
					</Button>
				</Stack>
			</form>
		</Box>
	);
};
