import { useSearchParams, useLocation, useNavigate } from "react-router-dom";
import { ChangeEvent, FocusEvent, useCallback } from "react";

import { FormTextFieldIconed } from "../../../../common/components";
import { SearchIcon } from "../../../../common/components/Icons";
import { Routes } from "../../../../common/enums";

let debouncer = false;
const debounceTime = 500;

export const HeaderSearchInput = () => {
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const [params, setSearchParams] = useSearchParams();

	const onChange = useCallback(
		({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
			if (debouncer) return;
			debouncer = true;

			if (pathname !== Routes.search) {
				navigate({ pathname: Routes.search, search: `subject=articles&query=${value}` });
			} else {
				params.set("query", value);
				setSearchParams(params, { replace: true });
			}
			setTimeout(() => {
				debouncer = false;
			}, debounceTime);
		},
		[navigate, pathname, setSearchParams, params]
	);

	const onBlur = useCallback(
		(e: FocusEvent<HTMLInputElement>) => {
			debouncer = false;
			onChange(e);
		},
		[onChange]
	);

	return (
		<FormTextFieldIconed
			type="search"
			onChange={onChange}
			onBlur={onBlur}
			position="end"
			placeholder="Search something..."
			icon={SearchIcon}
			sx={{ maxWidth: "420px" }}
			fullWidth
		/>
	);
};
