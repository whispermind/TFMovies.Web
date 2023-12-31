import { Middleware } from "redux";
import { isRejectedWithValue, PayloadAction } from "@reduxjs/toolkit";
import { enqueueSnackbar } from "notistack";

interface IWithError {
	errorMessage: string;
}

export const errorMiddleware: Middleware = () => (next) => (action: PayloadAction<IResponse<IWithError>>) => {
	if (action?.payload?.status === 401) {
		return next(action);
	}
	if (isRejectedWithValue(action)) {
		const errorMessage = action.payload.data?.errorMessage || action.payload.error || "Something went wrong";
		enqueueSnackbar(errorMessage, { variant: "error" });
	}
	return next(action);
};
