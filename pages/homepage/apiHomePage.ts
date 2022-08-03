import { AxiosResponse } from "axios";
import { jwtAxios } from "src/services/jwt-axios";
import { ProductListDataResponseType, PromotionListDataResponseType } from "./modelHomePage";

const getNewProductList = (): Promise<
  AxiosResponse<ProductListDataResponseType>
> => {
  return jwtAxios({
    url: `/products/customer?sort=approved_at&order=DESC`,
    method: "get",
    params: {},
  });
};

const getSellingProductList = (): Promise<
  AxiosResponse<ProductListDataResponseType>
> => {
  return jwtAxios({
    url: `/products/customer/top/products`,
    method: "get",
    params: {},
  });
};

const getCategoryProduct = (): Promise<
  AxiosResponse<ProductListDataResponseType>
> => {
  return jwtAxios({
    url: `/categories?format=TREE`,
    method: "get",
    params: {},
  });
};

const getPromotion = (): Promise<
  AxiosResponse<PromotionListDataResponseType>
> => {
  return jwtAxios({
    url: `/promotions`,
    method: "get",
    params: {},
  });
};

export { getNewProductList, getSellingProductList, getCategoryProduct, getPromotion };
