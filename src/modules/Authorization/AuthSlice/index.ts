import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../../app/store/index";

export interface IAuthState {
  token: string | null;
  refreshToken: string | null;
  currentUser: unknown | null;
}

const initialState: IAuthState = {
  token: null,
  refreshToken: null,
  currentUser: null
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn: (state, { payload: { token, refreshToken } }: PayloadAction<IAuthState>) => {
      state.token = token;
      state.refreshToken = refreshToken;
    },
    signOut: (state) => {
      state.token = null;
      state.refreshToken = null;
    }
  }
});

export const { signIn, signOut } = authSlice.actions;

export const authSelector = (state: RootState) => ({ token: state.auth.token, refreshToken: state.auth.refreshToken });
export const currentUserSelector = (state: RootState) => state.auth.currentUser;
