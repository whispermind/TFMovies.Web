import { SignInForm } from "../../modules/Authorization";
import { FormDivider, SignUpButton, LogAuthWrapper, LogoHeading, LogoName } from "../../common/components";

export const SignInPage = () => {
  const description =
    "We are largest society of movies enthusiasts. Here you are sure to find like-minded people! To log into your account, enter your username and password";
  const heading = (
    <>
      Welcome back to the <LogoName variant="HHeader" />
    </>
  );
  return (
    <LogAuthWrapper maxWidth="66%">
      <LogoHeading
        mb={7.5}
        heading={heading}
      >
        {description}
      </LogoHeading>
      <SignInForm />
      <FormDivider sx={{ m: "2.25rem 0" }}>Don`t have an account?</FormDivider>
      <SignUpButton
        href="/signup"
        fullWidth
      />
    </LogAuthWrapper>
  );
};
