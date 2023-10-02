import { useState } from "react";
import { Typography } from "@mui/material";

import { useUserAccess } from "../../../../common/hooks";
import { UserRoles } from "../../../../common/enums";
import { useGetUsersQuery } from "../../api";
import { UsersListFiltering, UsersListTable } from "..";
import * as Styled from "./styled";

export const UserListPage = () => {
	const [{ searchQuery, roleSearchQuery }, setSerchParams] = useState({ searchQuery: "", roleSearchQuery: "" });
	const [{ page, limit }, setRequestParams] = useState({ page: 1, limit: 10 });

	const queryString = `?page=${page}&limit=${limit}&users=${searchQuery}&role=${roleSearchQuery}`;
	const { data } = useGetUsersQuery(queryString);

	useUserAccess(UserRoles.admin, "/");

	return (
		<Styled.Wrapper>
			<Typography variant="HHeader">Users List</Typography>
			<UsersListFiltering onSearchCb={setSerchParams} />
			<UsersListTable />
		</Styled.Wrapper>
	);
};
