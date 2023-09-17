import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../../app/store/index";

const initialState = "";

export const searchSlice = createSlice({
	name: "search",
	initialState,
	reducers: {
		setSearchQuery: (_, { payload }: PayloadAction<string>) => payload,
		resetSearchQuery: () => initialState
	}
});

export const { setSearchQuery, resetSearchQuery } = searchSlice.actions;

export const selectSearchQuery = ({ search }: RootState) => search;
