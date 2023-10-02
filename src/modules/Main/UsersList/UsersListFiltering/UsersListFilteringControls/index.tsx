import { useState, useCallback, ChangeEvent } from "react";
import { SelectChangeEvent } from "@mui/material";

import { PrimaryButton, FormTextFieldIconed, Select } from "../../../../../common/components";
import { UserIcon } from "../../../../../common/components/Icons";

import { useGetUserRolesQuery } from "../../../api";
import * as Styled from "./styled";

export interface IUsersListFilteringControlsProps {
	onSearchCb: (queryObj: { searchQuery: string; roleSearchQuery: string }) => void;
}

export const UsersListFilteringControls = ({ onSearchCb }: IUsersListFilteringControlsProps) => {
	const { data } = useGetUserRolesQuery();
	const [searchQuery, setSearchQuery] = useState("");
	const [roleSearchQuery, setRoleSearchQuery] = useState("");

	const onRoleChange = useCallback(({ target: { value } }: SelectChangeEvent<unknown>) => setRoleSearchQuery(value as string), [setRoleSearchQuery]);
	const onSearchQueryChange = useCallback(({ target: { value } }: ChangeEvent<HTMLInputElement>) => setSearchQuery(value), [setSearchQuery]);
	const onSearch = useCallback(() => onSearchCb({ searchQuery, roleSearchQuery }), [onSearchCb, roleSearchQuery, searchQuery]);

	return (
		<Styled.Wrapper>
			<FormTextFieldIconed
				type="text"
				placeholder="Enter the nickname or email..."
				icon={UserIcon}
				position="start"
				sx={{ width: "420px" }}
				onChange={onSearchQueryChange}
				value={searchQuery}
			/>
			<Select
				data={data || []}
				placeholder="Role"
				bordered
				width={340}
				onChange={onRoleChange}
			/>
			<PrimaryButton
				variant="customOutlined"
				sx={{ ml: "auto", width: "240px" }}
				onClick={onSearch}
			>
				Search
			</PrimaryButton>
		</Styled.Wrapper>
	);
};
