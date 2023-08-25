import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Stack } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { PassswordIcon, FormTextFieldIconed, TFormTextFieldIconedProps, PrimaryButton } from "../../../common/components";
import { formValidation } from "../../../common/utils";
import { withController } from "../../../common/hocs";
import { yupErrorMessages } from "../../../common/utils/yupErrorMessages";

export interface IPassRecoveryForm {
  password: string;
  passwordConfirm: string;
}

const { passwordConfirmError, passwordError, requiredError } = yupErrorMessages;
const { password } = formValidation;

const schema = yup.object().shape({
  password: yup.string().required(requiredError()).matches(password, passwordError()),
  passwordConfirm: yup
    .string()
    .required(requiredError())
    .oneOf([yup.ref("password")], passwordConfirmError())
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
          fullWidth
        >
          Save this new password
        </PrimaryButton>
      </Stack>
    </form>
  );
};
