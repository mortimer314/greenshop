import Link from 'next/link';
import React from 'react'
import { TfiMoreAlt } from "react-icons/tfi";
import { MdOutlineStore } from "react-icons/md";

function ProductDetails() {
    return (
        <div className='flex justify-between flex-wrap lg:flex-nowrap sm:gap-x-4 xl:gap-x-20 '>
            <div className="w-full items-center grid grid-cols-1 sm:grid-cols-2 gap-x-7">
                <div className="">
                    <div className="flex-center lg:block">
                        <img className='' src='/images/apartment/Frame123.png' alt="" />
                    </div>
                    <ul className="flex justify-center md:justify-between xl:justify-start w-full gap-x-1 xl:gap-x-3">
                        <li className='flex-center overflow-hidden cursor-pointer size-16 md:size-20 xl:size-[100px] border border-gray-plus-500 rounded-lg'>
                            <div className="overflow-hidden hover:scale-105 transition-all size-14 md:size-16 xl:size-20 rounded-[4px] bg-[url(/images/apartment/image9.png)] bg-no-repeat bg-cover bg-center"></div>
                        </li>
                        <li className='flex-center overflow-hidden cursor-pointer size-16 md:size-20 xl:size-[100px] border border-gray-plus-500 rounded-lg'>
                            <div className="overflow-hidden hover:scale-105 transition-all size-14 md:size-16 xl:size-20 rounded-[4px] bg-[url(/images/apartment/image10.png)] bg-no-repeat bg-cover bg-center"></div>
                        </li>
                        <li className='flex-center overflow-hidden cursor-pointer size-16 md:size-20 xl:size-[100px] border border-gray-plus-500 rounded-lg'>
                            <div className="overflow-hidden hover:scale-105 transition-all size-14 md:size-16 xl:size-20 rounded-[4px] bg-[url(/images/apartment/image12.png)] bg-no-repeat bg-cover bg-center"></div>
                        </li>
                        <li className='flex-center overflow-hidden cursor-pointer size-16 md:size-20 xl:size-[100px] border border-gray-plus-500 rounded-lg relative'>
                            <div className="flex-center hover:scale-105 transition-all overflow-hidden w-full h-full bg-[rgba(255,255,255,0.7)]  rounded-[4px]  bg-no-repeat bg-cover bg-center">
                                <TfiMoreAlt className='w-6 h-6 text-gray-plus-800' />
                            </div>
                            <div className="absolute w-full h-full bg-[url(/images/apartment/image12.png)] bg-no-repeat bg-cover bg-center -z-10"></div>
                        </li>

                    </ul>
                </div>
                <div className="">
                    <div className="sm:border-b border-gray-plus-550">
                        <Link href='/' className='hidden sm:inline-block text-primary hover:text-primary-dark'>
                            نهال و گیاهان آپارتمانی
                        </Link>
                        <h5 className='text-center sm:text-right my-8 sm:my-4 text-gray-plus-900 sm:text-xl font-semibold'>گیاه طبیعی یوکا</h5>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 sm:mt-7 pb-4 sm:pb-0 border-b border-gray-plus-500 sm:border-none">
                        <p className='hidden sm:block mb-4'>ویژگی ها</p>

                        {/* show less than 3 items in mobile and in desktop show less than 6 items */}

                        {/* desktop template */}
                        <ul className='hidden sm:grid grid-cols-2 gap-x-4 sm:gap-x-6 sm:gap-y-10'>
                            <li className='flex flex-col gap-y-1 sm:gap-y-1 font-danaMedium py-1 sm:py-1.5 px-3 sm:px-4 bg-gray-plus-300 rounded-lg'>
                                <span className='text-xs sm:text-sm/6 text-gray-plus-800 font-medium '>جنس گلدان:</span>
                                <span className='text-xs sm:text-base/7 font-normal text-gray-plus-950'>پلاستیکی</span>
                            </li>
                            <li className='flex flex-col gap-y-1 sm:gap-y-1 font-danaMedium py-1 sm:py-1.5 px-3 sm:px-4 bg-gray-plus-300 rounded-lg'>
                                <span className='text-xs sm:text-sm/6 text-gray-plus-800 font-medium '>خاک گیاه:</span>
                                <span className='text-xs sm:text-base/7 font-normal text-gray-plus-950'>خاک گلدانی</span>
                            </li>
                            <li className='flex flex-col gap-y-1 sm:gap-y-1 font-danaMedium py-1 sm:py-1.5 px-3 sm:px-4 bg-gray-plus-300 rounded-lg'>
                                <span className='text-xs sm:text-sm/6 text-gray-plus-800 font-medium '>وزن</span>
                                <span className='text-xs sm:text-base/7 font-normal text-gray-plus-950'>۴۰۰۰ گرم</span>
                            </li>
                            <li className='flex flex-col gap-y-1 sm:gap-y-1 font-danaMedium py-1 sm:py-1.5 px-3 sm:px-4 bg-gray-plus-300 rounded-lg'>
                                <span className='text-xs sm:text-sm/6 text-gray-plus-800 font-medium '>ابعاد</span>
                                <span className='text-xs sm:text-base/7 font-normal text-gray-plus-950'>۲۵۰x۲۵۰x۸۰۰</span>
                            </li>
                            <li className='flex flex-col gap-y-1 sm:gap-y-1 font-danaMedium py-1 sm:py-1.5 px-3 sm:px-4 bg-gray-plus-300 rounded-lg'>
                                <span className='text-xs sm:text-sm/6 text-gray-plus-800 font-medium '>وضعیت نسبت به آفتاب</span>
                                <span className='text-xs sm:text-base/7 font-normal text-gray-plus-950'>آفتاب دوست</span>
                            </li>
                        </ul>

                        {/* mobile template */}

                        <ul className='sm:hidden grid grid-cols-2 gap-x-4 sm:gap-x-6 sm:gap-y-10'>
                            <li className='flex flex-col gap-y-1 sm:gap-y-1 font-danaMedium py-1 sm:py-1.5 px-3 sm:px-4 bg-gray-plus-300 rounded-lg'>
                                <span className='text-xs sm:text-sm/6 text-gray-plus-800 font-medium '>جنس گلدان:</span>
                                <span className='text-xs sm:text-base/7 font-normal text-gray-plus-950'>پلاستیکی</span>
                            </li>
                            <li className='flex flex-col gap-y-1 sm:gap-y-1 font-danaMedium py-1 sm:py-1.5 px-3 sm:px-4 bg-gray-plus-300 rounded-lg'>
                                <span className='text-xs sm:text-sm/6 text-gray-plus-800 font-medium '>خاک گیاه:</span>
                                <span className='text-xs sm:text-base/7 font-normal text-gray-plus-950'>خاک گلدانی</span>
                            </li>
                        </ul>

                        <div className="flex-center sm:mt-10">
                            <button className="section-button-secondary">مشاهده همه ویژگی ها</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center w-full lg:max-w-80">
                <div className="w-full py-6 lg:py-8 px-4 lg:px-6 lg:rounded-2xl border-b lg:border border-gray-plus-500">
                    <p className='mb-6 text-gray-plus-900 text-base/[22px]'>فروشنده</p>
                    <div className="flex items-center">
                        <div className="flex flex-nowrap text-base/7 gap-x-2 pl-3 border-l border-gray-plus-600 text-gray-plus-900">
                            <MdOutlineStore className='w-6 h-6' />
                            <span>فلاور گاردن</span>
                        </div>
                        <div className="pr-3 text-sm/6 font-semibold">
                            <span className='text-gray-plus-950'>عملکرد &nbsp;</span>
                            <span className='text-primary'>عالی</span>
                        </div>
                    </div>
                    <div className="py-6 pr-4  border-b border-gray-plus-550">
                        4.6
                    </div>
                    <div className="flex items-center justify-between py-7">
                        <span className='text-sm sm:text-base'>قیمت:</span>
                        <div className="flex items-center gap-x-1 text-lg sm:text-xl ">
                            <span className=''>۵۶۰/۰۰۰ </span>
                            <span className=''>تومان</span>
                        </div>
                    </div>
                    <button className='section-button w-full'>افزودن به سبد خرید</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
