import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { selectAuth } from "../../../modules/Authorization/AuthSlice";
import { useAppSelector } from "../../../app/store";
import { UserRoles } from "../../enums";

export const useUserAccess = (requiredAccess: UserRoles, location?: string) => {
	const { currentUser } = useAppSelector(selectAuth);
	const navigate = useNavigate();

	const userRole = currentUser?.role.name;
	const access = userRole === requiredAccess || userRole === UserRoles.admin;

	useEffect(() => {
		if (!access) {
			if (location) navigate(location, { replace: true });
		}
	}, [navigate, location, userRole, access]);

	return access;
};
