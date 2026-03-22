"use client";
import React, { useState } from 'react'
import { PriceProps } from '@/types/filterProps'

const PriceSelect = ({ minPrice, maxPrice, setFilters }: PriceProps) => {
    const [localMin, setLocalMin] = useState(minPrice ? minPrice.toString() : '');
    const [localMax, setLocalMax] = useState(maxPrice ? maxPrice.toString() : '');

    const handleSave = () => {
        setFilters((prev: any) => ({
            ...prev,
            min: Number(localMin) || 0,
            max: Number(localMax) || 0,
        }));
    };

    const handleClear = () => {
        setLocalMin('');
        setLocalMax('');
        setFilters((prev: any) => ({
            ...prev,
            min: 0,
            max: 0,
        }));
    };

  return (
    <div className='flex flex-col gap-2 mt-4 border rounded border-gray-200 px-3.5 2xl:px-4 py-3.5 2xl:py-4'>
        <div className='flex items-center justify-between gap-3'>
            <div className='flex flex-col w-full'>
                <label className='text-[11px] text-gray-500 font-medium uppercase mb-1.5 px-0.5'>₦2000</label>
                <div className='relative w-full'>
                    <input type='number' placeholder='Min'min={2000} max={28000} value={localMin} onChange={(e) => setLocalMin(e.target.value)} className='w-full outline-none h-[40px] px-3 bg-[#f8f9fa] text-gray-800 text-[13px] transition-all duration-200 focus:border-[#9bbc55] focus:bg-white placeholder:text-gray-400 rounded-md border border-gray-200' />
                </div>
            </div>
            <span className='text-gray-300 mt-5 font-bold'>-</span>
            <div className='flex flex-col w-full'>
                <label className='text-[11px] text-gray-500 font-medium uppercase mb-1.5 px-0.5'>₦28,000</label>
                <div className='relative w-full'>
                    <input type='number' placeholder='Max' min={2000} max={28000} value={localMax} onChange={(e) => setLocalMax(e.target.value)} className='w-full outline-none h-[40px] px-3 bg-[#f8f9fa] text-gray-800 text-[13px] transition-all duration-200 focus:border-[#9bbc55] focus:bg-white placeholder:text-gray-400 rounded-md border border-gray-200' />
                </div>
            </div>
        </div>
        <div className='flex items-center justify-between gap-3 mt-2'>
         <button onClick={handleClear} className='text-[13px] font-medium text-gray-500 hover:text-black transition-colors px-2 cursor-pointer'>Clear</button>
         <button onClick={handleSave} className='text-[13px] font-medium text-[#9bbc55] px-5 py-2 rounded-md transition-colors cursor-pointer hover:bg-[#9bbc55]/10'>Save</button>
        </div>
    </div>
  )
}

export default PriceSelect