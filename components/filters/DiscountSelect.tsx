import React from 'react'
import { DiscountProps } from '@/types/filterProps'
const radioClasses = "appearance-none w-5 h-5 shrink-0 rounded-full flex items-center justify-center border-2 border-gray-300 checked:bg-[#9bbc55] checked:border-[#9bbc55] cursor-pointer transition-all outline-none " +
  "after:content-[''] after:w-1.5 after:h-2.5 after:border-white after:border-b-2 after:border-r-2 after:rotate-45 after:scale-0 checked:after:scale-100 after:-mt-[2px]";

const DiscountSelect = ({ discount, setFilters }: DiscountProps) => {
  const handleChange = (value: string) => {
    setFilters((prev: any) => ({
      ...prev,
      discount: value,
    }));
  };
  return (
    <div className='flex flex-col gap-3 mt-4 border rounded border-gray-200 px-3.5 2xl:px-4 py-3.5 2xl:py-4'>
      <label htmlFor="show-all" className="flex items-center gap-3 cursor-pointer group w-fit">
        <input type="radio" name="discount" id="show-all" className={radioClasses} onChange={() => handleChange("all")} checked={discount === "all"} />
        <span className="text-black text-[15px] group-hover:text-black transition-colors capitalize">Show all</span>
      </label>
      <hr className='border-gray-300' />
      <label htmlFor="with-discount" className="flex items-center gap-3 cursor-pointer group w-fit">
        <input type="radio" name="discount" id="with-discount" className={radioClasses} onChange={() => handleChange("with")} checked={discount === "with"} />
        <span className="text-black text-[15px] group-hover:text-black transition-colors capitalize">With discount</span>
      </label>
      <hr className='border-gray-300' />
      <label htmlFor="without-discount" className="flex items-center gap-3 cursor-pointer group w-fit">
        <input type="radio" name="discount" id="without-discount" className={radioClasses} onChange={() => handleChange("without")} checked={discount === "without"} />
        <span className="text-black text-[15px] group-hover:text-black transition-colors capitalize">Without discount</span>
      </label>
    </div>
  )
}

export default DiscountSelect