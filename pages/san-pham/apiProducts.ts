import { AxiosResponse } from "axios";
import {jwtAxios} from "../../src/services/jwt-axios";
import { ProductListDataResponseType } from "./modelProducts";

const getProducts = (
  productId?: string
): Promise<AxiosResponse<ProductListDataResponseType>> => {
  return jwtAxios({
    url: `/products/customer`,
    method: 'get',
    params: {
    },
  })
}



export  { getProducts};


