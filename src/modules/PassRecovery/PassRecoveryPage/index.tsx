import { useCallback } from "react";
import { Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

import { PassRecoveryForm, IPassRecoveryForm } from "..";
import { LogAuthWrapper } from "../../../common/components";
import { useResetPassword } from "../../../common/hooks";
import { PassRecoveryTokenValidator } from "../PassRecoveryTokenValidator";

export const PassRecoveryPage = () => {
	const [resetPassReq, { isLoading }] = useResetPassword();
	const navigate = useNavigate();
	const { token } = useParams();

	const onSubmit = useCallback(
		async (credentials: IPassRecoveryForm) => {
			if (token) {
				try {
					await resetPassReq({ ...credentials, token }).unwrap();
					navigate("/signin");
				} catch (e) {
					console.log(e);
					navigate("/");
				}
			}
		},
		[resetPassReq, navigate, token]
	);

	return (
		<PassRecoveryTokenValidator token={token || ""}>
			<LogAuthWrapper
				maxWidth="50%"
				flexGrow="1"
			>
				<Typography
					display="block"
					variant="Sector"
					mb={5}
				>
					Password Recovery
				</Typography>
				<PassRecoveryForm
					onSubmit={onSubmit}
					isLoading={isLoading}
				/>
			</LogAuthWrapper>
		</PassRecoveryTokenValidator>
	);
};
