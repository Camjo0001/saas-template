import React from 'react'
import Image from 'next/image'
import Marquee from "react-fast-marquee";


interface Testimonial {
    text: string;
    name: string;
    company: string;
    imageUrl: string;
}

export default function Testmonials() {

    const testimonials = [
        {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora recusandae temporibus illum beatae ratione laudantium, reiciendis ducimus iusto dolorem veritatis commodi provident dolor quod qui doloremque, dolorum vitae. Fugit, earum.",
            name: "Cameron Johnston",
            company: "TRX Development",
            imageUrl: "/pfp.jpg"
        },
        {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora recusandae temporibus illum beatae ratione laudantium, reiciendis ducimus iusto dolorem veritatis commodi provident dolor quod qui doloremque, dolorum vitae. Fugit, earum.",
            name: "Cameron Johnston",
            company: "TRX Development",
            imageUrl: "/pfp.jpg"
        },
        
        // ... other testimonials
    ];

    const renderTestimonial = (testimonial: Testimonial, key: number) => (
        <div key={key} className="z-10 my-12 bg-gray-100 mx-12 w-96 rounded-xl shadow-xl flex gap-y-4 flex-col items-start p-4">
            <p className='font-medium text-lg'>{testimonial.text}</p>
            <div className='flex gap-x-2'>
                <Image alt='pfp' loading='lazy' width={48} height={48} className='rounded-full' src={testimonial.imageUrl} />
                <div>
                    <p className='font-semibold text-md'>{testimonial.name}</p>
                    <p className='font-normal text-sm'>{testimonial.company}</p>
                </div>
            </div>
        </div>
    );

    return (
        <div className="overflow-hidden w-full ">
            <Marquee
                speed={100}
                pauseOnClick
                autoFill
            >
                {testimonials.map((testimonial, index) => renderTestimonial(testimonial, index))}

            </Marquee>

        </div >
    )
}
