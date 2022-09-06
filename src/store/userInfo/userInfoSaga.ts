/**
 * @Copyright 2020, Exnodes. All Rights Reserved.
 * @date 2022/02/08 21:48
 */
import { AxiosResponse } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { userInfoAPI } from "./userInfoAPI";
import { UserInfoResponseType } from "./userInfoModels";
import { userInfoActions } from "./userInfoSlice";
import { loadingActions } from "src/store/loading/loadingSlice";
import { notificationActions } from "src/store/notification/notificationSlice";

function* handleInfoSaga({}: ReturnType<typeof userInfoActions.doUserInfo>) {
  try {
    yield put(loadingActions.doLoading());
    const { data }: AxiosResponse<UserInfoResponseType> = yield call(
      userInfoAPI
    );
    yield put(userInfoActions.doUserInfoSuccess(data));
    yield put(loadingActions.doLoadingSuccess());
  } catch (error: any) {
    yield put(userInfoActions.doUserInfoFailure());
    yield put(loadingActions.doLoadingFailure());
    yield put(
      notificationActions.doNotification({
        message: error.response.data.message,
        type: "error",
      })
    );
  }
}


function* userInfoSaga() {
  yield takeLatest(userInfoActions.doUserInfo.type, handleInfoSaga);
}

export default userInfoSaga;
