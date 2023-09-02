import { useForm } from "react-hook-form";
import { Stack } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { FormTextFieldIconed, TFormTextFieldIconedProps, PrimaryButton } from "../../../common/components";
import { PassswordIcon } from "../../../common/components/icons";
import { formValidation } from "../../../common/utils";
import { withController } from "../../../common/hocs";
import { yupErrorMessages } from "../../../common/utils/yupErrorMessages";

export interface IPassRecoveryForm {
  newPassword: string;
  confirmPassword: string;
}

interface IPassRecoveryFormProps {
  onSubmit: (data: IPassRecoveryForm) => void;
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

export const PassRecoveryForm = ({ onSubmit }: IPassRecoveryFormProps) => {
  const { handleSubmit, control } = useForm<IPassRecoveryForm>({
    defaultValues: {
      newPassword: "",
      confirmPassword: ""
    },
    resolver: yupResolver(schema),
    mode: "onBlur"
  });

  const Password = withController<IPassRecoveryForm, TFormTextFieldIconedProps>(FormTextFieldIconed);
  const PasswordConfirm = withController<IPassRecoveryForm, TFormTextFieldIconedProps>(FormTextFieldIconed);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack rowGap={4}>
        <Password
          type="password"
          name="newPassword"
          placeholder="Enter the password..."
          control={control}
          icon={PassswordIcon}
          position="start"
        />
        <PasswordConfirm
          type="password"
          name="confirmPassword"
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
