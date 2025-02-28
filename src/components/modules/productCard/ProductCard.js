import Link from 'next/link'
import React from 'react'

function ProductCard() {
    return (
        <div className='overflow-hidden p-4 rounded-xl border border-solid border-gray-plus-400'>
            
            <div className="flex-center">
                <img className='max-w-[195px] sm:max-w-64 max-h-[261px]' src='/images/apartment/Frame 11.png' />
            </div>

            <div className="my-4 text-lg">
                <div className="mb-2">گیاه طبیعی یوکا</div>
                <div className="flex justify-between items-center">
                    <div className='text-sm'>قیمت:</div>
                    <div>
                        <span >۵۶۰,۰۰۰ </span>
                        <span>تومان</span>
                    </div>
                </div>
            </div>

            <div className="">
                <Link href='' className='flex-center rounded-xl text-white bg-primary sm:text-lg lg:leading-8 h-10' >مشاهده  بیشتر</Link>
            </div>
        </div>
    )
}

export default ProductCard
