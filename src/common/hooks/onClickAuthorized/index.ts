import { useNavigate } from "react-router-dom";

import { selectAuth } from "../../../modules/Authorization/AuthSlice";
import { useAppSelector } from "../../../app/store";

export const useOnClickAuthorized = (foo: (...args: any[]) => void, location: string) => {
	const navigate = useNavigate();
	const { accessToken } = useAppSelector(selectAuth);

	const decorator = (...args: any[]) => {
		if (!accessToken) {
			navigate(location);
			return;
		}
		foo(...args);
	};

	return decorator;
};
