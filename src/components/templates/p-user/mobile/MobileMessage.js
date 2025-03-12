import React from 'react'
import Title from '../components/Title'
import { MdKeyboardArrowLeft } from "react-icons/md";
import DetailsWrapper from '../components/DetailsWrapper';

function MobileMessage() {
    return (
        <div className="py-6 container">
            <Title title="پیام های دریافتی" />
            <DetailsWrapper className="transition-all duration-150 hover:border hover:border-gray-plus-500">
                <div className="flex items-center justify-between cursor-pointer ">
                    <div className="flex gap-x-3 items-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-plus-400">
                            <img className='h-full w-full rounded-full' src="/images/p-user/messageImg.png" alt="" />
                        </div>
                        <div className="flex flex-col justify-center gap-2 h-14">
                            <span className='text-sm text-gray-plus-900 font-medium'>دکتر ورمزیار</span>
                            <span className='text-xs text-gray-plus-600'>۱ پیام خوانده نشده</span>
                        </div>
                    </div>
                    <div className="cursor-pointer text-[#909090] hover:text-gray-plus-700">
                        <MdKeyboardArrowLeft className='w-6 h-6' />
                    </div>
                </div>
            </DetailsWrapper>


        </div>
    )
}

export default MobileMessage
