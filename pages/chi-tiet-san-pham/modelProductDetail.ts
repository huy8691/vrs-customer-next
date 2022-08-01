export interface ProductDetailType {
  id: number;
  name: string;
  images: Array<{ url: string }>;
  categories: Array<{ name: string }>;
  description: string;
  errors: string;
  message: string;
}

export interface ProductDetailResponseType {
  data: ProductDetailType;
}
