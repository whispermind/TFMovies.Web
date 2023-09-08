/* eslint-disable react/jsx-no-useless-fragment */
import { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useValidateToken } from "../../hooks";

type TValidationEndpoint = "verify-email" | "validate-reset-token";

interface ITokenValidatorProps {
	endpoint: TValidationEndpoint;
}

export const TokenValidator = ({ children, token, endpoint }: PropsWithChildren<Tokened & ITokenValidatorProps>) => {
	const [validateTokenReq, { isSuccess }] = useValidateToken();
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

	return (isSuccess && <>{children}</>) || null;
};
