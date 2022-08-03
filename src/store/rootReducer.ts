/**
 * @Copyright 2020, Exnodes. All Rights Reserved.
 * @date 2022/02/08 21:48
 */

import loginReducer from "../layout/header/parts/login/loginSlice";
import loadingReducer from "../store/loading/loadingSlice";
import notificationReducer from "../store/notification/notificationSlice";
export const rootReducer = {
  login: loginReducer,
  loading: loadingReducer,
  notification: notificationReducer,
};

export default rootReducer;
