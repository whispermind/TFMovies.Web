import { useEffect, useCallback } from "react";
import { Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

import { PassRecoveryForm, IPassRecoveryForm } from "..";
import { LogAuthWrapper, Loader } from "../../../common/components";
import { useValidateResetToken, useResetPassword } from "../../../common/hooks";

export const PassRecoveryPage = () => {
  const [validateResetTokenReq] = useValidateResetToken();
  const [resetPassReq, { isLoading: isReseting }] = useResetPassword();
  const navigate = useNavigate();
  const { token } = useParams();

  useEffect(() => {
    const fetcher = async () => {
      if (token) {
        try {
          await validateResetTokenReq(token).unwrap();
        } catch (e) {
          navigate("/");
        }
      }
    };
    fetcher();
  }, [navigate, validateResetTokenReq, token]);

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
    <LogAuthWrapper
      maxWidth="50%"
      flexGrow="1"
    >
      {isReseting ? (
        <Loader />
      ) : (
        <>
          <Typography
            display="block"
            variant="Sector"
            mb={5}
          >
            Password Recovery
          </Typography>
          <PassRecoveryForm onSubmit={onSubmit} />
        </>
      )}
    </LogAuthWrapper>
  );
};
