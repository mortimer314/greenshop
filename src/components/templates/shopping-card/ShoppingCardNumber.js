import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { MdOutlineDelete } from 'react-icons/md'

function ShoppingCardNumber() {
    return (
        <div >

            <div className="flex shrink-0 gap-x-3 md:gap-x-6">
                
                <img className='max-w-36 md:max-w-40 ' src="/images/apartment/image.png" alt="" />

                <div className="space-y-4 ">

                    <div className='font-semibold md:text-xl text-gray-plus-900'>گیاه طبیعی یوکا</div>

                    <div className='md:text-lg text-gray-plus-950'>فلاور گاردن</div>

                    <div className="flex items-center gap-x-2 md:gap-x-6 justify-between ">
                        <span className='text-sm sm:text-base text-gray-plus-800'>قیمت:</span>
                        <div className="flex items-center gap-x-1  sm:text-lg text-gray-plus-950">
                            <span className=''>۵۶۰/۰۰۰ </span>
                            <span className='text-sm font-danaBold'>تومان</span>
                        </div>
                    </div>

                    <div className="hidden md:flex justify-between px-5 py-1.5 rounded-lg border border-gray-plus-550">

                        <button>
                            <FaPlus className='text-[#396F4B] w-6 h-6' />
                        </button>

                        <div className="flex flex-col items-center justify-center text-gray-plus-900">
                            <span className='text-xl text-center'>1</span>
                            <span className='text-sm'>تعداد</span>
                        </div>

                        <button>
                            {/* {<FaMinus className='text-[#396F4B] w-6 h-6' />} */}
                            <MdOutlineDelete className='w-7 h-7 text-[#ED2E2E]' />
                        </button>

                    </div>
                </div>
            </div>

            <div className="md:hidden max-w-36 flex justify-between px-2 py-1.5 rounded-lg border border-gray-plus-550">

                <button>
                    <FaPlus className='text-[#396F4B] w-5 h-5' />
                </button>

                <div className="flex flex-col items-center justify-center text-gray-plus-900">
                    <div className='text-center'>1</div>
                    <div className='-mt-1 text-xs'>تعداد</div>
                </div>

                <button>
                    {/* <FaMinus className='text-[#396F4B] w-5 h-5'/> */}
                    <MdOutlineDelete className='w-6 h-6 text-[#ED2E2E]' />
                </button>

            </div>
        </div>
    )
}

export default ShoppingCardNumber
