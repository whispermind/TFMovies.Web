import { useCallback, useState } from "react";
import { enqueueSnackbar } from "notistack";

import { PrimaryButton, LogoHeading } from "../../../common/components";
import { useSendSignUpEmailConfirmationMutation } from "../api";
import { snackBarMessages } from "../../../common/utils";

const throttleTiming = 20000;

interface ISignUpCofnrimProps {
	email: string;
}

export const SignUpConfirmation = ({ email }: ISignUpCofnrimProps) => {
	const [throttle, setThrottle] = useState(false);
	const [signUpEmailConfirmationReq] = useSendSignUpEmailConfirmationMutation();

	const onClick = useCallback(async () => {
		if (throttle) {
			return;
		}

		setThrottle(true);
		setTimeout(() => setThrottle(false), throttleTiming);

		try {
			await signUpEmailConfirmationReq(email).unwrap();
			enqueueSnackbar(snackBarMessages.instructions, { variant: "success" });
		} catch (e) {
			// handled by middleware
		}
	}, [throttle, setThrottle, signUpEmailConfirmationReq, email]);

	const heading = "Thank you for Registering";
	const description = `Thank you for registering on the Portal! We are sure that together with you we can be even better.
  We have sent a letter confirming your registration to the specified e-mail. If you didn't receive it,
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
