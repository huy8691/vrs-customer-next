import { all } from "redux-saga/effects";
import loginSaga from "../../pages/_layout/header/parts/login/loginSaga";
function* rootSaga() {
  try {
    yield all([loginSaga()]);
  } catch (err) {
    console.trace(err);
  }
}
export default rootSaga;
