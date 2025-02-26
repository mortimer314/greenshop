import Link from 'next/link'
import React, { useState } from 'react'

import { MdOutlineShoppingCart, MdLogin, MdOutput } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";


function Navbar() {

    const [searchBox, setSearchBox] = useState(false)
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    return (
        <nav className='container sm:border-b relative z-10 border-gray-plus-400 py-3 '>
            {/* desktop menu */}
            <main className='flex items-center justify-between'>
                <div className='flex items-center gap-x-6'>
                    <div className='flex-center gap-x-2 '>
                        <div onClick={() => { setShowMobileMenu(true) }} className='lg:hidden sm:w-12 sm:h-12 w-8 h-8 [&_svg]:w-5 [&_svg]:h-5 bg-gray-plus-300 rounded-xl flex-center cursor-pointer'>
                            <IoMenu />
                        </div>
                        <Link className='section-title' href="/">
                            گیاه لند
                        </Link>
                    </div>

                    <ul className='hidden  lg:flex items-center text-lg gap-x-8 [&_li]:transition-all [&_li]:duration-200 '>
                        <li className='hover:text-primary text-primary'>
                            <Link href="/">
                                صفحه اصلی
                            </Link>
                        </li>
                        <li className='hover:text-primary'>
                            <Link href="/herbalist">
                                گیاه پزشک
                            </Link>
                        </li>
                        <li className='hover:text-primary'>
                            <Link href="/blog">
                                وبلاگ
                            </Link>
                        </li>
                        <li className='hover:text-primary'>
                            <Link href="/contact-us">
                                تماس با ما
                            </Link>
                        </li>
                        <li className='hover:text-primary'>
                            <Link href="/about-us">
                                درباره ما
                            </Link>
                        </li>

                    </ul>

                </div>
                <div className='flex items-center gap-x-2 sm:gap-x-4  text-primary  sm:[&>*]:rounded-lg [&>*]:rounded-xl sm:[&>*]:h-12 [&>*]:h-8  [&_a]:flex-center [&_a]:h-full [&_a]:w-full  sm:[&_svg]:h-6 sm:[&_svg]:w-6  [&_svg]:h-5 [&_svg]:w-5 [&>*]:border [&>*]:border-solid [&>*]:border-primary'>
                    <div onClick={() => { setSearchBox(!searchBox) }} className='hidden sm:flex-center sm:w-12 w-8 cursor-pointer hover:bg-primary/10 transition-colors duration-150'>
                        <IoMdSearch />
                    </div>
                    <div className='sm:w-12 w-8 flex-center hover:bg-primary/10 transition-colors duration-150'>
                        <Link href="/shopping-card">
                            <MdOutlineShoppingCart />
                        </Link>
                    </div>
                    <div className='w-8 sm:w-[154px] flex-center hover:bg-primary/10 transition-colors duration-150'>
                        <Link className='flex-center gap-x-2.5 sm:px-2 ' href="/logein-register">
                            <MdLogin className='hidden sm:flex' />
                            <MdOutput className='sm:hidden flex' />
                            <span className='hidden sm:inline'>
                                ورود/ثبت نام
                            </span>
                        </Link>
                    </div>
                </div>

            </main>

            {/* search box */}
            <div className={`${searchBox ? 'sm:h-0' : "sm:max-h-14"} transition-all ease-linear duration-300 flex font-danaBold text-sm items-center mx-auto h-10 mt-3  bg-gray-plus-300 rounded-md overflow-hidden text-primary-dark/95`}>
                <div className='flex-center text-inherit transition-colors duration-200 h-full pr-3 pl-2 bg-gray-plus-400 hover:bg-gray-plus-500'>
                    <IoMdSearch className='w-5 h-5'/>
                </div>
                <input type="text" placeholder='جستجو گیاه  ...' className='black outline-none pr-2 bg-inherit w-full h-full  placeholder:text-gray-plus-600-500' />
            </div>

            {/* mobile menu */}
            <div className={`${showMobileMenu ? "h-screen pt-4" : "h-0"} inset-0 l:hidden border border-b-2 flex justify-between flex-row-reverse transition-all  duration-500 container fixed z-50 top-0  bg-white overflow-hidden`}>
                <span className='w-8 h-8 rounded-md  flex-center mr-auto border-2 border-primary/60 text-primary cursor-pointer hover:bg-primary/25' onClick={() => { setShowMobileMenu(false) }}>
                    <RxCross2 />
                </span>
                <ul className=' flex flex-col items-start pt-1  gap-y-3 [&_li]:transition-all [&_li]:duration-200 '>
                    <li className='hover:text-primary text-primary'>
                        <Link href="/">
                            صفحه اصلی
                        </Link>
                    </li>
                    <li className='hover:text-primary'>
                        <Link href="/herbalist">
                            گیاه پزشک
                        </Link>
                    </li>
                    <li className='hover:text-primary'>
                        <Link href="/blog">
                            وبلاگ
                        </Link>
                    </li>
                    <li className='hover:text-primary'>
                        <Link href="/contact-us">
                            تماس با ما
                        </Link>
                    </li>
                    <li className='hover:text-primary'>
                        <Link href="/about-us">
                            درباره ما
                        </Link>
                    </li>

                </ul>
            </div>

        </nav>
    )
}

export default Navbar
