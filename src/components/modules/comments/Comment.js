import React from 'react'
import { MdStar } from "react-icons/md";
import { IoMdHeart } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoReturnUpForward } from "react-icons/io5";
import { TfiMoreAlt } from "react-icons/tfi";


function Comment() {
    return (
        <div className='sm:p-5 pb-0 flex gap-x-6'>

            <div className="shrink-0">
                <img src="/images/p-user/userImg.png" alt="" className='w-14 h-14 rounded-full' />
            </div>

            <div className="w-full sm:border-b border-[#E9EAEE]">

                <div className="flex">
                    <div className="w-full text-xs md:text-base text-gray-plus-950 font-danaMedium pt-4 pb-10 sm:border-b border-gray-plus-400">یاسر منصوری</div>
                    <div className="flex flex-col-reverse sm:flex-row items-start gap-x-2 gap-y-4 pt-4 mb-2 md:py-6 text-gray-plus-800">
                        <div className="flex-center  md:h-8 gap-x-1 text-xs text-gray-plus-600">
                            <span>4</span>
                            <span className='text-nowrap'>روز پیش</span>
                        </div>
                        <div className="flex gap-x-2">
                            <div className="flex-center md:w-8 md:h-8 ">
                                <IoMdHeartEmpty className='w-5 h-5  ' />
                                {/* <IoMdHeart className='w-5 h-5  text-rose-500' /> */}
                            </div>
                            <div className="flex-center md:w-8 md:h-8 ">
                                <IoReturnUpForward className='w-5 h-5  ' />
                            </div>
                            <div className="flex-center md:w-8 md:h-8 ">
                                <TfiMoreAlt className='w-5 h-5  ' />

                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col mr-4 sm:mr-0 pt-4 pb-6 gap-y-4  border-t border-gray-plus-400 sm:border-none ">

                    <dive className='flex justify-center items-center gap-1.5 bg-gray-plus-200 rounded-lg w-12 h-8'>
                        <MdStar className='text-yellow-400' />
                        <span className='inline-block mt-1 text-[#909090]'>5</span>
                    </dive>

                    <span className='text-gray-plus-800 text-sm/6'>گیاه یوکا یکی از گیاهان مورد علاقه من هست و از خریدم راضی هستم</span>
                </div>
            </div>
        </div>
    )
}

export default Comment
