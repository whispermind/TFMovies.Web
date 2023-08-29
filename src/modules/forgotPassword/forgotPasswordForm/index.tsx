import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Stack } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

import { EmailIcon, FormTextFieldIconed, TFormTextFieldIconedProps, PrimaryButton } from "../../../common/components";
import { formValidation } from "../../../common/utils";
import { withController } from "../../../common/hocs";
import { yupErrorMessages } from "../../../common/utils/yupErrorMessages";
import { useForgotPassword } from "../../../common/hooks";

export interface IForgotPassForm {
  email: string;
}

const { requiredError, emailError } = yupErrorMessages;
const { email } = formValidation;

const schema = yup.object().shape({
  email: yup.string().required(requiredError()).matches(email, emailError())
});

export const ForgotPassForm = () => {
  const { handleSubmit, control } = useForm<IForgotPassForm>({
    defaultValues: {
      email: ""
    },
    resolver: yupResolver(schema),
    mode: "onBlur"
  });
  const [forgotPasswordReq] = useForgotPassword();
  const navigate = useNavigate();

  const Email = withController<IForgotPassForm, TFormTextFieldIconedProps>(FormTextFieldIconed);

  const onSubmit = useCallback(
    async ({ email: submitedEmail }: IForgotPassForm) => {
      try {
        await forgotPasswordReq(submitedEmail);
        navigate("/");
      } catch (e) {
        console.log(e);
      }
    },
    [forgotPasswordReq, navigate]
  );

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
          fullWidth
        >
          Send me the instructions
        </PrimaryButton>
      </Stack>
    </form>
  );
};
