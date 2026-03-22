import React from 'react'
import { ChevronRight } from 'lucide-react'
const Breadcrumb = () => {
  return (
    <nav className="flex items-center gap-1 text-sm text-gray-500">
        <a href="#" className="text-black">Home</a>
        <span className="mx-1"><ChevronRight size={16} /></span>
        <a href="#" className="text-black">Market</a>
        <span className="mx-1"><ChevronRight size={16} /></span>
        <span className="text-black">Search</span>
        <span className="mx-1"><ChevronRight size={16} /></span>
        <span className="text-gray-300 font-light">Mens-clothing</span>
    </nav>
  )
}

export default Breadcrumb