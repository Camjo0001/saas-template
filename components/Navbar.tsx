import React, { useState, useEffect } from 'react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        // Listen for scroll events
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const navbarHeight = isScrolled ? '64px' : '80px'; // Example heights for scrolled and unscrolled states


    return (
        <>
            {isScrolled && <div style={{ height: navbarHeight }}></div>} {/* Placeholder */}

            <div className={`z-20 duration-300 px-4 w-full ${isScrolled ? 'fixed py-4 bg-base-100/80 backdrop-blur-md border-b border-neutral' : 'py-6'}`}>
                <div className='max-w-7xl mx-auto flex items-center justify-between'>


                    <div className='w-48'>
                        <h3 className='font-medium text-xl'><span className='text-primary'>Free</span>Templates</h3>
                    </div>
                    <div className='hidden md:flex'>
                        <a className="link link-hover px-4">Features</a>
                        <a className="link link-hover px-4">About</a>
                    </div>
                    <div className='w-48'>
                        <a href='https://camjo.dev/' target='_blank' className="w-full btn btn-primary">Get Access Today</a>

                    </div>
                </div>
            </div>
        </>
    )
}
