import React from 'react'
import SortDropdown from './SortDropdown'
import ProductCard from '../product/ProductCard'
import { Product } from '@/types/product'
import { SlidersHorizontal } from 'lucide-react'

const ProductGrid = ({Products, sort, setSort, onOpenFilters}: {Products: Product[], sort: string, setSort: (sort: string) => void, onOpenFilters?: () => void}) => {
  return (
    <section>
        <div className='flex flex-col md:flex-row md:items-center justify-between gap-4'>
            <h2 className='text-xl font-bold'>Mens clothing<span className='font-light text-sm'> (18 products found)</span></h2>
            <div className='flex items-center gap-2'>
                <button 
                  onClick={onOpenFilters}
                  className='lg:hidden flex items-center gap-2 px-3 py-1.5 md:py-2 border border-gray-200 rounded-md bg-white hover:border-[#9bbc55] transition-colors font-medium text-[13px]'
                >
                    <SlidersHorizontal size={15} strokeWidth={2} /> Filters
                </button>
                <SortDropdown sort={sort} setSort={setSort} />
            </div>
        </div>
        <div className='mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
            {Products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    </section>
  )
}

export default ProductGrid