import React from 'react'
import Image from 'next/image'
export default function Pricing() {
    return (
        <div className=' flex flex-col items-center justify-between max-w-7xl gap-y-12 my-24 mx-auto'>
            <div className='text-center max-w-5xl mx-auto flex flex-col gap-y-4 items-center'>
                <div className="badge badge-primary bg-primary/25 badge-outline p-[10px]">Start For Free</div>
                <h2 className='text-5xl font-bold'>Experience Premium Features at Zero Cost</h2>
                {/* <p className='text-lg'>Unleash Creative Freedom with DaisyUI Integration – Design and Build with the Best in Modern Web Technologies</p> */}
            </div>
            <div className="w-64 p-4 bg-base-100 border-2 border-primary text-neutral shadow-lg rounded-2xl">
                <div className="flex items-center justify-between">
                    <p className="mb-4 text-4xl font-medium">
                        Free
                    </p>
                    <p className="flex flex-col text-3xl font-bold">
                        $0
                        <span className="text-sm font-thin text-right">
                            forever
                        </span>
                    </p>
                </div>
                <p className="mt-4  text-md">
                    What's included :
                </p>
                <ul className="w-full mt-6 mb-6 text-sm">
                    <li className="mb-3 flex items-center ">
                        <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="white" viewBox="0 0 1792 1792">
                            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                            </path>
                        </svg>
                        Next.js template
                    </li>
                    <li className="mb-3 flex items-center ">
                        <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="white" viewBox="0 0 1792 1792">
                            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                            </path>
                        </svg>
                        Tailwind styles
                    </li>
                    <li className="mb-3 flex items-center ">
                        <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="white" viewBox="0 0 1792 1792">
                            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                            </path>
                        </svg>
                        Component Files
                    </li>
                    <li className="mb-3 flex items-center ">
                        <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="white" viewBox="0 0 1792 1792">
                            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                            </path>
                        </svg>
                        Modern Design
                    </li>
                    
                   
                    
                </ul>
                <a href='https://camjo.dev/' target='_blank' className="btn btn-primary w-full">Start Using This Template</a>

            </div>

        </div>
    )
}
