import { forwardRef } from "react";
import { Link, LinkProps } from "react-router-dom";

export const MuiRouterLink = forwardRef<HTMLAnchorElement, Omit<LinkProps, "to"> & { href: LinkProps["to"] }>((props, ref) => {
  const { href, ...other } = props;
  return (
    <Link
      ref={ref}
      to={href}
      {...other}
    />
  );
});
