import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Stack } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { EmailIcon, FormTextFieldIconed, TFormTextFieldIconedProps, PrimaryButton } from "../../../common/components";
import { emailRegExp } from "../../../common/utils";
import { withController } from "../../../common/hocs";

export interface IForgotPassForm {
  email: string;
}

export const schema = yup.object().shape({
  email: yup.string().required("The email is required").matches(emailRegExp, "The email must be correct")
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
