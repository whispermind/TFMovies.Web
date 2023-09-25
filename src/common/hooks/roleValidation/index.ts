import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { selectAuth } from "../../../modules/Authorization/AuthSlice";
import { useAppSelector } from "../../../app/store";
import { UserRoles } from "../../enums";

export const useRoleValidation = (role: UserRoles, location: string) => {
	const { currentUser } = useAppSelector(selectAuth);
	const navigate = useNavigate();

	const userRole = currentUser?.role;

	useEffect(() => {
		if (!(userRole === role)) navigate(location);
	}, [role, navigate, location, userRole]);
};
