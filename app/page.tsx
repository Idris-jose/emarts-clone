'use client'
import Image from "next/image";
import Header from "@/components/layout/Header";
import Breadcrumb from "@/components/search/Breadcrumb";
import FiltersSidebar from "@/components/filters/FiltersSidebar";
import ProductGrid from "@/components/search/ProductGrid";
import Footer from "@/components/layout/Footer";
import { filterProducts } from "@/utils/filter";
import { sortProducts } from "@/utils/sort";
import { useState } from "react";
import {  Products } from "@/data/products";
export default function Home() {
  const [filters, setFilters] = useState({
    min: 0,
    max: 0,
    discount: "all",
    category: "Fashion",
  });

  const [sort, setSort] = useState("low");

  const filtered = filterProducts(Products, filters);
  const sorted = sortProducts(filtered, sort);
  return (
    <div className="bg-[#f4f4f4] min-h-screen flex flex-col">
      <Header />
      <main className="w-full mx-auto max-w-[1366px] px-4 md:px-6 lg:px-8 2xl:px-10 py-6 md:py-8 flex flex-col gap-6">
        <Breadcrumb />
        <div className="flex items-start gap-6 relative w-full">
          <aside className="w-1/4 sticky top-6 z-10">
            <div className="">
              <FiltersSidebar filters={filters} setFilters={setFilters}/>
            </div>
          </aside>
          <div className="flex-1 min-w-0">
            <ProductGrid Products={sorted} sort={sort} setSort={setSort} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
