import { fetchBaseQuery, BaseQueryFn, FetchArgs, FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { Mutex } from "async-mutex";

import { signIn, signOut, IAuthState } from "../../modules/Authorization/AuthSlice";

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
		const {
			auth: { refreshToken }
		} = api.getState() as RootState;
		if (refreshToken && !mutex.isLocked()) {
			const release = await mutex.acquire();
			try {
				const { data } = await baseQuery({ url: "/users/refresh-token", method: "POST", body: { refreshToken } }, api, extraOptions);
				if (data) {
					api.dispatch(signIn(data as IAuthState));
					result = await baseQuery(args, api, extraOptions);
				} else {
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
