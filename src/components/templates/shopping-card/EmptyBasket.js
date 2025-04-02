import Link from 'next/link'
import React from 'react'
import { FiArrowLeft } from "react-icons/fi";

function EmptyBasket() {
    return (
        <div className='container flex flex-col items-center text-center mt-24 mb-52 '>


            <svg className='w-40 md:w-auto' xmlns="http://www.w3.org/2000/svg" width="261" height="250" viewBox="0 0 261 250" fill="none">
                <g opacity="0.8">
                    <path d="M133.864 59.6987L260.793 70.8327V238.866L133.864 227.732V59.6987Z" fill="#C47212" />
                    <path d="M133.863 59.6987L59.8682 70.8327V238.866L133.863 227.732V59.6987Z" fill="#D77D14" />
                    <path d="M173.436 250L59.8682 238.866V70.8328L173.436 81.9668V250Z" fill="#E69632" />
                    <path d="M173.437 250L260.792 238.866V70.8328L173.437 81.9668V250Z" fill="#D77D14" />
                    <path opacity="0.15" d="M59.8682 133.437L126.953 94.4793L143.474 79.0297L67.7133 71.6033L61.5339 75.2708L59.8682 76.8986V133.437Z" fill="black" />
                    <path d="M57.0809 68.5903L0.208008 124.109L17.8288 148.584L74.7039 93.0675L57.0809 68.5903Z" fill="#D77D14" />
                    <path d="M57.0801 68.5903L172.594 0L190.215 24.4749L74.7031 93.0675L57.0801 68.5903Z" fill="#C47212" />
                    <path d="M122.5 87.7988L17.8288 148.584L0.208008 124.109L104.879 63.3239L122.5 87.7988Z" fill="#E69632" />
                    <path d="M122.5 87.7988L190.215 24.4749L172.594 0L104.879 63.3239L122.5 87.7988Z" fill="#D77D14" />
                    <path d="M0.208008 124.109L57.0809 68.5903L172.595 0L104.879 63.3239L0.208008 124.109Z" fill="#FFAE55" />
                </g>
            </svg>
            <div className="">
                <p className='mb-2 mt-10 md:text-xl font-semibold'>سبد خرید شما خالی می باشد!</p>
                <p className='text-sm md:text-lg'>می توانید برای مشاهده بیشتر محصولات به صفحه اصلی بروید</p>

                <div className="text-center mt-4 md:mt-6 ">
                    <Link href='/' className='block w-fit m-auto py-1.5 md:py-3 px-2 md:px-4 border hover:bg-primary-light transition-all border-primary text-primary rounded-xl text-sm md:text-lg'>
                        
                        <span>بازگشت به صفحه اصلی</span>
                        <FiArrowLeft  className='mr-2 hidden md:inline-block w-6 h-6'/>

                    </Link>
                </div>
            </div>

        </div>
    )
}

export default EmptyBasket
