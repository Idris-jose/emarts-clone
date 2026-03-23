'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SearchBar from '../search/SearchBar'
import CartButton from '../product/CartButton'
import Notification from '../product/Notification'
import { User, ArrowLeft } from 'lucide-react'
import { useState } from 'react'

const Header = ({ isMobileSearchOpen, setIsMobileSearchOpen }: { isMobileSearchOpen?: boolean, setIsMobileSearchOpen?: (val: boolean) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const user = ["As a Customer","As a Seller"]
  return (
<header className="w-full relative sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
  <div className='flex items-center justify-between py-4 lg:py-6 mx-auto w-full max-w-[1366px] px-4 md:px-6 lg:px-8 2xl:px-10 gap-3'>
    {isMobileSearchOpen ? (
      <div className='flex-1 lg:hidden block flex items-center gap-2 animate-in fade-in slide-in-from-right-4 duration-200 lg:col-span-1'>

        <div className='flex-1 w-full lg:hidden'><SearchBar /></div>
      </div>
    ) : (
      <>
        <Link href="/" className="flex-shrink-0 transition-opacity hover:opacity-80">
          <Image src='/logo.svg' alt='logo' width={100} height={28} className='object-contain h-6 md:h-8 w-auto' priority />
        </Link>
        <div className='hidden lg:block w-full max-w-2xl'><SearchBar /></div>
        <div className='flex items-center gap-3 lg:gap-5'>
          <div className='hidden lg:block'><CartButton /></div>
          <Notification />
          <div className='relative flex items-center gap-2 cursor-pointer group ml-2'>
              <div className='flex items-center justify-center text-gray-700 group-hover:text-black transition-colors rounded-full'>
                <User size={26} strokeWidth={1.5} className="" />
              </div>
          <button onClick={() => setIsOpen(!isOpen)} className='text-sm font-medium text-gray-700 group-hover:text-black transition-colors '>Sign In / Up</button>
          
          {isOpen && (
            <div className="absolute top-[110%] right-0 w-40 bg-white border border-gray-100 shadow-md rounded-md py-1.5 z-50 animate-in fade-in zoom-in-95 duration-100">
              {user.map((option) => (
                <div 
                  key={option} 
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  className='px-3.5 py-2 text-[13.5px] flex items-center gap-2 cursor-pointer transition-colors hover:bg-[#d6ff7e]/30'
                >
                  {option}
                </div>
              ))}
            </div>
          )}
      </div>
    </div>
    </>
    )}
  </div>
</header>
  )
}

export default Header
