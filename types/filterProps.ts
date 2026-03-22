export interface DiscountProps {
  discount: string;
  setFilters: React.Dispatch<React.SetStateAction<any>>;
}

export interface PriceProps {
  minPrice: number;
  maxPrice: number;
  setFilters: React.Dispatch<React.SetStateAction<any>>;
}

export interface CategoryProps {
  category: string;
  setFilters: React.Dispatch<React.SetStateAction<any>>;
}

export interface SortDropdownProps {
  sort: string;
  setSort: (sort: string) => void;
}