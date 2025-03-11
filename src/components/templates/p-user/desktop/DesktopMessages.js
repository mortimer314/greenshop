import React from 'react'
import Title from '../components/Title'
import DetailsWrapper from '../components/DetailsWrapper'
import { MdKeyboardArrowLeft } from "react-icons/md";

function DesktopMessages() {
  return (
    <div>
      <div className="pt-10 pr-6">
        <Title title="پیام های دریافتی" />

        <DetailsWrapper className="!p-0 transition-all duration-150 hover:border hover:border-gray-plus-500">
          <div className="flex items-center justify-between cursor-pointer p-6">
            <div className="flex gap-x-3">
              <div className="w-[60px] h-[60px] rounded-full overflow-hidden border border-gray-plus-400">
                <img className='h-full w-full rounded-full' src="/images/p-user/messageImg.png" alt="" />
              </div>
              <div className="flex flex-col justify-between">
                <span className='text-gray-plus-900 font-medium'>دکتر ورمزیار</span>
                <span className='text-gray-plus-600'>۱ پیام خوانده نشده</span>
              </div>
            </div>
            <div className="cursor-pointer text-[#909090] hover:text-gray-plus-700">
              <MdKeyboardArrowLeft className='w-6 h-6' />
            </div>
          </div>
        </DetailsWrapper>

      </div>
    </div>
  )
}

export default DesktopMessages
