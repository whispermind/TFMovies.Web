import { useCallback } from "react";
import { Link } from "@mui/material";

import { FooterLinksWrapper } from "../FooterLinksWrapper";
import { Routes } from "../../../common/enums";

export const FooterSections = () => {
	const linksData = {
		"/": "Home Page",
		"/tags": "Tags",
		[Routes.favorites]: "Favorites",
		"/contactwithus": "Contact Us",
		"/rules": "Rules"
	};

	const scrollToTop = useCallback(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, []);

	const links = Object.entries(linksData).map(([href, caption]) => (
		<Link
			key={href}
			variant="SectionLink"
			href={href}
			onClick={href === "/" ? scrollToTop : undefined}
		>
			{caption}
		</Link>
	));

	return <FooterLinksWrapper heading="Sections">{links}</FooterLinksWrapper>;
};
