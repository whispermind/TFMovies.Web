import { useMemo } from "react";
import { ListItem, Typography } from "@mui/material";

import { FilteringListWrapper } from "../FilteringListWrapper";
import { useGetTopTagsQuery } from "../../../../app/api/Tags";
import { Routes } from "../../../../common/enums";
import { AppLink } from "../../../../common/components";
import * as Styled from "./styled";

const TAGS_FETCH_LIMIT = 7;

export const TopTagsFiltering = () => {
	const { data } = useGetTopTagsQuery(`?limit=${TAGS_FETCH_LIMIT}`);

	const topTagsList = useMemo(
		() =>
			data?.map(({ name, id }) => (
				<ListItem
					disablePadding
					key={id}
				>
					<AppLink
						href={`${Routes.search}?subject=tags&query=${name}`}
						authorized
					>
						<Typography variant="SectionLink">{`#${name}`}</Typography>
					</AppLink>
				</ListItem>
			)),
		[data]
	);

	return (
		<FilteringListWrapper subject="Tags">
			<Styled.List>{topTagsList}</Styled.List>
		</FilteringListWrapper>
	);
};
