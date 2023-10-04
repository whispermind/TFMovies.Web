import { useSearchParams, useLocation, useNavigate } from "react-router-dom";
import { ChangeEvent, FocusEvent, useCallback } from "react";

import { FormTextFieldIconed } from "../../../../common/components";
import { SearchIcon } from "../../../../common/components/Icons";
import { Routes } from "../../../../common/enums";
import { useIsAuthorized } from "../../../../common/hooks";

const updateTime = 1000;
let userLastInputTime = 0;

export const HeaderSearchInput = () => {
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const [params, setSearchParams] = useSearchParams();

	const authorized = useIsAuthorized(false);

	const onChange = useCallback(
		({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
			if (!authorized) {
				navigate(Routes.signIn);
				return;
			}

			userLastInputTime = Date.now();

			if (pathname !== Routes.search && value) {
				navigate({ pathname: Routes.search, search: `subject=articles&query=${value}` });
			} else {
				setTimeout(() => {
					if (Date.now() - userLastInputTime >= 1000) {
						const subject = new URLSearchParams(window.location.search).get("subject");
						params.set("query", value);
						params.set("subject", subject || "articles");
						setSearchParams(params, { replace: true });
					}
				}, updateTime);
			}
		},
		[navigate, pathname, setSearchParams, params, authorized]
	);

	const onBlur = useCallback(
		(e: FocusEvent<HTMLInputElement>) => {
			if (e.target.value) {
				onChange(e);
			}
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
