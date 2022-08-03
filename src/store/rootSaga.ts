import { all } from "redux-saga/effects";
import loginSaga from "../layout/header/parts/login/loginSaga";
import loadingSaga from "./loading/loadingSaga";
function* rootSaga() {
  try {
    yield all([loginSaga(),loadingSaga()]);
  } catch (err) {
    console.trace(err);
  }
}
export default rootSaga;
