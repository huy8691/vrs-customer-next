/**
 * @Copyright 2020, Exnodes. All Rights Reserved.
 * @date 2022/02/08 21:48
 */

import loginReducer from "../layout/header/parts/login/loginSlice";
import registerReducer from "../layout/header/parts/register/registerSlice";
import loadingReducer from "../store/loading/loadingSlice";
import notificationReducer from "../store/notification/notificationSlice";
import userInfoSaga from "../store/userInfo/userInfoSlice";
export const rootReducer = {
  login: loginReducer,
  register:registerReducer,
  loading: loadingReducer,
  notification: notificationReducer,
  userInfo: userInfoSaga,
};

export default rootReducer;
