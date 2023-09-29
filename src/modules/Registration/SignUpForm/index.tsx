import { useForm } from "react-hook-form";
import { Stack, SvgIconProps } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

import { FormTextFieldIconed, TFormTextFieldIconedProps, SignUpButton } from "../../../common/components";
import { PassswordIcon, UserIcon, EmailIcon, OpenedEye, ClosedEye } from "../../../common/components/Icons";
import { formValidation } from "../../../common/utils";
import { withController, withButtonLoader } from "../../../common/hocs";
import { yupErrorMessages } from "../../../common/utils/yupErrorMessages";

export interface ISignUpForm {
	nickname: string;
	email: string;
	password: string;
	confirmPassword: string;
}

const { requiredError, maxError, minError, passwordError, passwordConfirmError, emailError, onlyLettersError, traillingSpace } = yupErrorMessages;
const { email, password, nickname } = formValidation;

export const schema = yup.object().shape({
	nickname: yup.string().required(requiredError()).min(2, minError(2)).max(16, maxError(16)).matches(nickname, onlyLettersError()).trim(traillingSpace()),
	email: yup.string().required(requiredError()).matches(email, emailError()),
	password: yup.string().required(requiredError()).matches(password, passwordError()),
	confirmPassword: yup
		.string()
		.required(requiredError())
		.oneOf([yup.ref("password")], passwordConfirmError())
});

export const SignUpForm = ({ onSubmit, isLoading }: ILoadingForm<ISignUpForm>) => {
	const { handleSubmit, control } = useForm<ISignUpForm>({
		defaultValues: {
			nickname: "",
			email: "",
			password: "",
			confirmPassword: ""
		},
		resolver: yupResolver(schema),
		mode: "onBlur"
	});

	const [isPasswordVisible, setPasswordVisibility] = useState(false);
	const [isPasswordConfirmVisible, setPasswordConfirmVisibility] = useState(false);

	const togglePasswordVisibility = () => {
		setPasswordVisibility((prev) => !prev);
	};

	const togglePasswordConfirmVisibility = () => {
		setPasswordConfirmVisibility((prev) => !prev);
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

	const renderPasswordConfirmEndIcon = (props: SvgIconProps) => {
		if (isPasswordConfirmVisible) {
			return (
				<OpenedEye
					onClick={togglePasswordConfirmVisibility}
					{...props}
				/>
			);
		}
		return (
			<ClosedEye
				onClick={togglePasswordConfirmVisibility}
				{...props}
			/>
		);
	};

	const Nickname = withController<ISignUpForm, TFormTextFieldIconedProps>(FormTextFieldIconed);
	const Email = withController<ISignUpForm, TFormTextFieldIconedProps>(FormTextFieldIconed);
	const Password = withController<ISignUpForm, TFormTextFieldIconedProps>(FormTextFieldIconed);
	const PasswordConfirm = withController<ISignUpForm, TFormTextFieldIconedProps>(FormTextFieldIconed);
	const SubmitButton = withButtonLoader(SignUpButton);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Stack rowGap={3.5}>
				<Nickname
					type="text"
					name="nickname"
					placeholder="Enter the nickname..."
					control={control}
					startIcon={UserIcon}
				/>
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
				<PasswordConfirm
					type={isPasswordConfirmVisible ? "text" : "password"}
					name="confirmPassword"
					placeholder="Enter the password again..."
					control={control}
					startIcon={PassswordIcon}
					endIcon={renderPasswordConfirmEndIcon}
				/>
				<SubmitButton
					type="submit"
					fullWidth
					disabled={isLoading}
				/>
			</Stack>
		</form>
	);
};
