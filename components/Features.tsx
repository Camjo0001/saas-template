import React from 'react'
import Image from 'next/image'
export default function Features() {
    return (
        <div className='max-w-7xl mx-auto w-full px-4 py-6'>
            <div className='text-center max-w-5xl mx-auto flex flex-col gap-y-4 items-center'>
                <div className="badge badge-primary bg-primary/25 badge-outline p-[10px]">Fully-Modular Code</div>
                <h2 className='text-5xl font-bold'>Effortless Customization with Next.js & Tailwind CSS</h2>
                {/* <p className='text-lg'>Unleash Creative Freedom with DaisyUI Integration – Design and Build with the Best in Modern Web Technologies</p> */}
            </div>

            <div className='grid md:grid-cols-2 gap-x-12 gap-y-12 my-12 mx-auto max-w-6xl place-items-center lg:pl-12'>
                <div className='order-1 md:order-2 flex justify-start items-center max-w-xl '>
                    <Image src={'/feature1.png'} className='rounded-xl shadow-xl' alt='feature' width={500} height={500} />
                </div>
                <div className='order-2 md:order-1 flex flex-col  w-full max-w-xl justify-center items-start'>
                    <div className="badge badge-primary bg-primary/25 badge-outline p-[10px]">User-Friendly Interface</div>
                    <h3 className='text-2xl font-semibold my-4'>Intuitive Layout Design</h3>
                    <p className='text-md'>Craft stunning pages with ease using our intuitive layout design. Tailored for versatility, this template ensures that every element is placed with purpose, ensuring a seamless user experience.</p>
                    <ul className='text-sm my-6'>
                        <li className='flex items-center justify-start gap-x-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px"><path className='fill-primary/25' d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z" /><path className='fill-primary' d="M34.586,14.586l-13.57,13.586l-5.602-5.586l-2.828,2.828l8.434,8.414l16.395-16.414L34.586,14.586z" /></svg>Streamlined design process with pre-built components.</li>
                        <li className='flex items-center justify-start gap-x-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px"><path className='fill-primary/25' d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z" /><path className='fill-primary' d="M34.586,14.586l-13.57,13.586l-5.602-5.586l-2.828,2.828l8.434,8.414l16.395-16.414L34.586,14.586z" /></svg>Flexible layout options to fit your unique brand style.</li>
                        <li className='flex items-center justify-start gap-x-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px"><path className='fill-primary/25' d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z" /><path className='fill-primary' d="M34.586,14.586l-13.57,13.586l-5.602-5.586l-2.828,2.828l8.434,8.414l16.395-16.414L34.586,14.586z" /></svg>Mobile-responsive design for optimal viewing on any device.</li>

                    </ul>
                    <a href='https://camjo.dev/' target='_blank' className="btn btn-primary btn-wide">Start Using This Template</a>
                </div>


                <div className='order-3 flex justify-start items-center max-w-xl '>
                    <Image src={'/feature2.png'} className='rounded-xl shadow-xl' alt='feature' width={500} height={500} />
                </div>
                <div className='order-4 flex flex-col justify-center items-start max-w-xl '>
                    <div className="badge badge-primary bg-primary/25 badge-outline p-[10px]">Brand Alignment Made Simple</div>
                    <h3 className='text-2xl font-semibold my-4'>Dynamic Theming with DaisyUI</h3>
                    <p className='text-md'>Embrace the power of dynamic theming. With DaisyUI integrated, switch themes effortlessly to match your brand identity. Customize colors, fonts, and more with just a few clicks.</p>
                    <ul className='text-sm my-6'>
                        <li className='flex items-center justify-start gap-x-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px"><path className='fill-primary/25' d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z" /><path className='fill-primary' d="M34.586,14.586l-13.57,13.586l-5.602-5.586l-2.828,2.828l8.434,8.414l16.395-16.414L34.586,14.586z" /></svg>Easy theme customization with a wide range of colors and fonts.</li>
                        <li className='flex items-center justify-start gap-x-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px"><path className='fill-primary/25' d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z" /><path className='fill-primary' d="M34.586,14.586l-13.57,13.586l-5.602-5.586l-2.828,2.828l8.434,8.414l16.395-16.414L34.586,14.586z" /></svg>Predefined themes to kickstart your design journey.</li>
                        <li className='flex items-center justify-start gap-x-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px"><path className='fill-primary/25' d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z" /><path className='fill-primary' d="M34.586,14.586l-13.57,13.586l-5.602-5.586l-2.828,2.828l8.434,8.414l16.395-16.414L34.586,14.586z" /></svg>Consistent and cohesive visual styling across all components.</li>

                    </ul>
                    <a href='https://camjo.dev/' target='_blank' className="btn btn-primary btn-wide">Start Using This Template</a>
                </div>
                
                <div className='order-5 md:order-6  flex justify-start items-center max-w-xl '>
                    <Image src={'/feature3.png'} className='rounded-xl shadow-xl' alt='feature' width={500} height={500} />
                </div>
                <div className='order-6 md:order-5 flex flex-col justify-center items-start max-w-xl '>
                    <div className="badge badge-primary bg-primary/25 badge-outline p-[10px]">Performance & Growth Optimized</div>
                    <h3 className='text-2xl font-semibold my-4'>Seamless Integration & Scalability</h3>
                    <p className='text-md'>Grow your project without limits. Our template, built on Next.js, ensures smooth integration with various APIs and server-side rendering capabilities for enhanced performance and scalability.</p>
                    <ul className='text-sm my-6'>
                        <li className='flex items-center justify-start gap-x-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px"><path className='fill-primary/25' d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z" /><path className='fill-primary' d="M34.586,14.586l-13.57,13.586l-5.602-5.586l-2.828,2.828l8.434,8.414l16.395-16.414L34.586,14.586z" /></svg>
                            Optimized for performance with fast loading times.

                        </li>
                        <li className='flex items-center justify-start gap-x-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px"><path className='fill-primary/25' d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z" /><path className='fill-primary' d="M34.586,14.586l-13.57,13.586l-5.602-5.586l-2.828,2.828l8.434,8.414l16.395-16.414L34.586,14.586z" /></svg>Easy integration with APIs and third-party services.</li>
                        <li className='flex items-center justify-start gap-x-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px"><path className='fill-primary/25' d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z" /><path className='fill-primary' d="M34.586,14.586l-13.57,13.586l-5.602-5.586l-2.828,2.828l8.434,8.414l16.395-16.414L34.586,14.586z" /></svg>Scalable architecture suitable for projects of any size.</li>

                    </ul>
                    <a href='https://camjo.dev/' target='_blank' className="btn btn-primary btn-wide">Start Using This Template</a>
                </div>
                
            </div>





        </div>
    )
}
