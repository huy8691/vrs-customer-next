/**
 * @Copyright 2020, Exnodes. All Rights Reserved.
 * @date 2022/02/08 21:48
 */
import { AxiosResponse } from "axios";
import Cookies from "js-cookie";
import { call, delay, put, takeLatest } from "redux-saga/effects";
import {login} from "./loginAPI";
import { LoginResponseType } from "./loginModels";
import { loginActions } from "./loginSlice";
import {loadingActions} from 'src/store/loading/loadingSlice';
import {notificationActions} from 'src/store/notification/notificationSlice';


function* handleLogin({ payload }: ReturnType<typeof loginActions.doLogin>) {
  try {
    yield put(loadingActions.doLoading());
    const { data }: AxiosResponse<LoginResponseType> = yield call(
      login,
      payload
    );
    yield put(loginActions.doLoginSuccess(data));
    yield put(loadingActions.doLoadingSuccess());
    yield put(notificationActions.doNotification({
      message:"Đăng nhập thành công",
    }));
  } catch (error:any) {
    yield put(loginActions.doLoginFailure());
    yield put(loadingActions.doLoadingFailure());
    yield put(notificationActions.doNotification({
      message: error.response.data.message,
      type:"error",
    }));
  }
}

function* handleLogout() {
  Cookies.remove("token");
  yield put(notificationActions.doNotification({
    message:"Đăng xuất thành công"
  }));
  // window.location.href = "/";
}

function* loginSaga() {
  yield takeLatest(loginActions.doLogin.type, handleLogin);
  yield takeLatest(loginActions.doLogout.type, handleLogout);
}

export default loginSaga;
