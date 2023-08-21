import { LogAuthWrapper, LogoHeading, PrimaryButton } from "../../common/components";

export const SignUpSuccessPage = () => {
  const heading = "Registration confirmed";
  const description = "Thank you, your registration has been successfully confirmed!";

  return (
    <LogAuthWrapper maxWidth="66%">
      <LogoHeading
        mb={6.5}
        heading={heading}
      >
        {description}
      </LogoHeading>
      <PrimaryButton
        variant="customOutlined"
        href="/signin"
        fullWidth
      >
        Back to Login In
      </PrimaryButton>
    </LogAuthWrapper>
  );
};
