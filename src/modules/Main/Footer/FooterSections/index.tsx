import { useCallback, useMemo } from "react";
import { Link } from "@mui/material";

import { FooterLinksWrapper } from "../FooterLinksWrapper";
import { Routes } from "../../../../common/enums";

const linksData = {
	"/": "Home Page",
	"/tags": "Tags",
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
				<Link
					key={href}
					variant="SectionLink"
					href={href}
					onClick={href === "/" ? scrollToTop : undefined}
				>
					{caption}
				</Link>
			)),
		[scrollToTop]
	);

	return <FooterLinksWrapper heading="Sections">{links}</FooterLinksWrapper>;
};
