import { Link, ListItem, Typography } from "@mui/material";

import { FilteringListWrapper } from "../FilteringListWrapper";
import { useGetTopTagsQuery } from "../../api";
import * as Styled from "./styled";

export const TopTagsFiltering = () => {
	const { data } = useGetTopTagsQuery();

	const listItems = data?.map((topTag) => (
		<ListItem
			disablePadding
			key={topTag.id}
		>
			<Link href={`/search?subject=tags&query=${topTag}`}>
				<Typography variant="SectionLink">{`#${topTag}`}</Typography>
			</Link>
		</ListItem>
	));

	return (
		<FilteringListWrapper subject="Tags">
			<Styled.List>{listItems}</Styled.List>
		</FilteringListWrapper>
	);
};
