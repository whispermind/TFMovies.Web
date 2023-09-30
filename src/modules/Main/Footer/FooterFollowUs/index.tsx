import { useMemo } from "react";
import { Stack } from "@mui/material";
import { Instagram, Twitter, Facebook } from "@mui/icons-material";

import { FooterLinksWrapper } from "../FooterLinksWrapper";
import { IconSizes } from "../../../../common/enums";
import { AppLink } from "../../../../common/components";

const linksData = {
	"https://facebook.com/": Facebook,
	"https://www.instagram.com": Instagram,
	"https://twitter.com/": Twitter
};

export const FooterFollowUs = () => {
	const links = useMemo(
		() =>
			Object.entries(linksData).map(([href, Icon]) => (
				<AppLink
					href={href}
					key={href}
				>
					<Icon fontSize={IconSizes.large} />
				</AppLink>
			)),
		[]
	);

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
