import { useCallback } from "react";
import { Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { enqueueSnackbar } from "notistack";

import { PassRecoveryForm, IPassRecoveryForm } from "..";
import { SubPageWrapper } from "../../../common/components";
import { useResetPasswordMutation } from "../api";
import { snackBarMessages } from "../../../common/utils";
import { useTokenValidation } from "../../../common/hooks";

export const PassRecoveryPage = () => {
	const [resetPassReq, { isLoading: isReseting }] = useResetPasswordMutation();
	const navigate = useNavigate();
	const { token } = useParams();
	const { isLoading: isValidating } = useTokenValidation(token || "", "validate-reset-token");

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
				isLoading={isValidating || isReseting}
			/>
		</SubPageWrapper>
	);
};
