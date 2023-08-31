import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { LogAuthWrapper, LogoHeading, PrimaryButton, Loader } from "../../../common/components";
import { useSignUpVerification } from "../../../common/hooks";

export const SignUpSuccessPage = () => {
  const [signUpVerificationReq, { isLoading }] = useSignUpVerification();
  const { token } = useParams();
  const navigate = useNavigate();

  const heading = "Registration confirmed";
  const description = "Thank you, your registration has been successfully confirmed!";

  useEffect(() => {
    const fetcher = async () => {
      if (token) {
        try {
          await signUpVerificationReq(token).unwrap();
        } catch (e) {
          console.log(e);
        }
      }
    };
    fetcher();
  }, [signUpVerificationReq, token, navigate]);

  return isLoading ? (
    <Loader />
  ) : (
    <LogAuthWrapper maxWidth="65%">
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
