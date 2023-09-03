import { useParams } from "react-router-dom";

import { LogAuthWrapper, LogoHeading, PrimaryButton } from "../../../common/components";
import { SignUpTokenValidator } from "../SignUpTokenValidator";

export const SignUpSuccessPage = () => {
	const { token } = useParams();

	const heading = "Registration confirmed";
	const description = "Thank you, your registration has been successfully confirmed!";

	return (
		<SignUpTokenValidator token={token || ""}>
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
		</SignUpTokenValidator>
	);
};
