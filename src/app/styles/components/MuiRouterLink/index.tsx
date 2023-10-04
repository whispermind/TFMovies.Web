import { forwardRef, useCallback, MouseEvent } from "react";
import { Link, LinkProps, useNavigate } from "react-router-dom";

import { useAppSelector } from "../../../../common/hooks";
import { selectAuth } from "../../../../modules/Authorization";
import { Routes } from "../../../../common/enums";

export const MuiRouterLink = forwardRef<HTMLAnchorElement, Omit<LinkProps, "to"> & { href: LinkProps["to"]; authorized?: boolean }>((props, ref) => {
	const { href, authorized, onClick, ...other } = props;

	const { currentUser } = useAppSelector(selectAuth);
	const navigate = useNavigate();

	const onClickWithAuth = useCallback(
		(e: MouseEvent<HTMLAnchorElement>) => {
			e.preventDefault();

			if (authorized && !currentUser) {
				navigate(Routes.signIn, { replace: true });
			}

			if ((authorized && currentUser) || !authorized) {
				if ((href as string)?.startsWith("http")) {
					window.open(href as string, "blank");
					return;
				}
				navigate(href);
			}

			if (onClick) onClick(e);
		},
		[authorized, currentUser, navigate, onClick, href]
	);

	return (
		<Link
			ref={ref}
			to={href}
			{...other}
			onClick={onClickWithAuth}
		/>
	);
});
