import { Link, ListItem, Typography } from "@mui/material";

import { FilteringListWrapper } from "../FilteringListWrapper";
import { useGetTopTagsQuery } from "../../api";
import * as Styled from "./styled";

export const TopTagsFiltering = () => {
	const { data } = useGetTopTagsQuery("?limit=7&sort=rated&order=desc");

	const listItems = data?.map(({ name, id }) => (
		<ListItem
			disablePadding
			key={id}
		>
			<Link
				href={`/search?subject=tags&query=${name}`}
				underline="none"
			>
				<Typography variant="SectionLink">{`#${name}`}</Typography>
			</Link>
		</ListItem>
	));

	return (
		<FilteringListWrapper subject="Tags">
			<Styled.List>{listItems}</Styled.List>
		</FilteringListWrapper>
	);
};
