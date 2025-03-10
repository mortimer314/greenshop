import React from 'react'
import Title from '../components/Title'
import DetailsWrapper from '../components/DetailsWrapper'
import { FaUser } from "react-icons/fa";


function DesktopAccountDetails() {

  const userData = { img: true }


  return (
    <div>
      <div className="pt-10 pr-6">
        <Title title="مشخصات حساب کاربری" />
        <DetailsWrapper>

          {/* profile picture */}
          <div className="flex items-center flex-wrap justify-start gap-2 md:gap-4 mb-8 md:mb-12">

            <div className="flex-center w-20 md:w-20 h-20 md:h-20 rounded-full overflow-hidden bg-gray-100 text-gray-plus-500">
              {
                userData.img ? <img className='block w-full h-full rounded-full' src="/images/p-user/userImage.png" alt="" /> :
                  <FaUser className='w-3/4 h-full' />
              }
            </div>

            <div className="flex items-center justify-start gap-x-2 md:gap-x-4 ">
              <label className="section-button cursor-pointer">
                ویرایش با تصویر جدید
                <input type="file" className='opacity-0 invisible absolute' />
              </label>
              <div className="section-button border border-primary text-primary bg-gray-plus-200 cursor-pointer">حذف تصویر</div>

            </div>
          </div>

          {/* inputs account details */}
          <div className="">
            
          </div>

        </DetailsWrapper>

        <Title title="تغییر رمز عبور" />
        <DetailsWrapper>
          تغییر رمز عبور
        </DetailsWrapper>
      </div>
    </div>
  )
}

export default DesktopAccountDetails
