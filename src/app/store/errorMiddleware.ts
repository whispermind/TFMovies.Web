import { Middleware } from "redux";
import { isRejectedWithValue, PayloadAction } from "@reduxjs/toolkit";
import { enqueueSnackbar } from "notistack";

interface IWithError {
	errorMessage: string;
}

export const errorMiddleware: Middleware = () => (next) => (action: PayloadAction<IResponse<IWithError>>) => {
	if (isRejectedWithValue(action)) {
		const errorMessage = action.payload.data?.errorMessage || action.payload.error;
		enqueueSnackbar(errorMessage, { variant: "error" });
	}
	return next(action);
};
