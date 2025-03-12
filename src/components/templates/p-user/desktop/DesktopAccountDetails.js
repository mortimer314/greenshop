import React, { useState } from 'react'
import DetailsWrapper from '../components/DetailsWrapper'
import Title from '../components/Title'

import { MdMobileFriendly, MdOutlineKey, MdOutlineMailOutline, MdOutlineLocalPhone, MdOutlineLibraryAdd } from "react-icons/md";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { ImPencil } from "react-icons/im";
import { LuMapPin } from "react-icons/lu";



function DesktopAccountDetails() {

  const userData = { img: true }
  const [showPassword, setShowPassword] = useState(false)
  const [showRepetePassword, setShowRepetePassword] = useState(false)


  return (
    <div>
      <div className="pt-10 pr-6">
        <Title title="مشخصات حساب کاربری" />
        <DetailsWrapper>

          {/* Edit profile picture */}
          {
            userData.img ?
              <div className="flex items-center flex-wrap justify-start gap-2 md:gap-4 mb-8 md:mb-12">
                <div className="flex-center w-20  h-20 rounded-full overflow-hidden border border-gray-plus-500">
                  <img className='block w-full h-full rounded-lg' src="/images/p-user/userImg.png" alt="plant pic" />
                </div>

                <div className="flex items-center justify-start gap-x-2 md:gap-x-4 ">
                  <label className="section-button cursor-pointer">
                    ویرایش با تصویر جدید
                    <input type="file" className='opacity-0 invisible absolute' />
                  </label>
                  <div className="section-button border border-primary text-primary bg-gray-plus-200 cursor-pointer">حذف تصویر</div>

                </div>
              </div> :
              <label className="flex flex-col justify-center items-center mb-8 md:mb-12 gap-y-2 w-20  h-20 rounded-lg overflow-hidden cursor-pointer bg-gray-100 border border-gray-plus-500">
                <MdOutlineLibraryAdd className='w-6 h-6 text-gray-plus-800' />
                <span className='text-xs text-gray-plus-900'>
                  آپلود تصویر 
                </span>
                <input type="file" className='opacity-0 invisible absolute' />
              </label>
          }

        

          {/* Inputs of account details */}
          <div className="">
            <form className='grid grid-cols-1 lg:grid-cols-2 gap-6'>


              <div className="wrapper-input">
                <input placeholder="" value='مرتضی' className='section-input' id='name' type="text" required autoComplete='off' maxLength={11} />
                <label className='section-input-lable' htmlFor="name" title='نام' data-title=""></label>
                <FaRegUser className='input-first-icon w-5 h-5 ' />
                <ImPencil onClick={() => false} className='input-second-icon  w-5 h-5 ' />
              </div>
              <div className="wrapper-input">
                <input placeholder="" value='خلیل مقدم' className='section-input' id='lastname' type="text" required autoComplete='off' maxLength={11} />
                <label className='section-input-lable' htmlFor="lastname" title='نام خانوادگی' data-title=""></label>
                <FaRegUser className='input-first-icon w-5 h-5 ' />
                <ImPencil onClick={() => false} className='input-second-icon  w-5 h-5 ' />
              </div>


              <div className="wrapper-input">
                <input placeholder="" value='09140872080' className='section-input' id='phoneNumber' type='tel' required autoComplete='off' maxLength={30} />
                <label className='section-input-lable' htmlFor="phoneNumber" title='شماره موبایل' data-title=""></label>
                <MdMobileFriendly className='input-first-icon w-5 h-5 ' />
                <ImPencil onClick={() => false} className='input-second-icon  w-5 h-5 ' />
              </div>
              <div className="wrapper-input">
                <input placeholder="" className='section-input' id='email' type="email" autoComplete='off' />
                <label className='section-input-lable' htmlFor="email" title='ایمیل' data-title=""></label>
                <MdOutlineMailOutline className='input-first-icon w-5 h-5 ' />
                <ImPencil onClick={() => false} className='input-second-icon  w-5 h-5 ' />
              </div>


              <div className="wrapper-input">
                <input placeholder="" value='ایران - لردگان و اردکان' className='section-input' id='address' type="text" autoComplete='off' maxLength={11} />
                <label className='section-input-lable' htmlFor="address" title='آدرس منزل' data-title=""></label>
                <LuMapPin className='input-first-icon w-5 h-5 ' />
                <ImPencil onClick={() => false} className='input-second-icon  w-5 h-5 ' />
              </div>
              <div className="wrapper-input">
                <input placeholder="" className='section-input' id='telephoneNumber' type='tel' autoComplete='off' maxLength={11} />
                <label className='section-input-lable' htmlFor="telephoneNumber" title='تلفن منزل' data-title=""></label>
                <MdOutlineLocalPhone className='input-first-icon w-5 h-5 ' />
                <ImPencil onClick={() => false} className='input-second-icon  w-5 h-5 ' />
              </div>

            </form>
          </div>

        </DetailsWrapper>


        {/* Change password */}
        <Title title="تغییر رمز عبور" />

        <DetailsWrapper>
          <form className=''>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

              <div className="wrapper-input">
                <input placeholder="" className='section-input' id='password' type={showPassword ? "text" : "password"} required autoComplete='off' maxLength={30} />
                <label className='section-input-lable' htmlFor="password" title='رمز عبور جدید را وارد کنید' data-title=""></label>
                <MdOutlineKey className='input-first-icon w-5 h-5 ' />
                {showPassword ?
                  <IoMdEye onClick={() => setShowPassword(!showPassword)} className='input-second-icon  w-5 h-5 ' />
                  :
                  <IoMdEyeOff onClick={() => setShowPassword(!showPassword)} className='input-second-icon  w-5 h-5 ' />
                }
              </div>

              <div className="wrapper-input">
                <input placeholder="" className='section-input' id='repetePassword' type={showRepetePassword ? "text" : "password"} required autoComplete='off' maxLength={30} />
                <label className='section-input-lable' htmlFor="repetePassword" title='تکرار رمز عبور جدید' data-title=""></label>
                <MdOutlineKey className='input-first-icon w-5 h-5 ' />
                {showRepetePassword ?
                  <IoMdEye onClick={() => setShowRepetePassword(!showRepetePassword)} className='input-second-icon  w-5 h-5 ' />
                  :
                  <IoMdEyeOff onClick={() => setShowRepetePassword(!showRepetePassword)} className='input-second-icon  w-5 h-5 ' />
                }
              </div>

            </div>

            <button type='submit' className='block mt-4 text-sm sm:text-lg rounded-xl bg-primary text-white w-44 h-12 mr-auto'>ذخیره کردن</button>

          </form>

        </DetailsWrapper>
      </div>
    </div>
  )
}

export default DesktopAccountDetails
