import { useState } from "react";
import { Typography } from "@mui/material";

import { useUserAccess } from "../../../../common/hooks";
import { UserRoles } from "../../../../common/enums";
import { UsersListFiltering, UsersListTable } from "..";
import { PageWrapper, MainNav } from "../../../../common/components";
import * as Styled from "./styled";

interface IUserListPage {
	requestsTable?: boolean;
}

export const UserListPage = ({ requestsTable }: IUserListPage) => {
	const [searchParams, setSerchParams] = useState({ usersSearchQuery: "", roleSearchQuery: "" });

	const pageCaption = requestsTable ? "Requests List" : "Users List";

	useUserAccess(UserRoles.admin, "/");

	return (
		<PageWrapper justifyContent="flex-start">
			<MainNav />
			<Styled.Wrapper>
				<Typography variant="HHeader">{pageCaption}</Typography>
				<UsersListFiltering
					onSearchCb={setSerchParams}
					requestsTable={requestsTable}
				/>
				<UsersListTable
					{...searchParams}
					requestsTable={requestsTable}
				/>
			</Styled.Wrapper>
		</PageWrapper>
	);
};
