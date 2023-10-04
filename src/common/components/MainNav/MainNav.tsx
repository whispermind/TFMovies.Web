import { useMemo } from "react";
import { Stack, List, ListItem, ListItemIcon, Typography } from "@mui/material";

import { FavoriteBorder, PersonAddOutlined } from "@mui/icons-material";
import { HomePageIcon, HashtagIcon, EmailIcon, RulesIcon, UserListIcon } from "../Icons";
import { useAppSelector } from "../../hooks";
import { selectAuth } from "../../../modules/Authorization/AuthSlice";
import { UserRoles, Routes } from "../../enums";
import * as Styled from "./styled";

const linksData = [
	{ caption: "Home Page", Icon: HomePageIcon, section: "main", href: "/" },
	{ caption: "Tags", Icon: HashtagIcon, section: "main", href: "/search?subject=tags" },
	{ caption: "Favorites", Icon: FavoriteBorder, section: "main", href: Routes.favorites },
	{ caption: "Contact Us", Icon: EmailIcon, section: "other", href: "/" },
	{ caption: "Rules", Icon: RulesIcon, section: "other", href: "/" },
	{ caption: "Users List", Icon: UserListIcon, section: "admin", href: Routes.usersList },
	{ caption: "Users Requests", Icon: PersonAddOutlined, section: "admin", href: Routes.authorsRequests }
];

export const MainNav = () => {
	const { currentUser } = useAppSelector(selectAuth);

	const unsortedLinks = useMemo(
		() =>
			linksData.map(({ caption, Icon, section, href }) => ({
				link: (
					<Styled.MainLink
						key={caption}
						href={href}
						authorized
					>
						<ListItem>
							<ListItemIcon>
								<Icon />
							</ListItemIcon>
							<Typography variant="HBody">{caption}</Typography>
						</ListItem>
					</Styled.MainLink>
				),
				section
			})),
		[]
	);

	const mainLinks = useMemo(() => unsortedLinks.filter(({ section }) => section === "main").map(({ link }) => link), [unsortedLinks]);
	const otherLinks = useMemo(() => unsortedLinks.filter(({ section }) => section === "other").map(({ link }) => link), [unsortedLinks]);
	const adminLinks = useMemo(() => unsortedLinks.filter(({ section }) => section === "admin").map(({ link }) => link), [unsortedLinks]);

	const isAdmin = currentUser?.role.name === UserRoles.admin;

	return (
		<Stack
			rowGap={5}
			minWidth="240px"
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
