import React from 'react'
import Image from 'next/image'
export default function Hero() {
    return (
        <div className=' flex items-center justify-between w-full max-w-7xl mx-auto px-4'>
            <div className='max-w-2xl lg:max-w-xl flex flex-col items-start gap-y-6'>
                <h1 className='text-5xl md:text-6xl font-bold'>A <span className='italic'>free</span> Saas template that can help you <span className='italic'>revolutionize</span> your landing page.</h1>
                <p className='text-lg'>Easily customizable, fully functional landing page template, built for your company to adopt and customize, free of charge.</p>
                <div className="flex gap-8  flex-row">
                    <div className="flex">
                        <Image alt='pfp' loading='lazy' width={48} height={48} className='border-2 border-secondary rounded-full -mr-4' src={'/pfp.jpg'} />
                        <Image alt='pfp' loading='lazy' width={48} height={48} className='border-2 border-secondary rounded-full -mr-4' src={'/pfp.jpg'} />
                        <Image alt='pfp' loading='lazy' width={48} height={48} className='border-2 border-secondary rounded-full -mr-4' src={'/pfp.jpg'} />
                        <Image alt='pfp' loading='lazy' width={48} height={48} className='border-2 border-secondary rounded-full -mr-4' src={'/pfp.jpg'} />

                        <Image alt='pfp' loading='lazy' width={48} height={48} className='border-2 border-secondary rounded-full -mr-4' src={'/pfp.jpg'} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="rating gap-1">
                            <input type="radio" name="rating-3" className="mask mask-star bg-primary" disabled />
                            <input type="radio" name="rating-3" className="mask mask-star bg-primary" disabled />
                            <input type="radio" name="rating-3" className="mask mask-star bg-primary" disabled />
                            <input type="radio" name="rating-3" className="mask mask-star bg-primary" disabled />
                            <input type="radio" name="rating-3" className="mask mask-star bg-primary" disabled checked />
                        </div>
                        <p className="text-sm text-base-content/70">+10 Indie Hackers</p></div>

                </div>
                <a href='https://camjo.dev/' target='_blank' className="btn btn-primary w-full md:btn-wide">Start Using This Template</a>
            </div>
            <div className='hidden lg:flex'>
                <Image src={'/hero.png'} alt='hero' width={600} height={600} />
            </div>
        </div>
    )
}
