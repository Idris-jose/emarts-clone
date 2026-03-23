import React from 'react'
import { Home, Store, Search, ShoppingCart, Menu } from 'lucide-react'

const BottomNav = ({ onSearchClick }: { onSearchClick?: () => void }) => {
    const navItems = [
        { icon: Home, label: 'Home' },
        { icon: Store, label: 'Store' },
        { icon: Search, label: 'Search', onClick: onSearchClick },
        { icon: ShoppingCart, label: 'Cart' },
        { icon: Menu, label: 'Menu' },
    ];
  return (
    <div className='fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex items-end justify-between px-2 sm:px-4 py-2 lg:hidden z-50 h-[68px]'>
        {navItems.map((item) => (
            <button 
              key={item.label} 
              onClick={item.onClick}
              className='flex flex-col items-center justify-center w-14 gap-1 h-full'
            >
                <item.icon size={26} strokeWidth={1.5} className='text-gray-600' />
                <span className='text-[11px] text-gray-500 leading-none'>{item.label}</span>
            </button>
        ))}
    </div>
  )
}

export default BottomNav
