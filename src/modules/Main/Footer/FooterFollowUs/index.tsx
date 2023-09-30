import { Link, Stack } from "@mui/material";
import { Instagram, Twitter, Facebook } from "@mui/icons-material";

import { FooterLinksWrapper } from "../FooterLinksWrapper";
import { IconSizes } from "../../../../common/enums";

export const FooterFollowUs = () => {
	const linksData = {
		"https://facebook.com/": Facebook,
		"https://www.instagram.com": Instagram,
		"https://twitter.com/": Twitter
	};

	const links = Object.entries(linksData).map(([href, Icon]) => (
		<Link
			href={href}
			key={href}
		>
			<Icon fontSize={IconSizes.large} />
		</Link>
	));

	return (
		<FooterLinksWrapper heading="Follow Us">
			<Stack
				direction="row"
				columnGap={3}
			>
				{links}
			</Stack>
		</FooterLinksWrapper>
	);
};
