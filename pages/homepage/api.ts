import { AxiosResponse } from "axios";
import {jwtAxios} from "../../services/jwt-axios";
import { ProductListDataResponseType } from "./model";

const getProductList = (
): Promise<AxiosResponse<ProductListDataResponseType>> => {
  return jwtAxios({
    url: `/products/customer/top/products`,
    method: 'get',
    params: {
    },
  })
}


export  { getProductList};


