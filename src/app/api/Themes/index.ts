import { apiSlice } from "..";

export interface IGetThemeResponseData {
	id: string;
	name: string;
}

const themeApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getThemes: builder.query<IGetThemeResponseData[], void>({
			query: () => ({ url: "/themes" })
		})
	})
});

export const { useGetThemesQuery } = themeApi;
