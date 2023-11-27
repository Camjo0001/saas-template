import React from 'react'
import Image from 'next/image'
export default function HeroTestimonial() {
    return (
        <div className=' flex flex-col py-24 gap-y-4 items-center justify-between max-w-7xl mx-auto'>
            <p className='text-lg font-bold text-primary uppercase'>Our Customers love what we do</p>
            <p className='italic text-xl text-center text-gray-700 max-w-4xl'>"Switching to this template was a game-changer for our website. The ease of customization and the sleek design have significantly improved our user engagement and conversions. It's intuitive, visually stunning, and incredibly user-friendly. Absolutely recommend!"</p>
            <p className='text-lg font-medium '>- Jamie Smith, Digital Marketing Manager, Saas Tools</p>
        </div>
    )
}
