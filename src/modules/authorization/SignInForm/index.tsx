import { useForm } from "react-hook-form";
import { Stack, Link } from "@mui/material";

import { FormTextFieldIconed, TFormTextFieldIconedProps, PrimaryButton } from "../../../common/components";
import { PassswordIcon, EmailIcon } from "../../../common/components/icons";
import { withController } from "../../../common/hocs";

export interface ISignInForm {
  email: string;
  password: string;
}

interface ISignInProps {
  onSubmit: (data: ISignInForm) => void;
}

export const SignInForm = ({ onSubmit }: ISignInProps) => {
  const { handleSubmit, control } = useForm<ISignInForm>({
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const Email = withController<ISignInForm, TFormTextFieldIconedProps>(FormTextFieldIconed);
  const Password = withController<ISignInForm, TFormTextFieldIconedProps>(FormTextFieldIconed);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack rowGap={3.5}>
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
        <Link
          href="/forgotpass"
          variant="FormHyperLink"
          color="mainColors.black"
        >
          Forgot Your Password?
        </Link>
        <PrimaryButton
          variant="customOutlined"
          type="submit"
        >
          Log In
        </PrimaryButton>
      </Stack>
    </form>
  );
};
