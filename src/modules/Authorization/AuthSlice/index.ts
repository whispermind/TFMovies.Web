import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../../app/store/index";

export interface IAuthState {
  acessToken: string | null;
  refreshToken: string | null;
  currentUser: unknown | null;
}

const initialState: IAuthState = {
  acessToken: null,
  refreshToken: null,
  currentUser: null
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn: (_, { payload }: PayloadAction<IAuthState>) => {
      return { ...payload };
    },
    signOut: (state) => {
      state.acessToken = null;
      state.refreshToken = null;
      state.currentUser = null;
    }
  }
});

export const { signIn, signOut } = authSlice.actions;

export const authSelector = ({ auth: { refreshToken, acessToken } }: RootState) => ({ refreshToken, acessToken });
export const currentUserSelector = ({ auth: { currentUser } }: RootState) => currentUser;
