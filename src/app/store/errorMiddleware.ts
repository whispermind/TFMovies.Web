import { Middleware } from "redux";
import { isRejectedWithValue, PayloadAction } from "@reduxjs/toolkit";
import { enqueueSnackbar } from "notistack";

export const errorMiddleware: Middleware = () => (next) => (action: PayloadAction<IApiResponse>) => {
	if (isRejectedWithValue(action) && action.payload.data?.errorMessage) {
		enqueueSnackbar(action.payload.data.errorMessage, { variant: "error" });
	}
	return next(action);
};
