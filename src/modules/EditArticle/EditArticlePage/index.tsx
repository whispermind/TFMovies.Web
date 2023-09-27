import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { IArticleResponseData } from "../../Article/api";

export const EditArticlePage = () => {
	const { state } = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		if (!(state as IArticleResponseData)?.id) {
			navigate("/");
		}
	}, [state, navigate]);

	return <div>TEST</div>;
};
