import { useForm } from "react-hook-form";
import { Stack } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { EmailIcon, FormTextFieldIconed, TFormTextFieldIconedProps, PrimaryButton } from "../../../common/components";
import { formValidation } from "../../../common/utils";
import { withController } from "../../../common/hocs";
import { yupErrorMessages } from "../../../common/utils/yupErrorMessages";

export interface IForgotPassForm {
  email: string;
}

interface IForgotPassFormProps {
  onSubmit: (data: IForgotPassForm) => void;
}

const { requiredError, emailError } = yupErrorMessages;
const { email } = formValidation;

const schema = yup.object().shape({
  email: yup.string().required(requiredError()).matches(email, emailError())
});

export const ForgotPassForm = ({ onSubmit }: IForgotPassFormProps) => {
  const { handleSubmit, control } = useForm<IForgotPassForm>({
    defaultValues: {
      email: ""
    },
    resolver: yupResolver(schema),
    mode: "onBlur"
  });

  const Email = withController<IForgotPassForm, TFormTextFieldIconedProps>(FormTextFieldIconed);

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
          type="submit"
          variant="customOutlined"
          fullWidth
        >
          Send me the instructions
        </PrimaryButton>
      </Stack>
    </form>
  );
};
