import { AxiosResponse } from "axios";
import {callAPIWithToken} from "src/services/jwt-axios";
import { ProductListDataResponseType } from "./modelProducts";

const getProducts = (
): Promise<AxiosResponse<ProductListDataResponseType>> => {
  return callAPIWithToken({
    url: `/customers/me`,
    method: 'get',
    params: {
    },
  })
}



export  { getProducts};


