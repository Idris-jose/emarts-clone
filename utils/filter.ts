import { Product } from "@/types/product";

export const filterProducts = (products: Product[], filters: any) => {
  return products.filter(p => {
    const price = p.sale_price > 0 ? p.sale_price : p.price;

    if (filters.min && price < filters.min) return false;
    if (filters.max && price > filters.max) return false;

    if (filters.discount === "with" && p.sale_price === 0) return false;
    if (filters.discount === "without" && p.sale_price > 0) return false;

    if (filters.category && filters.category !== "Fashion" && filters.category !== "all") {
        if (p.sub_category !== filters.category) return false;
    } else if (filters.category === "Fashion") {
        if (p.category !== "Fashion") return false;
    }

    return true;
  });
};