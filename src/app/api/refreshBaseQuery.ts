import { fetchBaseQuery, BaseQueryFn, FetchArgs, FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { Mutex } from "async-mutex";

import { signIn, signOut, IAuthState } from "../../modules/Authorization/AuthSlice";

const mutex = new Mutex();
const baseQuery = fetchBaseQuery({ baseUrl: "/" });

export const refreshBaseQuery: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
        const refreshResult = await baseQuery("/refreshToken", api, extraOptions);
        if (refreshResult.data) {
          api.dispatch(signIn(refreshResult.data as IAuthState));
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
