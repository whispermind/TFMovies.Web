import { useForm } from "react-hook-form";
import { Stack } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
  PassswordIcon,
  UserIcon,
  EmailIcon,
  FormTextFieldIconed,
  TFormTextFieldIconedProps,
  SignUpButton
} from "../../../common/components";
import { emailRegExp, passwordRegExp } from "../../../common/utils";
import { withController } from "../../../common/hocs";

export interface ISignUpForm {
  nickname: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export interface ISignUpFormProps {
  onSubmit: (data: ISignUpForm) => void;
}

const schema = yup.object().shape({
  nickname: yup
    .string()
    .required("Nickname is required")
    .min(4, "Minimum nickname length is 4")
    .max(16, "Maximum nickname length is 16 "),
  email: yup.string().required("The email is required").matches(emailRegExp, "The email must be correct"),
  password: yup
    .string()
    .required("The password is required")
    .matches(
      passwordRegExp,
      "The password must contain minimum 8 and maximum 16 characters, at least one uppercase letter, one lowercase letter, one number and special character"
    ),
  passwordConfirm: yup
    .string()
    .required("The password is required")
    .oneOf([yup.ref("password")], "The password must be the same")
});

export function SignUpForm({ onSubmit }: ISignUpFormProps) {
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
      <Stack
        sx={{
          rowGap: "1.75rem"
        }}
      >
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
}
