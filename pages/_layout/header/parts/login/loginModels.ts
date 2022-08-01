export interface LoginType {
  identity: string;
  password: string;
}

export interface LoginResponseType {
  data: {
    access_token: string;
    userInfo: UserInfoType;
  };
}

export interface UserInfoType {
  firstName: string;
  lastName: string;
  address: string;
  phoneNumber?: string;
  dob?: Date;
  gender?: "MALE" | "FEMALE" | "ORTHER";
  email: string;
  id: number;
}
