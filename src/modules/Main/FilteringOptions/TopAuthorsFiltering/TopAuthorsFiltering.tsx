import { ListItem } from "@mui/material";

import { UserAvatar } from "../../../../common/components";
import { FilteringListWrapper } from "../FilteringListWrapper";
import { useGetTopAuthorsQuery } from "../../api";
import * as Styled from "./styled";

export const TopAuthorsFiltering = () => {
	const { data } = useGetTopAuthorsQuery();

	const listItems = data?.map(({ nickname, id }) => (
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
	));

	return (
		<FilteringListWrapper subject="Authors">
			<Styled.List>{listItems}</Styled.List>
		</FilteringListWrapper>
	);
};
