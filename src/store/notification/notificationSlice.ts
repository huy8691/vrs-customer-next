import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface initialStateType {
  open: boolean;
  message: string;
  duration: number;
  type: string;
}

const initialState: initialStateType = {
  open: true,
  message: "",
  duration: 3,
  type: "success",
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    doNotification: (
      state: initialStateType,
      action: PayloadAction<initialStateType>
    ) => {
      state.open = !state.open;
      state.message = action.payload.message;
      state.duration = action.payload.duration ? action.payload.duration : 3;
      state.type = action.payload.type ? action.payload.type : "success";
    },
  },
});

export const notificationActions = notificationSlice.actions;
export default notificationSlice.reducer;
