import { createApi } from "@reduxjs/toolkit/query/react";

import { refreshBaseQuery } from "./refreshBaseQuery";

export const apiSlice = createApi({
	baseQuery: refreshBaseQuery,
	tagTypes: ["Article", "Articles", "Users"],
	endpoints: () => ({})
});
