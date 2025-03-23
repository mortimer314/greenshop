import Link from 'next/link'
import React from 'react'
import { VscHome } from "react-icons/vsc";
import { MdKeyboardArrowLeft } from "react-icons/md";

function Breadcrumb() {
    return (
        <div className='flex items-center gap-x-1 text-sm md:text-lg [&_a]:text-primary  [&>*]:text-gray-plus-600'>
            <Link href='/' className='flex items-center gap-x-1'>
                <VscHome className='w-4 h-4 md:w-6 md:h-6' />
                <span>
                    خانه
                </span>
            </Link>
            <MdKeyboardArrowLeft className='w-4 h-4 md:w-6 md:h-6' />
            <Link href='/' className='flex'>
                گیاه طبیعی
            </Link>
            <MdKeyboardArrowLeft className='w-4 h-4 md:w-6 md:h-6' />
            <span>گیاه یوکا</span>
        </div>
    )
}

export default Breadcrumb
