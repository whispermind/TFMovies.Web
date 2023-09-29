import { useForm } from "react-hook-form";
import { Stack, Link, SvgIconProps } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

import { FormTextFieldIconed, TFormTextFieldIconedProps, PrimaryButton } from "../../../common/components";
import { PassswordIcon, EmailIcon, OpenedEye, ClosedEye } from "../../../common/components/Icons";
import { withController, withButtonLoader } from "../../../common/hocs";
import { yupErrorMessages } from "../../../common/utils/yupErrorMessages";
import { formValidation } from "../../../common/utils";

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

	const [isPasswordVisible, setPasswordVisibility] = useState(false);

	const togglePasswordVisibility = () => {
		setPasswordVisibility((prev) => !prev);
	};

	const renderPasswordEndIcon = (props: SvgIconProps) => {
		if (isPasswordVisible) {
			return (
				<OpenedEye
					onClick={togglePasswordVisibility}
					{...props}
				/>
			);
		}
		return (
			<ClosedEye
				onClick={togglePasswordVisibility}
				{...props}
			/>
		);
	};

	const Email = withController<ISignInForm, TFormTextFieldIconedProps>(FormTextFieldIconed);
	const Password = withController<ISignInForm, TFormTextFieldIconedProps>(FormTextFieldIconed);
	const SubmitButton = withButtonLoader(PrimaryButton);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Stack rowGap={3.5}>
				<Email
					type="email"
					name="email"
					placeholder="Enter the email..."
					control={control}
					startIcon={EmailIcon}
				/>
				<Password
					type={isPasswordVisible ? "text" : "password"}
					name="password"
					placeholder="Enter the password..."
					control={control}
					startIcon={PassswordIcon}
					endIcon={renderPasswordEndIcon}
				/>
				<Link
					href="/forgotpass"
					variant="FormHyperLink"
					color="mainColors.black"
				>
					Forgot Your Password?
				</Link>
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
