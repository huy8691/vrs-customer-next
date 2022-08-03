/**
 * @Copyright 2020, Exnodes. All Rights Reserved.
 * @date 2022/02/08 21:48
 */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setAuthToken } from "src/services/jwt-axios";
import { LoginResponseType, LoginType, UserInfoType } from "./loginModels";

interface initialLoginStateType {
  isLoading: boolean;
  data?: {
    access_token: string;
    info: UserInfoType;
  };
}

const initialState: initialLoginStateType = {
  isLoading: false,
  data: {
    access_token: "",
    info: {
      firstName: "",
      lastName: "",
      address: "",
      phoneNumber: "",
      dob: undefined,
      gender: undefined,
      email: "",
      id: 0,
    },
  },
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    doLogin(state: initialLoginStateType, _action: PayloadAction<LoginType>) {
      state.isLoading = true;
    },
    doLoginSuccess(
      state: initialLoginStateType,
      action: PayloadAction<LoginResponseType>
    ) {
      const { data }: LoginResponseType = action.payload;
      state.isLoading = false;
      if (state.data) {
        state.data.access_token = data.access_token;
        state.data.info = data.userInfo;
      }
      setAuthToken(data.access_token);
    },
    doLoginFailure(state: initialLoginStateType) {
      state.isLoading = false;
    },
    doLogout(state: initialLoginStateType) {
      state.data = undefined;
    },
  },
});

export const loginActions = loginSlice.actions;
export default loginSlice.reducer;
