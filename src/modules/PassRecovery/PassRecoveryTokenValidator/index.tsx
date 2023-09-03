/* eslint-disable react/jsx-no-useless-fragment */
import { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useValidateResetToken } from "../../../common/hooks";

export const PassRecoveryTokenValidator = ({ children, token }: PropsWithChildren<Tokened>) => {
	const [validateResetTokenReq, { isSuccess }] = useValidateResetToken();
	const navigate = useNavigate();

	useEffect(() => {
		const fetcher = async () => {
			try {
				await validateResetTokenReq(token).unwrap();
			} catch (e) {
				navigate("/");
			}
		};
		fetcher();
	}, [navigate, token, validateResetTokenReq]);

	return (isSuccess && <>{children}</>) || null;
};
