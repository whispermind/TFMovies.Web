import { useMemo } from "react";
import { Stack, Typography } from "@mui/material";
import { AppLink } from "../../../../common/components";

const linksData = {
	"/contactus": "Contact Us",
	"/privacy": "Privacy Policy",
	"/termsofuse": "Terms of Use"
};

export const FooterCopyright = () => {
	const links = useMemo(
		() =>
			Object.entries(linksData).map(([href, caption]) => (
				<AppLink
					key={href}
					href={href}
					color="greyColors.softGrey"
				>
					{caption}
				</AppLink>
			)),
		[]
	);

	return (
		<Stack
			width="100%"
			direction="row"
			justifyContent="space-between"
		>
			<Typography
				variant="SBody"
				color="greyColors.softGrey"
			>
				Copyright © 2023 MEDIAFLIX
			</Typography>
			<Stack
				direction="row"
				spacing={8.5}
			>
				{links}
			</Stack>
		</Stack>
	);
};
