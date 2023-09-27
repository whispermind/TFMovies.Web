import { useNavigate } from "react-router-dom";
import { ChangeEvent, useCallback } from "react";

import { useAppDispatch, useAppSelector } from "../../../../common/hooks";
import { selectSearchQuery, setSearchQuery } from "../../../Search/SearchSlice";
import { FormTextFieldIconed } from "../../../../common/components";
import { SearchIcon } from "../../../../common/components/Icons";
import { Routes } from "../../../../common/enums";

export const HeaderSearchInput = () => {
	const dispatch = useAppDispatch();
	const searchQuery = useAppSelector(selectSearchQuery);
	const navigate = useNavigate();

	const onBlur = useCallback(() => {
		if (searchQuery) {
			navigate(`${Routes.search}?query=${searchQuery}`);
		} else {
			navigate("/");
		}
	}, [navigate, searchQuery]);

	const onChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			dispatch(setSearchQuery(e.target.value));
		},
		[dispatch]
	);

	return (
		<FormTextFieldIconed
			type="search"
			value={searchQuery}
			onBlur={onBlur}
			onChange={onChange}
			position="end"
			placeholder="Search something..."
			icon={SearchIcon}
			sx={{ maxWidth: "420px" }}
			fullWidth
		/>
	);
};
