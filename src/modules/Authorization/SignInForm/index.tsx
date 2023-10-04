import { useForm } from "react-hook-form";
import { Stack } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { FormTextFieldIconed, TFormTextFieldIconedProps, PrimaryButton, AppLink } from "../../../common/components";
import { PassswordIcon, EmailIcon } from "../../../common/components/Icons";
import { withController, withButtonLoader } from "../../../common/hocs";
import { yupErrorMessages } from "../../../common/utils/yupErrorMessages";
import { formValidation } from "../../../common/utils";
import { Routes } from "../../../common/enums";

export interface ISignInForm {
	email: string;
	password: string;
}

const { email } = formValidation;
const { emailError, requiredError } = yupErrorMessages;

export const schema = yup.object().shape({
	email: yup.string().required(requiredError()).matches(email, emailError()),
	password: yup.string().required(requiredError())
});

export const SignInForm = ({ onSubmit, isLoading }: ILoadingForm<ISignInForm>) => {
	const { handleSubmit, control } = useForm<ISignInForm>({
		defaultValues: {
			email: "",
			password: ""
		},
		resolver: yupResolver(schema),
		mode: "onBlur"
	});

	const Email = withController<ISignInForm, TFormTextFieldIconedProps>(FormTextFieldIconed);
	const Password = withController<ISignInForm, TFormTextFieldIconedProps>(FormTextFieldIconed);
	const SubmitButton = withButtonLoader(PrimaryButton);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Stack rowGap={3.5}>
				<Email
					type="email"
					name="email"
					placeholder="Enter the e-mail..."
					control={control}
					icon={EmailIcon}
					position="start"
				/>
				<Password
					type="password"
					name="password"
					placeholder="Enter the password..."
					control={control}
					icon={PassswordIcon}
					position="start"
				/>
				<AppLink
					href={`${Routes.forgotPass}`}
					variant="FormHyperLink"
					color="mainColors.black"
				>
					Forgot Your Password?
				</AppLink>
				<SubmitButton
					variant="customOutlined"
					type="submit"
					disabled={isLoading}
					fullWidth
				>
					Log In
				</SubmitButton>
			</Stack>
		</form>
	);
};
