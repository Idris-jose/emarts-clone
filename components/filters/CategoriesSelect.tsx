"use client";
import React, { useState } from 'react'
import { Minus, Plus } from 'lucide-react'
import { CategoryProps } from '@/types/filterProps'

const CategoriesSelect = ({ category, setFilters }: CategoryProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleChange = (val: string) => {
    setFilters((prev: any) => ({ ...prev, category: val }));
  }

  return (
    <div className='mt-4'>
        <div className='border border-gray-200 rounded-md overflow-hidden'>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`w-full flex items-center justify-between px-4 py-3.5 text-[15px] font-medium text-black transition-colors hover:bg-gray-100 cursor-pointer ${isOpen ? 'bg-[#f8f9fa]' : 'bg-white'}`}
            >
                Fashion
                {isOpen ? <Minus size={18} className="text-gray-400" strokeWidth={2} /> : <Plus size={18} className="text-gray-400" strokeWidth={2} />}
            </button>
            
            {isOpen && (
                <div className='bg-white px-4 py-4 flex flex-col gap-4 border-t border-gray-200'>
                    <label className="flex items-center gap-3 cursor-pointer group w-fit">
                        <input type="radio" name="category" checked={category === 'Men’s Clothing'} onChange={() => handleChange('Men’s Clothing')} className="appearance-none w-5 h-5 shrink-0 rounded-full border-2 border-slate-200 checked:border-[#9bbc55] checked:border-[6px] transition-all cursor-pointer outline-none bg-white" />
                        <span className="text-black text-[14px]">Men's Clothing</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group w-fit">
                        <input type="radio" name="category" checked={category === 'Women’s Clothing'} onChange={() => handleChange('Women’s Clothing')} className="appearance-none w-5 h-5 shrink-0 rounded-full border-2 border-slate-200 checked:border-[#9bbc55] checked:border-[6px] transition-all cursor-pointer outline-none bg-white" />
                        <span className="text-black text-[14px]">Fashion</span>
                    </label>
                </div>
            )}
        </div>
    </div>
  )
}

export default CategoriesSelect
