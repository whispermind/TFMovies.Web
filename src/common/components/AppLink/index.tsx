import { PropsWithChildren } from "react";

import { Link, LinkProps } from "@mui/material";

interface AppLinkProps extends LinkProps {
	authorized?: boolean;
}

export const AppLink = ({ children, ...props }: PropsWithChildren<AppLinkProps>) => {
	return <Link {...props}>{children}</Link>;
};
