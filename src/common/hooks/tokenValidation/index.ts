import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useValidateTokenMutation, TTokenValidationEndpoints } from "../../../modules/Registration/api";

export const useTokenValidation = (token: string, endpoint: TTokenValidationEndpoints) => {
	const [validateTokenReq, { isLoading, isSuccess, isError }] = useValidateTokenMutation();
	const navigate = useNavigate();

	useEffect(() => {
		const fetcher = async () => {
			try {
				await validateTokenReq({ token, endpoint }).unwrap();
			} catch {
				navigate("/");
			}
		};
		fetcher();
	}, [navigate, token, validateTokenReq, endpoint]);

	return { isError, isLoading, isSuccess };
};
