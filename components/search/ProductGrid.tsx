import React from 'react'
import SortDropdown from './SortDropdown'
import ProductCard from '../product/ProductCard'
import { Product } from '@/types/product'
const ProductGrid = ({Products, sort, setSort}: {Products: Product[], sort: string, setSort: (sort: string) => void}) => {
  return (
    <section>
        <div className='flex items-center justify-between'>
            <h2 className='text-xl font-bold'>Mens clothing<span className='font-light text-sm'> (18 products found)</span></h2>
            <SortDropdown sort={sort} setSort={setSort} />
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