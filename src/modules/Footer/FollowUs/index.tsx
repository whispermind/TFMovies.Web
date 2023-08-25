import { Link, Stack } from "@mui/material";
import { Instagram, Twitter, Facebook } from "@mui/icons-material";

import { LinksWrapper } from "../LinksWrapper";

export const FollowUs = () => {
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
      <Icon fontSize="large" />
    </Link>
  ));

  return (
    <LinksWrapper heading="Follow Us">
      <Stack
        direction="row"
        columnGap={3}
      >
        {links}
      </Stack>
    </LinksWrapper>
  );
};
