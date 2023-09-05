import { useParams } from "react-router-dom";

import { LogAuthWrapper, LogoHeading, PrimaryButton, TokenValidator } from "../../../common/components";

export const SignUpSuccessPage = () => {
	const { token } = useParams();

	const heading = "Registration confirmed";
	const description = "Thank you, your registration has been successfully confirmed!";

	return (
		<TokenValidator
			token={token || ""}
			endpoint="verify-email"
		>
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
		</TokenValidator>
	);
};
