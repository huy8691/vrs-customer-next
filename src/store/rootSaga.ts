import { all } from "redux-saga/effects";
import loginSaga from "../layout/header/parts/login/loginSaga";
import registerSaga from "../layout/header/parts/register/registerSaga";
import loadingSaga from "./loading/loadingSaga";
function* rootSaga() {
  try {
    yield all([loginSaga(), registerSaga(), loadingSaga()]);
  } catch (err) {
    console.trace(err);
  }
}
export default rootSaga;
