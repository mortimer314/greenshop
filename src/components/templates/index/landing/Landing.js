import React from 'react'
import Link from 'next/link'
import { FiArrowLeft } from "react-icons/fi";

function Landing() {
  return (
    <div className='container text-center mt-10 mb-10 sm:mb-14 lg:mb-20 sm:mt-14 xl:mt-20 flex flex-col-reverse lg:flex-row gap-x-6 justify-between  items-center '>
      <div className="max-w-[539px] ">
        <h1 className='font-morabbaBold mb-8 text-xl font-semibold  mt-10 lg:font-bold lg:text-[40px] lg:leading-[56px]'>خرید راحت گیاه،با <span className='text-primary'>گیاه لند! </span> </h1>
        <p className='text-gray-plus-800 font-normal font-danaMedium text-sm sm:text-xl sm:leading-9'>با گیاه لند،آنلاین گیاه خودت رو سفارش بده و از تخفیف های ویژه استفاده کن.علاوه بر اینها میتونی به صورت رایگان از گیاه پزشک سایت مشاوره بگیری.</p>
        <div className="grid grid-cols-2 gap-x-2 sm:gap-x-6 sm:text-lg lg:leading-8 h-10 sm:h-12 lg:h-14 mt-8">
          <Link className="flex-center rounded-xl text-white bg-primary" href=''>گیاهان تخفیف دار</Link>
          <Link className="flex-center gap-x-px sm:gap-x-2 border border-primary border-dashed rounded-xl text-primary " href=''>
            <span className='text-nowrap'>مشاوره با گیاه پزشک</span>
            <span className='flex-center w-6 h-6 '>
              <FiArrowLeft />
            </span>
          </Link>
        </div>
        <div className="flex items-center justify-between mt-10 lg:mt-12">
          <div className="">
            <div className='mb-1 text-center font-danaBold text-2xl lg:text-[32px] text-primary-dark'>
              <span>945</span>
              <span>+</span>
            </div>
            <span className='text-center font-normal text-lg lg:text-xl font-morabbaMedium text-primary-darker'>گیاه خانگی</span>
          </div>
          <div className="">
            <div className='mb-1 text-center font-danaBold text-2xl lg:text-[32px] text-primary-dark'>
              <span>152</span>
              <span>+</span>
            </div>
            <span className='text-center font-normal text-lg lg:text-xl font-morabbaMedium text-primary-darker'>گیاه تزئینی</span>
          </div>
          <div className="">
            <div className='mb-1 text-center font-danaBold text-2xl lg:text-[32px] text-primary-dark'>
              <span>188</span>
              <span>+</span>
            </div>
            <span className='text-center font-normal text-lg lg:text-xl font-morabbaMedium text-primary-darker'>گیاه کادویی</span>
          </div>
        </div>
      </div>
      <div className="rounded-full px-8 lg:px-0 lg:rounded-none  lg:max-h-[558px]  relative z-0">
        <span className="lg:hidden absolute w-3 h-3 top-12 right-6 text-primary font-bold">
          <svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 0L6.35045 3.64955L10 5L6.35045 6.35045L5 10L3.64955 6.35045L0 5L3.64955 3.64955L5 0Z" fill="#417F56" />
          </svg>
        </span>
        <span className="lg:hidden absolute w-5 h-5 top-[60px] right-2 text-primary font-bold">
          <svg  viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 0L6.35045 3.64955L10 5L6.35045 6.35045L5 10L3.64955 6.35045L0 5L3.64955 3.64955L5 0Z" fill="#417F56" />
          </svg>

        </span>
        <span className="lg:hidden absolute w-5 h-5  bottom-[60px] left-2 text-primary font-bold">
          <svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 0L6.35045 3.64955L10 5L6.35045 6.35045L5 10L3.64955 6.35045L0 5L3.64955 3.64955L5 0Z" fill="#417F56" />
          </svg>
        </span>
        <span className="lg:hidden absolute w-3 h-3 bottom-12 left-6 text-primary font-bold">
          <svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 0L6.35045 3.64955L10 5L6.35045 6.35045L5 10L3.64955 6.35045L0 5L3.64955 3.64955L5 0Z" fill="#417F56" />
          </svg>
        </span>
        <img className='hidden lg:inline-block w-fit h-fit' src='/images/banner.png' />
        <img className='lg:hidden inline-block w-fit h-fit' src='/images/mobile-banner.png' />
      </div>
    </div>
  )
}

export default Landing
