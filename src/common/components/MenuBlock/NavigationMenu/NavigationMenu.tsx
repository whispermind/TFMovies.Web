import { Box, List, ListItem, ListItemIcon, Typography, styled } from "@mui/material";

import { CustomMenuLink } from "../CustomMenuLink";
import { HomePageIcon, HashtagIcon, FavoriteIcon } from "../../icons";


export const NavigationMenu = () => {
	const linksData = {
		'Home Page': HomePageIcon,
		'Tags': HashtagIcon,
		'Favorites': FavoriteIcon,
	}

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

	return (
		<Box width='240px'>
			<List sx={{ marginBottom: '40px', paddingTop: '0px' }}>
				{links}
			</List>
		</Box>
	)
}