import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { selectAuth } from "../../../modules/Authorization/AuthSlice";
import { useAppSelector } from "../../../app/store";
import { Routes } from "../../enums";

export const useIsAuthorized = (redirect?: boolean) => {
	const { currentUser } = useAppSelector(selectAuth);
	const navigate = useNavigate();

	useEffect(() => {
		if (!currentUser && redirect) {
			navigate(Routes.signIn, { replace: true });
		}
	}, [currentUser, navigate, redirect]);

	return !!currentUser;
};
