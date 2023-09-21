import { useCallback } from "react";
import { Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { enqueueSnackbar } from "notistack";

import { PassRecoveryForm, IPassRecoveryForm } from "..";
import { SubPageWrapper } from "../../../common/components";
import { useResetPassword } from "../../../common/hooks";
import { TokenValidator } from "../../../common/components/TokenValidator";
import { snackBarMessages } from "../../../common/utils";

export const PassRecoveryPage = () => {
	const [resetPassReq, { isLoading }] = useResetPassword();
	const navigate = useNavigate();
	const { token } = useParams();

	const onSubmit = useCallback(
		async (credentials: IPassRecoveryForm) => {
			if (token) {
				try {
					await resetPassReq({ ...credentials, token }).unwrap();
					enqueueSnackbar(snackBarMessages.passRecovery, { variant: "success" });
					navigate("/signin");
				} catch (e) {
					navigate("/");
				}
			}
		},
		[resetPassReq, navigate, token]
	);

	return (
		<TokenValidator
			token={token || ""}
			endpoint="validate-reset-token"
		>
			<SubPageWrapper
				maxWidth="1080px"
				flexGrow="1"
			>
				<Typography
					display="block"
					variant="Section"
					mb={5}
				>
					Password Recovery
				</Typography>
				<PassRecoveryForm
					onSubmit={onSubmit}
					isLoading={isLoading}
				/>
			</SubPageWrapper>
		</TokenValidator>
	);
};
