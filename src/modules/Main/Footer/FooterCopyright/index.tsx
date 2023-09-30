import { Link, Stack, Typography } from "@mui/material";

export const FooterCopyright = () => {
	const linksData = {
		"/contactus": "Contact Us",
		"/privacy": "Privacy Policy",
		"/termsofuse": "Terms of Use"
	};

	const links = Object.entries(linksData).map(([href, caption]) => (
		<Link
			key={href}
			href={href}
			color="greyColors.softGrey"
		>
			{caption}
		</Link>
	));

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
