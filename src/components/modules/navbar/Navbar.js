import Link from 'next/link'
import React from 'react'

import { MdOutlineShoppingCart, MdLogin } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";

function Navbar() {
    return (
        <nav className='bg-red-400'>
            {/* desktop menu */}
            <main >
                <div>
                    <div>
                        <Link href="/">
                            گیاه لند
                        </Link>
                    </div>

                    <ul>
                        <li>
                            <Link href="/">
                                صفحه اصلی
                            </Link>
                        </li>
                        <li>
                            <Link href="/herbalist">
                                گیاه پزشک
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog">
                                وبلاگ
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact-us">
                                تماس با ما
                            </Link>
                        </li>
                        <li>
                            <Link href="/about-us">
                                درباره ما
                            </Link>
                        </li>

                    </ul>

                </div>
                <div>
                    <div>
                        <IoMdSearch />
                    </div>
                    <div>
                        <Link href="/shopping-card">
                            <MdOutlineShoppingCart />
                        </Link>
                        {/* <span>2</span> */}
                    </div>
                    <div>
                        <Link href="/logein-register">
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
