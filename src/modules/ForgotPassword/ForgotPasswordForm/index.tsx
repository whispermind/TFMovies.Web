import { useForm } from "react-hook-form";
import { Stack } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { FormTextFieldIconed, TFormTextFieldIconedProps, PrimaryButton } from "../../../common/components";
import { EmailIcon } from "../../../common/components/Icons";
import { formValidation } from "../../../common/utils";
import { withController, withButtonLoader } from "../../../common/hocs";
import { yupErrorMessages } from "../../../common/utils/yupErrorMessages";

export interface IForgotPassForm {
	email: string;
}

const { requiredError, emailError } = yupErrorMessages;
const { email } = formValidation;

const schema = yup.object().shape({
	email: yup.string().required(requiredError()).matches(email, emailError())
});

export const ForgotPassForm = ({ onSubmit, isLoading }: ILoadingForm<IForgotPassForm>) => {
	const { handleSubmit, control } = useForm<IForgotPassForm>({
		defaultValues: {
			email: ""
		},
		resolver: yupResolver(schema),
		mode: "onBlur"
	});

	const Email = withController<IForgotPassForm, TFormTextFieldIconedProps>(FormTextFieldIconed);
	const SubmitButton = withButtonLoader(PrimaryButton);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Stack rowGap={4}>
				<Email
					type="email"
					name="email"
					placeholder="Enter the email..."
					control={control}
					startIcon={EmailIcon}
				/>
				<SubmitButton
					type="submit"
					variant="customOutlined"
					fullWidth
					disabled={isLoading}
				>
					Send me the instructions
				</SubmitButton>
			</Stack>
		</form>
	);
};
