import { Typography } from "@mui/material";

import { UsersListFilteringControls, IUsersListFilteringControlsProps } from "./UsersListFilteringControls";
import * as Styled from "./styled";

export const UsersListFiltering = ({ onSearchCb }: IUsersListFilteringControlsProps) => {
	return (
		<Styled.Wrapper>
			<Typography variant="Section">Search users</Typography>
			<UsersListFilteringControls onSearchCb={onSearchCb} />
		</Styled.Wrapper>
	);
};
