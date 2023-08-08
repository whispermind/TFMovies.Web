import { useForm } from 'react-hook-form'
import { FormTextField, SignUpButton } from '../../common/components'
import { withController, withIcon, IWithIconProps } from '../../common/hocs'
import { Stack, TextFieldProps } from '@mui/material'
import { UseControllerProps } from 'react-hook-form';
import { UserIcon, PasswordIcon, EmailIcon } from '../../common/utils';

interface ISignUpForm {
  nickname: string,
  email: string,
  password: string,
  passwordConfirm: string
}

type TWithIconTargetProps = UseControllerProps<ISignUpForm> & TextFieldProps;

export const Registration = () => {
  const { handleSubmit, control } = useForm<ISignUpForm>({
    defaultValues: {
      nickname: "",
      email: "",
      password: "",
      passwordConfirm: ""
    }
  });

  const Nickname = withController<ISignUpForm, TextFieldProps>(FormTextField);
  const Email = withController<ISignUpForm, TextFieldProps>(FormTextField);
  const Password = withController<ISignUpForm, TextFieldProps>(FormTextField);
  const PasswordConfirm = withController<ISignUpForm, TextFieldProps>(FormTextField);

  const NicknameWithIcon = withIcon<IWithIconProps, TWithIconTargetProps>(Nickname);
  const EmailWithIcon = withIcon<IWithIconProps, TWithIconTargetProps>(Email);
  const PasswordWithIcon = withIcon<IWithIconProps, TWithIconTargetProps>(Password);
  const PasswordConfirmWithIcon = withIcon<IWithIconProps, TWithIconTargetProps>(PasswordConfirm);

  return (
    <form>
      <Stack sx={{
        rowGap: "1.75rem",
      }}>
        <NicknameWithIcon name="nickname" placeholder="Enter the nickname..." control={control} icon={UserIcon} position="start" />
        <EmailWithIcon name="email" placeholder="Enter the email..." control={control} icon={EmailIcon} position="start" />
        <PasswordWithIcon name="password" placeholder="Enter the password..." control={control} icon={PasswordIcon} position="start" />
        <PasswordConfirmWithIcon name="passwordConfirm" placeholder="Enter the password again..." control={control} icon={PasswordIcon} position="start" />
        <SignUpButton />
      </Stack>
    </form>
  )
}