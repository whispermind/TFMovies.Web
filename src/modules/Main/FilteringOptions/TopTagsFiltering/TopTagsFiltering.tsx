import { Link, ListItem, Typography } from "@mui/material";

import { FilteringListWrapper } from "../FilteringListWrapper";
import { useGetTopTagsQuery } from "../../api";
import * as Styled from "./styled";

const TAGS_FETCH_LIMIT = 7;

export const TopTagsFiltering = () => {
	const { data } = useGetTopTagsQuery(`?limit=${TAGS_FETCH_LIMIT}`);

	const listItems = data?.map(({ name, id }) => (
		<ListItem
			disablePadding
			key={id}
		>
			<Link href={`/search?subject=tags&query=${name}`}>
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
