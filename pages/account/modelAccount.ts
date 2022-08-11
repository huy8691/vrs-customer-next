export interface AccountDataType {
  dob?: string,
  email?: string,
  fullName?: string
  gender?: string,
  id?: number,
  phoneNumber?: number
  userId?: number,
  isError? : {
    message: string,
  }
}


export interface AccountDataResponseType {
  data: AccountDataType;
}
