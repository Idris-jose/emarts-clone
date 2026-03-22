import React from 'react'
import { ShoppingCart } from 'lucide-react'
const CartButton = () => {
  return (
    <div className='relative flex items-center justify-center cursor-pointer bg-[#d6ff7e] hover:bg-[#c7fa5e] text-black transition-colors w-12 h-12 rounded-full shrink-0'>
      <ShoppingCart size={22} strokeWidth={1.5} />
      <span className='absolute -top-1 -right-1 bg-[#1E3934] text-white text-[10px] font-bold rounded-full min-w-[20px] h-[20px] flex items-center justify-center pointer-events-none'>
        0
      </span>
    </div>
  )
}

export default CartButton
