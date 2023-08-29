import { useCallback, useState } from "react";

import { PrimaryButton, LogoHeading } from "../../../common/components";
import { useSignUpConfirmation } from "../../../common/hooks";

const throttleTiming = 20000;

interface ISignUpCofnrimProps {
  email: string;
}

export const SignUpConfirm = ({ email }: ISignUpCofnrimProps) => {
  const [throttle, setThrottle] = useState(false);
  const [signUpConfirmationReq] = useSignUpConfirmation();

  const onClick = useCallback(async () => {
    if (throttle) {
      return;
    }

    setThrottle(true);
    setTimeout(() => setThrottle(false), throttleTiming);

    try {
      await signUpConfirmationReq(email).unwrap();
    } catch (e) {
      console.log(e);
    }
  }, [throttle, setThrottle, signUpConfirmationReq, email]);

  const heading = "Thank you for Registering";
  const description = `Thank you for registering on the Portal! We are sure that together with you we can be even better.
  We have sent a letter confirming your registration to the specified email. If you didn't receive it,
  please check your spam folder or click the "Send again" button below`;

  return (
    <>
      <LogoHeading
        mb={6.5}
        heading={heading}
      >
        {description}
      </LogoHeading>
      <PrimaryButton
        disabled={throttle}
        onClick={onClick}
        variant="customOutlined"
        fullWidth
      >
        Send mail again
      </PrimaryButton>
    </>
  );
};
