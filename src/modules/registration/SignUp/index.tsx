import { FormDivider, LogoHeading, AuthWrapper, PrimaryButton } from "../../../common/components"
import { SignUpForm, ISignUpFormProps } from "../SignUpForm"

export const SignUp = ({ onSubmit }: ISignUpFormProps) => {
  const description = `We are the largest society of movies enthusiasts.
  Here you are sure to find like - minded people! To create an account,
    choose to register via social network or e - mail.`

  return (
    <>
      <AuthWrapper>
        <LogoHeading marginBottom={3.75}>
          {description}
        </LogoHeading>
        <SignUpForm onSubmit={onSubmit} />
        <FormDivider>or</FormDivider>
        <PrimaryButton innerText="Log in" variant="ghost" disableRipple fullWidth />
      </AuthWrapper>
    </>
  )
}
