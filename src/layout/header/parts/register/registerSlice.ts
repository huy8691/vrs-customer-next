/**
 * @Copyright 2020, Exnodes. All Rights Reserved.
 * @date 2022/02/08 21:48
 */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RegisterType, RegisterResponseType } from "./registerModels";

interface initialRegisterStateType {
  isLoading: boolean;
  data: any;
}

const initialState: initialRegisterStateType = {
  isLoading: false,
  data: null,
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    doRegister(
      state: initialRegisterStateType, _action: PayloadAction<RegisterType>) {
      state.isLoading = true;
    },
    doRegisterSuccess(state: initialRegisterStateType, action: PayloadAction<RegisterResponseType>) {
      const { data }: RegisterResponseType = action.payload;
      state.isLoading = true;
      state.data = data;
    },
    doRegisterFailure(state: initialRegisterStateType) {
      state.isLoading = false;
    },
  },
});

export const registerActions = registerSlice.actions;
export default registerSlice.reducer;
