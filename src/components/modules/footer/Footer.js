import Link from 'next/link'
import React from 'react'
import { LiaTelegramPlane } from "react-icons/lia";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <footer className='bg-gray-plus-200 pt-6 pb-6 sm:pb-10'>
            <main className='container flex flex-col-reverse lg:grid lg:grid-cols-2 lg:gap-x-36 justify-between'>
                <div className="max-w-[494px] mt-16 lg:mt-0">
                    <Link className='section-title' href="/">
                        گیاه لند
                    </Link>
                    <p className='mt-6 text-justify text-gray-plus-700 font-danaMedium leading-7'>
                        گیاه لند سعی بر این دارد با ارائه خدمات نوین در حوزه فروش گیاهان باعث راحتی
                        شما در خرید انواع گیاه شود.تنوع گیاهان و همچنین ایجاد بستری مناسب برای مشاوره با گیاه پزشک از دیگر مزیت های گیاه لند میباشد.
                    </p>
                    <div className="flex justify-between items-center mt-4 ">

                        {/* contact ways */}
                        <div className=" text-sm text-gray-plus-700 font-danaMedium leading-7">
                            <p>
                                <span>تلفن پشتیبانی:  02112345678</span>
                            </p>
                            <div className="flex gap-x-4 mt-3 [&_svg]:w-5 [&_svg]:h-5">
                                <Link href='/'>
                                    <FaLinkedin />
                                </Link>
                                <Link href='/'>
                                    <LiaTelegramPlane />
                                </Link>
                                <Link href='/'>
                                    <FaInstagram />
                                </Link>
                            </div>
                        </div>

                       {/* licences */} 
                        <div>
                            <Link href=''>
                                <img src='/images/enamad.png' />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-3 min-w-80 max-w-[600px]">
                    <div className="transition-colors duration-700 flex flex-col gap-y-4 leading-9 text-sm  sm:text-xl text-gray-plus-700 [&_a]:transition-colors [&_a]:duration-300 [&_a:hover]:text-gray-plus-900 lg:[&_a:first-child]:font-semibold lg:[&_a:first-child]:leading-7">
                        <Link href="">آپارتمانی</Link>
                        <Link href="">بابا آدم</Link>
                        <Link href="">یوکا</Link>
                        <Link href="">سانسوریا</Link>
                    </div>
                    <div className="transition-colors duration-700 flex flex-col gap-y-4 leading-9 text-sm sm:text-xl text-gray-plus-700 [&_a]:transition-colors [&_a]:duration-300 [&_a:hover]:text-gray-plus-900 [&_a:first-child]:font-semibold [&_a:first-child]:leading-7">

                        <Link href="">تزئینی</Link>
                        <Link href="">یشم</Link>
                        <Link href="">کراسولا</Link>
                        <Link href="">کراسولا خرفه ای</Link>
                    </div>
                    <div className="transition-colors duration-700 flex flex-col gap-y-4 leading-9 text-sm sm:text-xl text-gray-plus-700 [&_a]:transition-colors [&_a]:duration-300 [&_a:hover]:text-gray-plus-900 [&_a:first-child]:font-semibold [&_a:first-child]:leading-7">

                        <Link href="">کادویی</Link>
                        <Link href="">آنتوریوم</Link>
                        <Link href="">بونسای</Link>
                        <Link href="">بنت قنسول</Link>
                    </div>

                </div>
            </main>

        </footer>
    )
}

export default Footer
