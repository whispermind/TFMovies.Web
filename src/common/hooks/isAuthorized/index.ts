import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { selectAuth } from "../../../modules/Authorization/AuthSlice";
import { useAppSelector } from "../../../app/store";
import { Routes } from "../../enums";

export const useIsAuthorized = () => {
	const { accessToken } = useAppSelector(selectAuth);
	const navigate = useNavigate();

	useEffect(() => {
		if (!accessToken) navigate(Routes.signIn);
	}, [accessToken, navigate]);
};
