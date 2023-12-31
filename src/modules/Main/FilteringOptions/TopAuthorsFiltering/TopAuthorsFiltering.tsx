import { useMemo } from "react";
import { ListItem } from "@mui/material";

import { UserAvatar } from "../../../../common/components";
import { FilteringListWrapper } from "../FilteringListWrapper";
import { useGetTopAuthorsQuery } from "../../../../app/api/Users";
import * as Styled from "./styled";

const AUTHORS_FETCH_LIMIT = 3;

export const TopAuthorsFiltering = () => {
	const { data } = useGetTopAuthorsQuery(`?limit=${AUTHORS_FETCH_LIMIT}`);

	const listItems = useMemo(
		() =>
			data?.map(({ nickname, id }) => (
				<ListItem
					disablePadding
					key={id}
				>
					<UserAvatar
						size={72}
						nickname={nickname}
						nicknameStyle="Section"
						id={id}
					/>
				</ListItem>
			)),
		[data]
	);

	return (
		<FilteringListWrapper subject="Authors">
			<Styled.List>{listItems}</Styled.List>
		</FilteringListWrapper>
	);
};
