import React from 'react'
import { X } from 'lucide-react'
import CategoriesSelect from './CategoriesSelect'
import DiscountSelect from './DiscountSelect'
import PriceSelect from './PriceSelect'

const FiltersSidebar = ({filters, setFilters}: {filters: any, setFilters: any}) => {

    return (
    <div className=' bg-white shadow-sm rounded-[10px] lg:px-[20px] lg:py-[20px] flex flex-col gap-6'>
        <div className='flex items-center justify-between'>
            <h2 className='text-lg font-semibold'>Filters</h2>
            <button onClick={() => setFilters({min:0,max:0,discount:"all",category:"Fashion"})} className='text-sm text-gray-500'>Clear All</button>
        </div>
        <div className='flex flex-wrap gap-2'>
            <div className='group flex w-fit items-center gap-2 border border-gray-200 rounded-lg text-[13px] px-3 py-1.5 capitalize text-black cursor-pointer transition-colors duration-200 ease-in-out hover:border-black bg-white'>
                <span>Mens-clothing</span>
                <X size={16} strokeWidth={2} className='text-gray-400 group-hover:text-black transition-colors' />
            </div>
        </div>
        <div>
            <h2 className=' font-semibold'>Discount</h2>
            <DiscountSelect  discount={filters.discount} setFilters={setFilters} />
        </div>
        <div>
            <h2 className=' font-semibold'>Price (₦)</h2>
            <PriceSelect minPrice={filters.min} maxPrice={filters.max} setFilters={setFilters} />
        </div>
         <div>
            <h2 className=' font-semibold'>Categories</h2>
            <CategoriesSelect category={filters.category} setFilters={setFilters} />
        </div>
    </div>
  )
}

export default FiltersSidebar