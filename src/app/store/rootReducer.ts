import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { apiSlice } from "../api";
import { authSlice } from "../../modules/Authorization/AuthSlice";
import { searchSlice } from "../../modules/Search/SearchSlice";

const authPersistConfig = {
	key: "auth",
	storage,
	whiteList: ["auth"]
};

export const rootReducer = combineReducers({
	search: searchSlice.reducer,
	auth: persistReducer(authPersistConfig, authSlice.reducer),
	[apiSlice.reducerPath]: apiSlice.reducer
});
