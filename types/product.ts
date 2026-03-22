export interface Product {
  id: string;
  name: string;
  price: number;
  sale_price: number;
  quantity: number;
  sub_category?: string;
  category?: string;
  image?: string;
  gallery?: string[];
}