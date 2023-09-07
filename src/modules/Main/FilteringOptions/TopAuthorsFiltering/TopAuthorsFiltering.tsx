import { ListItem } from "@mui/material";

import { TopAuthor } from "../TopAuthor/TopAuthor";
import { FilteringListWrapper } from "../FilteringListWrapper";
import { useGetTopAuthors } from "../../../../common/hooks";
import * as S from "./styled";

export const TopAuthorsFiltering = () => {
	const { data } = useGetTopAuthors();

	const listItems = data?.map((authorName) => (
		<ListItem disablePadding>
			<TopAuthor nickname={authorName} />
		</ListItem>
	));

	return (
		<FilteringListWrapper subject="Authors">
			<S.List>{listItems}</S.List>
		</FilteringListWrapper>
	);
};
