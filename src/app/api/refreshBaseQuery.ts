import { fetchBaseQuery, BaseQueryFn, FetchArgs, FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { Mutex } from "async-mutex";
import { enqueueSnackbar } from "notistack";

import { signIn, signOut } from "../../modules/Authorization/AuthSlice";
import { snackBarMessages } from "../../common/utils";

import type { RootState } from "../store";

const mutex = new Mutex();

const baseQuery = fetchBaseQuery({
	baseUrl: process.env.REACT_APP_API_URL,
	prepareHeaders: (headers, { getState }) => {
		const { accessToken } = (getState() as RootState).auth;

		if (accessToken) {
			headers.set("authorization", `Bearer ${accessToken}`);
		}

		return headers;
	}
});

export const refreshBaseQuery: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
	await mutex.waitForUnlock();
	let result = await baseQuery(args, api, extraOptions);
	if (result.error && result.error.status === 401) {
		const { auth } = api.getState() as RootState;
		if (!mutex.isLocked()) {
			if (!auth.refreshToken) return result;
			const release = await mutex.acquire();
			try {
				const response = await baseQuery({ url: "/users/refresh-token", method: "POST", body: { refreshToken: auth.refreshToken } }, api, extraOptions);
				if (response.data) {
					api.dispatch(signIn({ ...auth, ...response.data }));
					result = await baseQuery(args, api, extraOptions);
				} else {
					enqueueSnackbar(snackBarMessages.sessionExpired);
					api.dispatch(signOut());
				}
			} finally {
				release();
			}
		} else {
			await mutex.waitForUnlock();
			result = await baseQuery(args, api, extraOptions);
		}
	}
	return result;
};
