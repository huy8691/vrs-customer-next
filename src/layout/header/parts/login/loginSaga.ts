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

function* handleLogin({ payload }: ReturnType<typeof loginActions.doLogin>) {
  try {
    const { data }: AxiosResponse<LoginResponseType> = yield call(
      login,
      payload
    );
    yield put(loginActions.doLoginSuccess(data));
  } catch (error) {
    yield put(loginActions.doLoginFailure());
  }
}

function* handleLogout() {
  Cookies.remove("token");
  window.location.href = "/";
}

function* loginSaga() {
  yield takeLatest(loginActions.doLogin.type, handleLogin);
  yield takeLatest(loginActions.doLogout.type, handleLogout);
}

export default loginSaga;
