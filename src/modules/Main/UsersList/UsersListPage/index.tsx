import { useState } from "react";
import { Typography } from "@mui/material";

import { useUserAccess } from "../../../../common/hooks";
import { UserRoles } from "../../../../common/enums";
import { UsersListFiltering, UsersListTable } from "..";
import { PageWrapper, MainNav } from "../../../../common/components";
import * as Styled from "./styled";

export const UserListPage = () => {
	const [searchParams, setSerchParams] = useState({ usersSearchQuery: "", roleSearchQuery: "" });

	useUserAccess(UserRoles.admin, "/");

	return (
		<PageWrapper justifyContent="flex-start">
			<MainNav />
			<Styled.Wrapper>
				<Typography variant="HHeader">Users List</Typography>
				<UsersListFiltering onSearchCb={setSerchParams} />
				<UsersListTable {...searchParams} />
			</Styled.Wrapper>
		</PageWrapper>
	);
};
