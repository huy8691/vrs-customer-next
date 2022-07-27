import { AxiosResponse } from "axios";
import {jwtAxios} from "../../src/services/jwt-axios";
import { ProductDetailResponseType } from "./modelProductDetail";

const getProductDetail = (
  productId?: string
): Promise<AxiosResponse<ProductDetailResponseType>> => {
  return jwtAxios({
    url: `/products/customer/${productId}`,
    method: 'get',
    params: {
    },
  })
}



export  { getProductDetail};


