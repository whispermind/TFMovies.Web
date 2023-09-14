import { ListItem, Link } from "@mui/material";

import { TopAuthor } from "../TopAuthor/TopAuthor";
import { FilteringListWrapper } from "../FilteringListWrapper";
import { useGetTopAuthors } from "../../../../common/hooks";
import * as Styled from "./styled";

export const TopAuthorsFiltering = () => {
	const { data } = useGetTopAuthors();

	const listItems = data?.map((authorName) => (
		<ListItem
			disablePadding
			key={authorName}
		>
			<Link href={`/search?subject=users&query=${authorName}`}>
				<TopAuthor nickname={authorName} />
			</Link>
		</ListItem>
	));

	return (
		<FilteringListWrapper subject="Authors">
			<Styled.List>{listItems}</Styled.List>
		</FilteringListWrapper>
	);
};
