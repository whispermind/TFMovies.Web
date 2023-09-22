import { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { selectAuth } from "../../../modules/Authorization/AuthSlice";
import { useAppSelector } from "../../hooks";
import { Roles } from "../../enums";

interface IRoleValidatorProps extends PropsWithChildren {
	role: Roles;
	location: string;
}

export const RoleValidator = ({ children, role, location }: IRoleValidatorProps) => {
	const { currentUser } = useAppSelector(selectAuth);
	const navigate = useNavigate();

	const userRole = currentUser?.role;

	useEffect(() => {
		if (!(userRole === role)) navigate(location);
	}, [role, navigate, location, userRole]);

	return children;
};
