import { useParams } from "react-router-dom";

import { SubPageWrapper, LogoHeading, PrimaryButton } from "../../../common/components";
import { useTokenValidation } from "../../../common/hooks";
import { Routes } from "../../../common/enums";

export const SignUpSuccessPage = () => {
	const { token } = useParams();
	const { isSuccess } = useTokenValidation(token || "", "verify-email");
	const heading = "Registration confirmed";
	const description = "Thank you, your registration has been successfully confirmed!";

	return (
		(isSuccess && (
			<SubPageWrapper maxWidth="1080px">
				<LogoHeading
					mb={6.5}
					heading={heading}
				>
					{description}
				</LogoHeading>
				<PrimaryButton
					variant="customOutlined"
					href={Routes.signIn}
					fullWidth
				>
					Back to Login In
				</PrimaryButton>
			</SubPageWrapper>
		)) ||
		null
	);
};
