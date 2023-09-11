import { Stack, List, ListItem, ListItemIcon, Typography } from "@mui/material";

import { FavoriteBorder } from "@mui/icons-material";
import { HomePageIcon, HashtagIcon, EmailIcon, RulesIcon, UserListIcon } from "../Icons";
import { useAppSelector } from "../../hooks";
import { selectAuth } from "../../../modules/Authorization/AuthSlice";
import * as S from "./styled";

export const MainNav = () => {
	const { currentUser } = useAppSelector(selectAuth);

	const linksData = [
		{ caption: "Home Page", Icon: HomePageIcon, section: "main", href: "/" },
		{ caption: "Tags", Icon: HashtagIcon, section: "main", href: "/" },
		{ caption: "Favorites", Icon: FavoriteBorder, section: "main", href: "/favorites" },
		{ caption: "Contact Us", Icon: EmailIcon, section: "other", href: "/" },
		{ caption: "Rules", Icon: RulesIcon, section: "other", href: "/" },
		{ caption: "User List", Icon: UserListIcon, section: "admin", href: "/userlist" }
	];

	const unsortedLinks = linksData.map(({ caption, Icon, section, href }) => ({
		link: (
			<S.MainLink
				key={caption}
				href={href}
			>
				<ListItem>
					<ListItemIcon>
						<Icon />
					</ListItemIcon>
					<Typography variant="HBody">{caption}</Typography>
				</ListItem>
			</S.MainLink>
		),
		section
	}));

	const mainLinks = unsortedLinks.filter(({ section }) => section === "main").map(({ link }) => link);
	const otherLinks = unsortedLinks.filter(({ section }) => section === "other").map(({ link }) => link);
	const adminLinks = unsortedLinks.filter(({ section }) => section === "admin").map(({ link }) => link);

	const isAdmin = currentUser?.role === "admin";

	return (
		<Stack
			rowGap={5}
			width="12.5vw"
		>
			<div>
				<List>{mainLinks}</List>
			</div>
			{isAdmin && (
				<div>
					<Typography variant="Section">Admin</Typography>
					<List>{adminLinks}</List>
				</div>
			)}
			<div>
				<Typography variant="Section">Other</Typography>
				<List>{otherLinks}</List>
			</div>
		</Stack>
	);
};
