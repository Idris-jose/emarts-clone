'use client'
import Image from "next/image";
import Header from "@/components/layout/Header";
import Breadcrumb from "@/components/search/Breadcrumb";
import FiltersSidebar from "@/components/filters/FiltersSidebar";
import ProductGrid from "@/components/search/ProductGrid";
import Footer from "@/components/layout/Footer";
import BottomNav from "@/components/layout/BottomNav";
import { filterProducts } from "@/utils/filter";
import { sortProducts } from "@/utils/sort";
import { useState } from "react";
import {  Products } from "@/data/products";
import { X,ArrowLeft } from "lucide-react";
export default function Home() {
  const [filters, setFilters] = useState({
    min: 0,
    max: 0,
    discount: "all",
    category: "Fashion",
  });

  const [sort, setSort] = useState("low");
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  const filtered = filterProducts(Products, filters);
  const sorted = sortProducts(filtered, sort);
  return (
    <div className="bg-[#f4f4f4] min-h-screen flex flex-col pb-20 lg:pb-0">
      <Header isMobileSearchOpen={isMobileSearchOpen} setIsMobileSearchOpen={setIsMobileSearchOpen} />
      <main className="w-full mx-auto max-w-[1366px] px-4 md:px-6 lg:px-8 2xl:px-10 py-6 md:py-8 flex flex-col gap-6">
        <Breadcrumb />
        <div className="flex items-start gap-6 relative w-full">
          <aside className="hidden lg:block w-1/4 sticky top-6 z-10">
            <FiltersSidebar filters={filters} setFilters={setFilters}/>
          </aside>
          <div className="flex-1 min-w-0">
            <ProductGrid Products={sorted} sort={sort} setSort={setSort} onOpenFilters={() => setIsMobileFiltersOpen(true)} />
          </div>
        </div>
      </main>

      {/* Mobile Drawer */}
      {isMobileFiltersOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black/50 transition-opacity" 
            onClick={() => setIsMobileFiltersOpen(false)} 
          />
          {/* Sidebar */}
          <div className="relative w-full bg-white h-full max-w-sm overflow-y-auto shadow-xl animate-in slide-in-from-left duration-300">
            <div className="p-4 border-b border-gray-100 sticky flex top-0 bg-white z-10">
              <button 
                onClick={() => setIsMobileFiltersOpen(false)}
                className="p-1.5 hover:bg-gray-100 rounded-md justify-end transition-colors"
              >
                <ArrowLeft size={20} className="text-gray-500" />
              </button>
              <h2 className="text-lg font-bold w-full text-center">Filters</h2>
            </div>
            <div className="p-2 pt-1">
              <FiltersSidebar filters={filters} setFilters={setFilters} />
            </div>
          </div>
        </div>
      )}

      <Footer />
      <BottomNav onSearchClick={() => {
        setIsMobileSearchOpen(!isMobileSearchOpen);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }} />
    </div>
  );
}
