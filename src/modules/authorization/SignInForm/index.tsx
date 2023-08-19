import { useForm } from "react-hook-form";
import { Stack, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

import { PassswordIcon, EmailIcon, FormTextFieldIconed, TFormTextFieldIconedProps, PrimaryButton } from "../../../common/components";
import { withController } from "../../../common/hocs";

export interface ISignInForm {
  email: string;
  password: string;
}

export const SignInForm = () => {
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm<ISignInForm>({
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const onLogin = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const Email = withController<ISignInForm, TFormTextFieldIconedProps>(FormTextFieldIconed);
  const Password = withController<ISignInForm, TFormTextFieldIconedProps>(FormTextFieldIconed);

  return (
    <form onSubmit={handleSubmit(onLogin)}>
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
          innerText="Log In"
          onSubmit={onLogin}
        />
      </Stack>
    </form>
  );
};
