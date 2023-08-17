import { LogAuthWrapper, LogoHeading, PrimaryButton } from "../../common/components";

export const SignUpSuccessPage = () => {
  const heading = "Registration confirmed";
  const description = "Thank you, your registration has been successfully confirmed!";

  return (
    <LogAuthWrapper>
      <LogoHeading
        marginBottom={6.5}
        heading={heading}
      >
        {description}
      </LogoHeading>
      <PrimaryButton
        innerText="Back to Login In"
        variant="customOutlined"
        href="/signin"
        fullWidth
      />
    </LogAuthWrapper>
  );
};
