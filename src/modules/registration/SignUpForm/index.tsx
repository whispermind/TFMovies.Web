import { useForm } from "react-hook-form";
import { Stack } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { PassswordIcon, UserIcon, EmailIcon, FormTextFieldIconed, TFormTextFieldIconedProps, SignUpButton } from "../../../common/components";
import { formValidation } from "../../../common/utils";
import { withController } from "../../../common/hocs";
import { yupErrorMessages } from "../../../common/utils/yupErrorMessages";

export interface ISignUpForm {
  nickname: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export interface ISignUpFormProps {
  onSubmit: (data: ISignUpForm) => void;
}

const { requiredError, maxError, minError, passwordError, passwordConfirmError, emailError, onlyLettersError } = yupErrorMessages;
const { email, password, nickname } = formValidation;

export const schema = yup.object().shape({
  nickname: yup.string().required(requiredError()).min(2, minError(2)).max(16, maxError(16)).matches(nickname, onlyLettersError()),
  email: yup.string().required(requiredError()).matches(email, emailError()),
  password: yup.string().required(requiredError()).matches(password, passwordError()),
  passwordConfirm: yup
    .string()
    .required(requiredError())
    .oneOf([yup.ref("password")], passwordConfirmError())
});

export const SignUpForm = ({ onSubmit }: ISignUpFormProps) => {
  const { handleSubmit, control } = useForm<ISignUpForm>({
    defaultValues: {
      nickname: "",
      email: "",
      password: "",
      passwordConfirm: ""
    },
    resolver: yupResolver(schema),
    mode: "onBlur"
  });

  const Nickname = withController<ISignUpForm, TFormTextFieldIconedProps>(FormTextFieldIconed);
  const Email = withController<ISignUpForm, TFormTextFieldIconedProps>(FormTextFieldIconed);
  const Password = withController<ISignUpForm, TFormTextFieldIconedProps>(FormTextFieldIconed);
  const PasswordConfirm = withController<ISignUpForm, TFormTextFieldIconedProps>(FormTextFieldIconed);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack rowGap={3.5}>
        <Nickname
          type="text"
          name="nickname"
          placeholder="Enter the nickname..."
          control={control}
          icon={UserIcon}
          position="start"
        />
        <Email
          type="email"
          name="email"
          placeholder="Enter the email..."
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
        <PasswordConfirm
          type="password"
          name="passwordConfirm"
          placeholder="Enter the password again..."
          control={control}
          icon={PassswordIcon}
          position="start"
        />
        <SignUpButton />
      </Stack>
    </form>
  );
};
