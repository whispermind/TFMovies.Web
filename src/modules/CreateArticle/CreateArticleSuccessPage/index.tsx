import { SubPageWrapper, LogoHeading, PrimaryButton } from "../../../common/components";
import { Routes } from "../../../common/enums";

export const CreateArticleSuccessPage = () => {
	const heading = "Article was Published!";
	const additionals = "Great job!";
	const description = "Your article was succesfully published. We need some time for it to appear on the site.";

	return (
		<SubPageWrapper maxWidth="1080px">
			<LogoHeading
				mb={6.5}
				heading={heading}
				additionals={additionals}
			>
				{description}
			</LogoHeading>
			<PrimaryButton
				variant="customOutlined"
				href={Routes.signIn}
				fullWidth
			>
				Back to Home Page
			</PrimaryButton>
		</SubPageWrapper>
	);
};
