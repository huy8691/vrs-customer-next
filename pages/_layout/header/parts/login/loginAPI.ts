import { AxiosResponse } from "axios";
import { jwtAxios } from "../../../../../src/services/jwt-axios";
import { LoginResponseType, LoginType } from "./loginModels";

const login = (data: LoginType): Promise<AxiosResponse<LoginResponseType>> => {
  return jwtAxios({
    url: "/auth/login",
    method: "post",
    data: data,
  });
};

export  {login};
