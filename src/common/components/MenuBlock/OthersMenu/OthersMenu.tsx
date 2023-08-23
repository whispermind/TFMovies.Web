import { Typography, List, ListItem, ListItemIcon, Box } from "@mui/material";

import { CustomMenuLink } from "../CustomMenuLink";
import { EmailIcon, RulesIcon } from "../../icons";

export const OthersMenu = () => {
	const linksData = {
		'Contact with Us': EmailIcon,
		'Rules': RulesIcon,
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
		<>
			<Typography variant="Sector">Other</Typography>
			<Box width='240px'>
				<List>
					{links}
				</List>
			</Box>
		</>
	)
}


