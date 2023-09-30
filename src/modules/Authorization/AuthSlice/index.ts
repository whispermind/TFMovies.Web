import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { UserRoles } from "../../../common/enums";

import type { RootState } from "../../../app/store/index";

export interface IAuthState {
	accessToken: string | null;
	refreshToken: string | null;
	currentUser: {
		id: string;
		nickname: string;
		role: {
			name: UserRoles;
			id: string;
		};
	} | null;
}

const initialState: IAuthState = {
	accessToken: null,
	refreshToken: null,
	currentUser: null
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		signIn: (_, { payload }: PayloadAction<IAuthState>) => payload,
		signOut: () => initialState
	}
});

export const { signIn, signOut } = authSlice.actions;

export const selectAuth = ({ auth }: RootState) => auth;
