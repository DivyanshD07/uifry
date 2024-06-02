import React from 'react'
import Image from 'next/image'

export default function Navbar() {
    return(
        <nav className='z-100 w-7/8 align-middle flex justify-between items-center py-12 px-40'>
            <div className='flex gap-2 items-center'>
                <Image 
                src="/images/Logo.png"
                alt='Logo'
                width={34}
                height={34} />
                <p className='font-bold text-3xl'>uifry</p>
                <div className='flex ml-16 gap-6 font-semibold text-xl'>
                    <p className='text-orange-600 font-bold hover:cursor-pointer'>Home</p>
                    <p className='hover:cursor-pointer'>About Us</p>
                    <p className='hover:cursor-pointer'>Pricing</p>
                    <p className='hover:cursor-pointer'>Features</p>
                </div>
            </div>
            <div className='flex gap-6 '>
                <button className='bg-black px-8 py-3 text-white rounded-md font-semibold mr-10'>Download</button>
                <Image
                    src="/images/Star 1.png"
                    alt=''
                    width={50}
                    height={40}
                    className='translate-y-5'
                />
            </div>
        </nav>
    )
}