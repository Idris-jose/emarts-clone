"use client";
import React from 'react'
import { Search ,X} from 'lucide-react'
import { useState } from 'react'
const SearchBar = () => {
  const [SearchQuery, setSearchQuery] = useState("");
  return (
    <div className="w-full max-w-[450px] lg:max-w-[500px]">
  <div className="flex items-center h-[54px] px-4 bg-white border-2 border-[#9bbc55] rounded-full">    <input
      type="text"
      onChange={e => setSearchQuery(e.target.value)}
      value={SearchQuery}
      placeholder="Search products, brands and categories..."
      className="flex-1 outline-none bg-transparent text-gray-700 text-[14px] placeholder:text-gray-400"
    />
    <div className="flex items-center gap-2 text-gray-400">
      {SearchQuery && (
        <button
          onClick={() => setSearchQuery("")}
          className="hover:text-gray-600 flex items-center gap-2"
        >
          <div className='hover:bg-[#d6ff7e]/40 p-2 rounded-full'>
          <X size={20} strokeWidth={1.5} className='' /> 
          </div> | 
        </button>
      )}
      <button className="hover:bg-[#d6ff7e]/40 p-2 rounded-full">
        <Search size={20} strokeWidth={1.5} />
      </button>
    </div>

  </div>
</div>
  )
}

export default SearchBar
