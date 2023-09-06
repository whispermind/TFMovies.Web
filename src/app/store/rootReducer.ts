import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { apiSlice } from "../api";
import { authSlice } from "../../modules/Authorization/AuthSlice";

const authPersistConfig = {
	key: "auth",
	storage,
	whiteList: ["auth"]
};

export const rootReducer = combineReducers({
	auth: persistReducer(authPersistConfig, authSlice.reducer),
	[apiSlice.reducerPath]: apiSlice.reducer
});
