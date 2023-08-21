import { Link } from "@mui/material";

import { LinksWrapper } from "../LinksWrapper";

export const Sector = () => {
  const linksData = {
    "/": "Home Page",
    "/tags": "Tags",
    "/favorites": "Favorites",
    "/contactwithus": "Contact with us",
    "/rules": "Rules"
  };

  const links = Object.entries(linksData).map(([href, caption]) => (
    <Link
      key={href}
      variant="SectorLink"
      href={href}
      underline="none"
    >
      {caption}
    </Link>
  ));

  return <LinksWrapper heading="Sectors">{links}</LinksWrapper>;
};
