export interface ProductDataType {
  id: number;
  name: string;
  thumbnails: Array<{url:string}>;
  prices: Array<{price: number}>;
  unit: string;
}

export interface ProductListDataResponseType {
  data: ProductDataType[];
}

// category
export interface CategoryProductDataType {
  name: string;
  image: string;
}

export interface CategoryProductListDataResponseType {
  data: CategoryProductDataType[];
}

// promotion

export interface PromotionDataType {
  name: string;
  featureImage: {url:string};
  errors: string;
  message: string;
}

export interface PromotionListDataResponseType {
  data: PromotionDataType[];
}