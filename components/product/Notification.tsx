
import React from 'react'
import { Bell } from 'lucide-react'
const Notification = () => {
  return (
    <div className='relative flex items-center justify-center cursor-pointer bg-[#d6ff7e] hover:bg-[#c7fa5e] text-black transition-colors w-12 h-12 rounded-full shrink-0'>
      <Bell size={22} strokeWidth={1.5} />
    </div>
  )
}

export default Notification
