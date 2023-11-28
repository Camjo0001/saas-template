import React from 'react'
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="footer p-4 sm:px-6 md:p-10 flex max-w-7xl justify-between items-end md:items-center">
            <aside>
                <Image alt='pfp' loading='lazy' width={48} height={48} className='rounded-full ' src={'/pfp.jpg'} />
                <p className='font-medium'>camjo.dev<br />Make Your Landing Page <span className='italic'>Stand Out</span></p>
            </aside>
            <nav>
                <header className="footer-title">Social</header>
                <div className="grid grid-flow-col gap-4">
                    <a href='' target='_blank' className=''>
                        <svg width="24" height="24" viewBox="0 0 396 396" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className='fill-neutral' d="M301.026 37.125H355.608L236.362 173.415L376.645 358.875H266.805L180.774 246.395L82.335 358.875H27.72L155.265 213.098L20.691 37.125H133.32L211.084 139.937L301.026 37.125ZM281.869 326.205H312.114L116.886 68.079H84.4305L281.869 326.205Z" fill="white" />
                        </svg>

                    </a>
                    <a href='' target='_blank' className=''>

                        <svg height="24" width="24" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 461.001 461.001" >
                            <g>
                                <path className='fill-neutral' d="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728
                                    c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137
                                    C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607
                                    c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z"/>
                            </g>
                        </svg>
                    </a>
                </div>
            </nav>
        </footer>
    )
}
