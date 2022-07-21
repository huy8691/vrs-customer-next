export interface ProductDataType {
  id: number;
  name?: string;
  address?: string;
  status?: string;
  rating?: number;
  ratingTurns?: number;
  thumbnails?: string[];
  phoneNumber?: string;
}

export interface ProductListDataResponseType {
  data: ProductDataType[];
}

