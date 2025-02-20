import Link from 'next/link'
import React from 'react'

import { MdOutlineShoppingCart, MdLogin } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";

function Navbar() {
    return (
        <nav className='border-b border-gray-plus-400 py-6'>
            {/* desktop menu */}
            <main className='flex items-center justify-between'>
                <div className='flex items-center gap-x-6'>
                    <div className='text-primary font-morabbaBold text-2xl'>
                        <Link className='flex items-center' href="/">
                            گیاه لند
                        </Link>
                    </div>

                    <ul className='flex items-center text-lg gap-x-8 [&_li]:transition-all [&_li]:duration-200 '>
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
                <div className='flex items-center gap-x-4  text-primary [&>*]:rounded-xl [&>*]:flex-center [&>*]:h-12 [&_a]:flex-center [&_a]:h-full [&_a]:w-full [&_svg]:h-6 [&_svg]:w-6 [&>*]:border [&>*]:border-solid [&>*]:border-primary'>
                    <div className='w-12 cursor-pointer'>
                        <IoMdSearch />
                    </div>
                    <div className='w-12'>
                        <Link href="/shopping-card">
                            <MdOutlineShoppingCart />
                        </Link>
                        {/* <span>2</span> */}
                    </div>
                    <div className='w-[154px]'>
                        <Link className='flex-center gap-x-2.5 px-2 ' href="/logein-register">
                            <MdLogin />
                            ورود/ثبت نام
                        </Link>
                    </div>
                </div>

            </main>

            {/* mobile menu */}


        </nav>
    )
}

export default Navbar
