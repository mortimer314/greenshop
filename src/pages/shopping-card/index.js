import Breadcrumb from '@/components/modules/breadcrumb/Breadcrumb'
import Footer from '@/components/modules/footer/Footer'
import Navbar from '@/components/modules/navbar/Navbar'
import { FaPlus, FaMinus } from "react-icons/fa6";
import { MdOutlineDelete } from "react-icons/md";
import React from 'react'
import ShoppingCardNumber from '@/components/templates/shopping-card/shoppingCardNumber';
import EmptyBasket from '@/components/templates/shopping-card/EmptyBasket';


function index() {
    return (
        <>
            <Navbar />
            {/* if user basket is not empty */}
            <div className=" mt-2 xl:mt-6 ">

                <div className="container">
                    <Breadcrumb />
                </div>

                <div className="py-10 lg:pb-32 lg:pt-24 md:container">
                    <div className='flex justify-between flex-wrap md:flex-nowrap md:gap-x-2 xl:gap-x-20 '>

                        <div className="px-6 sm:px-0 sm:mx-4 md:mx-0  w-full border-b md:rounded-2xl md:border border-gray-plus-500">
                            <div className="sm:px-6 py-6  space-y-8">
                                <p className=' sm:mb-11 lg:mb-14'>سبد خرید شما</p>

                                <ShoppingCardNumber />
                                <ShoppingCardNumber />
                                <ShoppingCardNumber />
                                <ShoppingCardNumber />


                            </div>
                        </div>

                        <div className="px-4 md:px-0 w-full md:max-w-80">
                            <div className="flex flex-col sticky top-4 gap-y-8 w-full py-6 md:py-8 md:px-6 md:rounded-2xl md:border border-gray-plus-500">

                                <div className="flex items-center justify-between ">
                                    <span className='text-sm sm:text-base text-gray-plus-800'>تعداد گیاه</span>
                                    <div className="sm:text-xl text-gray-plus-950">
                                        1
                                    </div>
                                </div>
                                <div className="flex items-center justify-between ">
                                    <span className='text-sm sm:text-base text-gray-plus-800'>مجموع سبد خرید:</span>
                                    <div className="flex items-center gap-x-1  sm:text-xl text-gray-plus-950">
                                        <span className=''>۵۶۰/۰۰۰ </span>
                                        <span className='text-sm font-danaBold'>تومان</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between ">
                                    <span className='text-sm sm:text-base text-gray-plus-800'>ارسال توسط:</span>
                                    <div className="sm:text-xl text-gray-plus-950">
                                        گیاه لند
                                    </div>
                                </div>

                                <label className="flex items-center gap-x-2 py-2.5 px-2 bg-gray-plus-300 rounded-xl">
                                    <span>کد تخفیف:</span>
                                    <input className='bg-inherit text-sm outline-none text-gray-plus-900 tracking-[5px] placeholder:tracking-normal font-shabnam' type="text" placeholder='کد تخفیف را وارد کنید' />
                                </label>

                                <button className='section-button w-full'>سفارش و خرید</button>
                            </div>
                        </div>
                    </div>

                </div>


            </div>

            {/* if user basket is empty */}
            {/* <div className="container">
                <Breadcrumb />
            </div>

            <EmptyBasket /> */}

            <Footer />
        </>
    )
}

export default index
