import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Stack } from "@mui/material";
import { enqueueSnackbar } from "notistack";

import { ForgotPassForm, IForgotPassForm } from "..";
import { SubPageWrapper } from "../../../../common/components";
import { useForgotPasswordMutation } from "../api";
import { snackBarMessages } from "../../../../common/utils";

export const ForgotPassPage = () => {
	const [forgotPasswordReq, { isLoading }] = useForgotPasswordMutation();
	const navigate = useNavigate();

	const heading = "Forgot your Password?";
	const description = "You need to enter your email to recover your password. We will send an instruction with password recovery to your e-mail.";

	const onSubmit = useCallback(
		async ({ email }: IForgotPassForm) => {
			try {
				await forgotPasswordReq(email).unwrap();
				enqueueSnackbar(snackBarMessages.instructions, { variant: "success" });
				navigate("/");
			} catch (e) {
				// handled by middleware
			}
		},
		[forgotPasswordReq, navigate]
	);

	return (
		<SubPageWrapper maxWidth="800px">
			<Stack
				rowGap={1.5}
				mb={7.5}
			>
				<Typography variant="Section">{heading}</Typography>
				<Typography variant="HBody">{description}</Typography>
			</Stack>
			<ForgotPassForm
				onSubmit={onSubmit}
				isLoading={isLoading}
			/>
		</SubPageWrapper>
	);
};
