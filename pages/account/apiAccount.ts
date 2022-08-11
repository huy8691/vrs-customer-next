import { AxiosResponse } from "axios";
import {callAPIWithToken} from "src/services/jwt-axios";
import { AccountDataResponseType } from "./modelAccount";

const getInfoAccount = (
): Promise<AxiosResponse<AccountDataResponseType>> => {
  return callAPIWithToken({
    url: `/customers/me`,
    method: 'get',
    params: {
    },
  })
}
export  { getInfoAccount};


