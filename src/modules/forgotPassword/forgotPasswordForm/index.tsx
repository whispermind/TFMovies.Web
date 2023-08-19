import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Stack } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { EmailIcon, FormTextFieldIconed, TFormTextFieldIconedProps, PrimaryButton } from "../../../common/components";
import { emailRegExp } from "../../../common/utils";
import { withController } from "../../../common/hocs";
import { yupErrorMessages } from "../../../common/utils/yupErrorMessages";

export interface IForgotPassForm {
  email: string;
}

const { requiredError, emailError } = yupErrorMessages;

const schema = yup.object().shape({
  email: yup.string().required(requiredError()).matches(emailRegExp, emailError())
});

export const ForgotPassForm = () => {
  const { handleSubmit, control } = useForm<IForgotPassForm>({
    defaultValues: {
      email: ""
    },
    resolver: yupResolver(schema),
    mode: "onBlur"
  });

  const Email = withController<IForgotPassForm, TFormTextFieldIconedProps>(FormTextFieldIconed);

  const onSubmit = useCallback(() => {}, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack rowGap={4}>
        <Email
          type="email"
          name="email"
          placeholder="Enter the email..."
          control={control}
          icon={EmailIcon}
          position="start"
        />
        <PrimaryButton
          variant="customOutlined"
          innerText="Send me the instructions"
          fullWidth
        />
      </Stack>
    </form>
  );
};
