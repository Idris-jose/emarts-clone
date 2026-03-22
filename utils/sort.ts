import { Product } from "@/types/product";

export const sortProducts = (products: Product[], sort: string) => {
  const sortedProducts = [...products];
  switch (sort) {
    case "lowest-price":
      return sortedProducts.sort((a, b) => a.price - b.price);
    case "highest-price":
      return sortedProducts.sort((a, b) => b.price - a.price);
    default:
      return sortedProducts;
  }
};