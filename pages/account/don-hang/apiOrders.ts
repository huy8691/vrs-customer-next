import { AxiosResponse } from "axios";
import { callAPIWithToken } from "src/services/jwt-axios";
import { OrderListDataResponseType } from "./modelOrders";

const getOrders = (
  params: object
): Promise<AxiosResponse<OrderListDataResponseType>> => {
  return callAPIWithToken({
    url: `/orders/customer/me`,
    method: "get",
    params: {
      ...params,
      pageSize: 20,
    },
  });
};

export { getOrders };
