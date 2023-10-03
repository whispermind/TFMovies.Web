import { useCallback, useMemo } from "react";

import { FooterLinksWrapper } from "../FooterLinksWrapper";
import { Routes } from "../../../../common/enums";
import { AppLink } from "../../../../common/components/AppLink";

const linksData = {
	"/": "Home Page",
	"/search?subject=tags": "Tags",
	[Routes.favorites]: "Favorites",
	"/contactwithus": "Contact Us",
	"/rules": "Rules"
};

export const FooterSections = () => {
	const scrollToTop = useCallback(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, []);

	const links = useMemo(
		() =>
			Object.entries(linksData).map(([href, caption]) => (
				<AppLink
					key={href}
					variant="SectionLink"
					href={href}
					onClick={href === "/" ? scrollToTop : undefined}
					authorized
				>
					{caption}
				</AppLink>
			)),
		[scrollToTop]
	);

	return <FooterLinksWrapper heading="Sections">{links}</FooterLinksWrapper>;
};
