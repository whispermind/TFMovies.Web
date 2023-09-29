import { useForm } from "react-hook-form";
import { Stack, SvgIconProps } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

import { FormTextFieldIconed, TFormTextFieldIconedProps, PrimaryButton } from "../../../common/components";
import { PassswordIcon, OpenedEye, ClosedEye } from "../../../common/components/Icons";
import { formValidation } from "../../../common/utils";
import { withController, withButtonLoader } from "../../../common/hocs";
import { yupErrorMessages } from "../../../common/utils/yupErrorMessages";

export interface IPassRecoveryForm {
	newPassword: string;
	confirmPassword: string;
}

const { passwordConfirmError, passwordError, requiredError } = yupErrorMessages;
const { password } = formValidation;

const schema = yup.object().shape({
	newPassword: yup.string().required(requiredError()).matches(password, passwordError()),
	confirmPassword: yup
		.string()
		.required(requiredError())
		.oneOf([yup.ref("newPassword")], passwordConfirmError())
});

export const PassRecoveryForm = ({ onSubmit, isLoading }: ILoadingForm<IPassRecoveryForm>) => {
	const { handleSubmit, control } = useForm<IPassRecoveryForm>({
		defaultValues: {
			newPassword: "",
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

	const Password = withController<IPassRecoveryForm, TFormTextFieldIconedProps>(FormTextFieldIconed);
	const PasswordConfirm = withController<IPassRecoveryForm, TFormTextFieldIconedProps>(FormTextFieldIconed);
	const SubmitButton = withButtonLoader(PrimaryButton);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Stack rowGap={4}>
				<Password
					type={isPasswordVisible ? "text" : "password"}
					name="newPassword"
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
					variant="customOutlined"
					type="submit"
					fullWidth
					disabled={isLoading}
				>
					Save this new password
				</SubmitButton>
			</Stack>
		</form>
	);
};
