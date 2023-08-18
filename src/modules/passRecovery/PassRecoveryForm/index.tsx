import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Stack } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { PassswordIcon, FormTextFieldIconed, TFormTextFieldIconedProps, PrimaryButton } from "../../../common/components";
import { passwordRegExp } from "../../../common/utils";
import { withController } from "../../../common/hocs";

export interface IPassRecoveryForm {
  password: string;
  passwordConfirm: string;
}

export const schema = yup.object().shape({
  password: yup
    .string()
    .required("The password is required")
    .matches(
      passwordRegExp,
      `The password must contain minimum 8 and maximum 16 characters, 
      at least one uppercase letter, one lowercase letter, one number and special character`
    ),
  passwordConfirm: yup
    .string()
    .required("The password is required")
    .oneOf([yup.ref("password")], "The password must be the same")
});

export const PassRecoveryForm = () => {
  const { handleSubmit, control } = useForm<IPassRecoveryForm>({
    defaultValues: {
      password: "",
      passwordConfirm: ""
    },
    resolver: yupResolver(schema),
    mode: "onBlur"
  });

  const Password = withController<IPassRecoveryForm, TFormTextFieldIconedProps>(FormTextFieldIconed);
  const PasswordConfirm = withController<IPassRecoveryForm, TFormTextFieldIconedProps>(FormTextFieldIconed);

  const onSubmit = useCallback(() => {}, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack rowGap={4}>
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
        <PrimaryButton
          variant="customOutlined"
          type="submit"
          innerText="Save this new password"
          fullWidth
        />
      </Stack>
    </form>
  );
};
