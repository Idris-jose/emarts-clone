import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Instagram, AtSign } from 'lucide-react'


const Footer = () => {
  return (
    <footer className='bg-white lg:block hidden pt-12 lg:pt-16 pb-6'>
        <div className='mx-auto w-full max-w-[1366px] px-4 md:px-6 lg:px-8 2xl:px-10 '>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12'>
                <div className='lg:col-span-2'>
                    <Link href="/" className="inline-block mb-4 hover:opacity-90 transition-opacity">
                        <Image src='/logo.svg' alt='E-Marts' width={120} height={32} className='h-8 md:h-9 w-auto object-contain' />
                    </Link>
                    <p className='text-[15px] leading-relaxed text-gray-500 max-w-sm mt-2'>
                        We get deliveries delivered to you in no time from a wide variety of vendors.
                    </p>
                    <div className='flex items-center gap-5 mt-6 text-gray-700'>
                        <a href="#" className="hover:text-black transition-colors"><Facebook size={20} /></a>
                        <a href="#" className="hover:text-black transition-colors"><Instagram size={20} /></a>
                        <a href="#" className="hover:text-black transition-colors"><AtSign size={20} /></a>
                    </div>
                </div>

                
                <div className='lg:col-span-1'>
                    <h3 className='font-semibold text-black mb-5 text-[15px]'>Company</h3>
                    <ul className='flex flex-col gap-3.5 text-[14px] text-black'>
                        <li><Link href="#" className="hover:underline transition-colors">About us</Link></li>
                        <li><Link href="#" className="hover:underline transition-colors">FAQ</Link></li>
                        <li><Link href="#" className="hover:underline transition-colors">Contact us</Link></li>
                    </ul>
                </div>

                
                <div className='lg:col-span-1'>
                    <h3 className='font-semibold text-black mb-5 text-[15px]'>Privacy Policy</h3>
                    <ul className='flex flex-col gap-3.5 text-[14px] text-black'>
                        <li><Link href="#" className="hover:underline transition-colors">General</Link></li>
                        <li><Link href="#" className="hover:underline transition-colors">Vendors</Link></li>
                        <li><Link href="#" className="hover:underline transition-colors">Customers</Link></li>
                    </ul>
                </div>

               
                <div className='lg:col-span-1'>
                    <h3 className='font-semibold text-black mb-5 text-[15px]'>Terms Of Use</h3>
                    <ul className='flex flex-col gap-3.5 text-[14px] text-black'>
                        <li><Link href="#" className="hover:underline transition-colors">General Terms Of Use</Link></li>
                        <li><Link href="#" className="hover:underline transition-colors">Merchant Terms Of Use</Link></li>
                    </ul>
                </div>
            </div>

            <div className='flex flex-col sm:flex-row items-center justify-between border-t border-gray-200 pt-6 mt-8'>
                <p className='text-[13px] text-black mb-4 sm:mb-0'>&copy; Copyright 2026 | E-Marts Team</p>
                <div className='flex items-center gap-5'>
                    

                     <Image src="/mastercard.svg" alt="Mastercard" width={200} height={200} className='h-10 w-auto object-contain' />
                   <Image src="/visa.svg" alt="Visa" width={200} height={200} className='h-10 w-auto object-contain' />
                  
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer