import { AxiosResponse } from "axios";
import {callAPI} from "src/services/jwt-axios";
import { ProductDetailResponseType } from "./modelProductDetail";

const getProductDetail = (
  productId?: string
): Promise<AxiosResponse<ProductDetailResponseType>> => {
  return callAPI({
    url: `/products/customer/${productId}`,
    method: 'get',
    params: {
    },
  })
}



export  { getProductDetail};


