import { useCallback, useState } from "react";

import { PrimaryButton, AuthWrapper, LogoHeading } from "../../../common/components";

const throttleTiming = 20000;

interface ISignUpCofnrimProps {
  email: string;
}

export function SignUpConfirm({ email }: ISignUpCofnrimProps) {
  const [throttle, setThrottle] = useState(false);

  const onClick = useCallback(() => {
    if (throttle) {
      return;
    }

    setThrottle(true);
    setTimeout(() => setThrottle(false), throttleTiming);
  }, [throttle, setThrottle]);

  const heading = "Thank you for Registering";
  const description = `Thank you for registering on the Portal! We are sure that together with you we can be even better.
  We have sent a letter confirming your registration to the specified email. If you didn't receive it,
  please check your spam folder or click the "Send again" button below`;

  return (
    <AuthWrapper>
      <LogoHeading marginBottom={3.75} headingText={heading}>
        {description}
      </LogoHeading>
      <PrimaryButton
        disabled={throttle}
        onClick={onClick}
        innerText="Send mail again"
        variant="customOutlined"
        disableRipple
        fullWidth
      />
    </AuthWrapper>
  );
}
