import { Box, List, ListItem, ListItemIcon, Typography } from "@mui/material";
// import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
// import TagOutlinedIcon from '@mui/icons-material/TagOutlined';
// import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

import { CustomLink } from "./style";
import { HomePageIcon } from "../icons/HomePageIcon";
import { HashtagIcon } from "../icons/HashtagIcon";
import { FavoriteIcon } from "../icons/FavoriteIcon";
import { EmailIcon } from "../icons/EmailIcon";
import { RulesIcon } from "../icons/RulesIcon";

export const CustomMenu = () => {
	return (
		<Box width='240px'>
			<List sx={{ mb: '40px' }}>
				<CustomLink>
					<ListItem>
						<ListItemIcon>
							<HomePageIcon />
						</ListItemIcon>
						<Typography variant="HBody">Home Page</Typography>
					</ListItem>
				</CustomLink>
				<CustomLink>
					<ListItem>
						<ListItemIcon>
							<HashtagIcon />
						</ListItemIcon>
						<Typography variant="HBody">Tags</Typography>
					</ListItem>
				</CustomLink>
				<CustomLink>
					<ListItem>
						<ListItemIcon>
							<FavoriteIcon />
						</ListItemIcon>
						<Typography variant="HBody">Favorites</Typography>
					</ListItem>
				</CustomLink>
			</List>
			<Typography variant="Sector">Other</Typography>
			<List>
				<CustomLink>
					<ListItem>
						<ListItemIcon>
							<EmailIcon />
						</ListItemIcon>
						<Typography variant="HBody">Contact with Us</Typography>
					</ListItem>
				</CustomLink>
				<CustomLink>
					<ListItem>
						<ListItemIcon>
							<RulesIcon />
						</ListItemIcon>
						<Typography variant="HBody">Rules</Typography>
					</ListItem>
				</CustomLink>
			</List>
		</Box>
	)
}