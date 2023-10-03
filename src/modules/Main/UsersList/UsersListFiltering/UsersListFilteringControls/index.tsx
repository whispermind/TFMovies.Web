import { useState, useCallback, ChangeEvent } from "react";
import { SelectChangeEvent } from "@mui/material";

import { PrimaryButton, FormTextFieldIconed, Select } from "../../../../../common/components";
import { UserIcon } from "../../../../../common/components/Icons";

import { useGetUserRolesQuery } from "../../../api";
import * as Styled from "./styled";

export interface IUsersListFilteringControlsProps {
	onSearchCb: (queryObj: { usersSearchQuery: string; roleSearchQuery: string }) => void;
}

export const UsersListFilteringControls = ({ onSearchCb }: IUsersListFilteringControlsProps) => {
	const { data } = useGetUserRolesQuery();
	const [usersSearchQuery, setSearchQuery] = useState("");
	const [roleSearchQuery, setRoleSearchQuery] = useState("");

	const onRoleChange = useCallback(({ target: { value } }: SelectChangeEvent<unknown>) => setRoleSearchQuery(value as string), [setRoleSearchQuery]);
	const onSearchQueryChange = useCallback(({ target: { value } }: ChangeEvent<HTMLInputElement>) => setSearchQuery(value), [setSearchQuery]);
	const onSearch = useCallback(() => onSearchCb({ usersSearchQuery, roleSearchQuery }), [onSearchCb, roleSearchQuery, usersSearchQuery]);

	return (
		<Styled.Wrapper>
			<FormTextFieldIconed
				type="text"
				placeholder="Enter the nickname or email..."
				icon={UserIcon}
				position="start"
				sx={{ maxWidth: "420px", width: "50%" }}
				onChange={onSearchQueryChange}
				value={usersSearchQuery}
			/>
			<Select
				data={data || []}
				placeholder="Role"
				bordered
				width="20%"
				maxWidth="340px"
				onChange={onRoleChange}
			/>
			<PrimaryButton
				variant="customOutlined"
				sx={{ ml: "auto", maxWidth: "240px", width: "20%" }}
				onClick={onSearch}
			>
				Search
			</PrimaryButton>
		</Styled.Wrapper>
	);
};
