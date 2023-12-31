import { Typography } from "@mui/material";

import { UsersListFilteringControls, IUsersListFilteringControlsProps } from "./UsersListFilteringControls";
import * as Styled from "./styled";

export interface IUsersListFilteringProps extends IUsersListFilteringControlsProps {}

export const UsersListFiltering = ({ onSearchCb, requestsTable }: IUsersListFilteringProps) => {
	return (
		<Styled.Wrapper>
			<Typography variant="Section">Search users</Typography>
			<UsersListFilteringControls
				onSearchCb={onSearchCb}
				requestsTable={requestsTable}
			/>
		</Styled.Wrapper>
	);
};
