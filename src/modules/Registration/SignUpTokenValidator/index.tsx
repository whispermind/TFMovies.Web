/* eslint-disable react/jsx-no-useless-fragment */
import { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useSignUpVerification } from "../../../common/hooks";

export const SignUpTokenValidator = ({ children, token }: PropsWithChildren<Tokened>) => {
	const [validateSignUpTokenReq, { isSuccess }] = useSignUpVerification();
	const navigate = useNavigate();

	useEffect(() => {
		const fetcher = async () => {
			try {
				await validateSignUpTokenReq(token).unwrap();
			} catch (e) {
				navigate("/");
			}
		};
		fetcher();
	}, [navigate, validateSignUpTokenReq, token]);

	return (isSuccess && <>{children}</>) || null;
};
