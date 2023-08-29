import { useForm } from "react-hook-form";
import { Stack, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

import { PassswordIcon, EmailIcon, FormTextFieldIconed, TFormTextFieldIconedProps, PrimaryButton } from "../../../common/components";
import { withController } from "../../../common/hocs";
import { useSignIn, useAppDispatch } from "../../../common/hooks";
import { signIn } from "../AuthSlice";

export interface ISignInForm {
  email: string;
  password: string;
}

export const SignInForm = () => {
  const [signInReq] = useSignIn();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { handleSubmit, control } = useForm<ISignInForm>({
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const onSignIn = useCallback(
    async (credentials: ISignInForm) => {
      try {
        const authData = await signInReq(credentials).unwrap();
        dispatch(signIn(authData));
        navigate("/");
      } catch (e) {
        console.log(e);
      }
    },
    [navigate, dispatch, signInReq]
  );

  const Email = withController<ISignInForm, TFormTextFieldIconedProps>(FormTextFieldIconed);
  const Password = withController<ISignInForm, TFormTextFieldIconedProps>(FormTextFieldIconed);

  return (
    <form onSubmit={handleSubmit(onSignIn)}>
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
