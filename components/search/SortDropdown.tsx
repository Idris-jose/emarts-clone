"use client";
import React, { useState, useRef, useEffect } from 'react'
import { ChevronDown,Check } from 'lucide-react'
import { SortDropdownProps } from '@/types/filterProps'
const sortOptions = [
    { value: 'lowest-price', label: 'Lowest Price' },
    { value: 'highest-price', label: 'Highest Price' },
    { value: 'new-arrival', label: 'New Arrival' },
    { value: 'most-order', label: 'Most order' },
]

const SortDropdown = ({sort, setSort}: SortDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedOption = sortOptions.find((option)=> option.value === sort) || sortOptions[0];
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className='relative flex flex-col'>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`relative flex items-center justify-between gap-2 bg-white border ${isOpen ? 'border-[#9bbc55]' : 'border-gray-200'} px-3 md:px-3 py-1.5 md:py-2 rounded-md transition-colors hover:border-[#9bbc55] min-w-[180px] lg:min-w-[200px] cursor-pointer w-full focus:outline-none`}
      >
        <div className="flex items-center gap-1.5">
            <span className='text-[13px] text-gray-500 whitespace-nowrap'>Sort by:</span>
            <span className='text-[13px] font-medium text-black'>{selectedOption.label}</span>
        </div>
        <ChevronDown size={15} strokeWidth={2} className={`text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="absolute top-[110%] left-0 w-full bg-white border border-gray-100 shadow-md rounded-md py-1.5 z-50 animate-in fade-in zoom-in-95 duration-100">
          {sortOptions.map((option) => (
            <div 
              key={option.value} 
              onClick={() => {
                setSort(option.value);
                setIsOpen(false);
              }}
              className={`px-3.5 py-2 text-[13.5px] flex items-center gap-2 cursor-pointer transition-colors ${selectedOption.value === option.value ? 'text-black font-semibold' : 'text-gray-600 hover:bg-gray-50 hover:text-black'}`}
            >
             {selectedOption.value === option.value && <Check size={15} strokeWidth={2}/>} {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SortDropdown