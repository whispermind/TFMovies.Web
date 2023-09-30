import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { selectAuth } from "../../../modules/Authorization/AuthSlice";
import { useAppSelector } from "../../../app/store";
import { UserRoles } from "../../enums";

export const useRoleValidation = (role: UserRoles, location?: string) => {
	const { currentUser } = useAppSelector(selectAuth);
	const navigate = useNavigate();

	const userRole = currentUser?.role.name;
	const match = userRole === role;

	useEffect(() => {
		if (!match) {
			if (location) navigate(location, { replace: true });
		}
	}, [role, navigate, location, userRole, match]);

	return match;
};
