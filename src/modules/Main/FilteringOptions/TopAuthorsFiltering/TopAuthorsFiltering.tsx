import { ListItem, Link } from "@mui/material";

import { TopAuthor } from "../TopAuthor/TopAuthor";
import { FilteringListWrapper } from "../FilteringListWrapper";
import { useGetTopAuthorsQuery } from "../../api";
import * as Styled from "./styled";

export const TopAuthorsFiltering = () => {
	const { data } = useGetTopAuthorsQuery("?limit=3&order=desc");

	const listItems = data?.map(({ nickname, id }) => (
		<ListItem
			disablePadding
			key={id}
		>
			<Link href={`/search?subject=users&query=${nickname}`}>
				<TopAuthor nickname={nickname} />
			</Link>
		</ListItem>
	));

	return (
		<FilteringListWrapper subject="Authors">
			<Styled.List>{listItems}</Styled.List>
		</FilteringListWrapper>
	);
};
