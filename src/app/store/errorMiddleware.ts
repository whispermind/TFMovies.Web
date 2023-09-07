import { Middleware } from "redux";
import { isRejectedWithValue, PayloadAction } from "@reduxjs/toolkit";
import { enqueueSnackbar } from "notistack";

interface IWithError {
	errorMessage: string;
}

export const errorMiddleware: Middleware = () => (next) => (action: PayloadAction<IResponse<IWithError>>) => {
	if (isRejectedWithValue(action) && action.payload.data.errorMessage) {
		enqueueSnackbar(action.payload.data.errorMessage, { variant: "error" });
	}
	return next(action);
};
