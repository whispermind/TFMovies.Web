import { AuthWrapper, LogoHeading, PrimaryButton } from "../../common/components";

export function SignUpSuccessPage() {
  return (
    <AuthWrapper>
      <LogoHeading marginBottom={3.25} headingText="Registration confirmed">
        Thank you, your registration has been successfully confirmed!
      </LogoHeading>
      <PrimaryButton innerText="Back to Login In" variant="customOutlined" disableRipple fullWidth />
    </AuthWrapper>
  );
}
