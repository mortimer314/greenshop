import Link from 'next/link'
import React from 'react'
import { FiArrowLeft } from "react-icons/fi";

function TopProductCard() {
    return (
        <div className='overflow-hidden h-[240px] rounded-lg border border-solid border-gray-plus-400'>

            {/* <div className="relative bg-[url('/images/topgreen/frame1.png')] transition-bg hover:bg-[length:120%_120%]  h-full bg-cover bg-center bg-no-repeat flex items-center justify-center"> */}
            <div className="relative h-full bg-[url('/images/topgreen/frame1.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center transition-transform duration-200  lg:hover:scale-110 ">

                <Link href='' className="block absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))] ">
                    <div className="text-white flex-col content-end h-full p-5">
                        <div className="mb-2 lg:text-xl">گیاه بونسای</div>
                        <div className="inline-flex flex-nowrap py-2 px-4 gap-x-2 items-center justify-start font-extralight border rounded-xl text-sm lg:text-lg">
                            <span className='text-nowrap'>خرید گیاه بونسای</span>
                            <FiArrowLeft className='lg:w-6 lg:h-6' />
                        </div>
                    </div>
                </Link>
            </div>



            {/* <div className="">
        <Link href='' className='flex-center rounded-xl text-white bg-primary sm:text-lg lg:leading-8 h-10' >مشاهده  بیشتر</Link>
    </div> */}
        </div>
    )
}

export default TopProductCard
