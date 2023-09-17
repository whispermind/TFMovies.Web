import { Link } from "@mui/material";

import { FooterLinksWrapper } from "../FooterLinksWrapper";

export const FooterSections = () => {
	const linksData = {
		"/": "Home Page",
		"/tags": "Tags",
		"/favorites": "Favorites",
		"/contactwithus": "Contact Us",
		"/rules": "Rules"
	};

	const links = Object.entries(linksData).map(([href, caption]) => (
		<Link
			key={href}
			variant="SectionLink"
			href={href}
			underline="none"
			onClick={href === "/" ? () => window.scrollTo({ top: 0, behavior: "smooth" }) : undefined}
		>
			{caption}
		</Link>
	));

	return <FooterLinksWrapper heading="Sections">{links}</FooterLinksWrapper>;
};
