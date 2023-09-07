import { Link, ListItem, Typography } from "@mui/material";

import { FilteringListWrapper } from "../FilteringListWrapper";
import { useGetTopTags } from "../../../../common/hooks";
import * as S from "./styled";

export const TopTagsFiltering = () => {
	const { data } = useGetTopTags();

	const listItems = data?.map((topTag) => (
		<ListItem disablePadding>
			<Link href="/">
				<Typography variant="SectionLink">{topTag}</Typography>
			</Link>
		</ListItem>
	));

	return (
		<FilteringListWrapper subject="Tags">
			<S.List>{listItems}</S.List>
		</FilteringListWrapper>
	);
};