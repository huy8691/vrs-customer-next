import { AxiosResponse } from "axios";
import {jwtAxios} from "../../services/jwt-axios";
import { ProductListType } from "./model";

const getProductList = (
): Promise<AxiosResponse<ProductListType>> => {
  return jwtAxios({
    url: `/products/customer/top/products`,
    method: 'get',
    params: {
    },
  })
}

export  { getProductList };


