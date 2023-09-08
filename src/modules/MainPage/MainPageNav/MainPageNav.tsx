import { Box, List, ListItem, ListItemIcon, Typography } from "@mui/material";

import { CustomMenuLink } from "./CustomMenuLink";
import { HomePageIcon, HashtagIcon, FavoriteIcon, EmailIcon, RulesIcon } from "../../../common/components/Icons";

export const MainPageNav = () => {
	const linksData = {
		"Home Page": HomePageIcon,
		Tags: HashtagIcon,
		Favorites: FavoriteIcon
	};

	const otherLinksData = {
		"Contact Us": EmailIcon,
		Rules: RulesIcon
	};

	const links = Object.entries(linksData).map(([text, Icon]) => (
		<CustomMenuLink key={text}>
			<ListItem>
				<ListItemIcon>
					<Icon />
				</ListItemIcon>
				<Typography variant="HBody">{text}</Typography>
			</ListItem>
		</CustomMenuLink>
	));

	const otherLinks = Object.entries(otherLinksData).map(([text, Icon]) => (
		<CustomMenuLink key={text}>
			<ListItem>
				<ListItemIcon>
					<Icon />
				</ListItemIcon>
				<Typography variant="HBody">{text}</Typography>
			</ListItem>
		</CustomMenuLink>
	));

	return (
		<Box minWidth="240px">
			<List sx={{ marginBottom: "30px", paddingTop: "0px" }}>{links}</List>
			<Typography variant="Section">Other</Typography>
			<List>{otherLinks}</List>
		</Box>
	);
};
