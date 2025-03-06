import React, { useState } from 'react'
import { MdMobileFriendly, MdOutlineMailOutline, MdOutlineKey } from "react-icons/md";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";

function Register() {

    const [showPassword, setShowPassword] = useState(false)
    const [showRepetePassword, setShowRepetePassword] = useState(false)


    return (

        <form className=''>
            <div className="text-center sm:text-right text-lg text-gray-plus-950 mt-3 mb-6 sm:mb-8 sm:text-2xl font-morabbaBold ">ثبت نام</div>

            <div className="flex flex-col justify-start items-center sm:items-start gap-y-4 max-h-[300px]">

                <div className="wrapper-input">
                    <input placeholder="" className='section-input' id='phoneNumber' type="tel" required autoComplete='off' maxLength={11} />
                    <label className='section-input-lable' htmlFor="phoneNumber" title='شماره موبایل' data-title=""></label>
                    <MdMobileFriendly className='input-first-icon w-5 h-5 ' />
                </div>

                <div className="wrapper-input">
                    <input placeholder="" className='section-input' id='email' type="email" required autoComplete='off' />
                    <label className='section-input-lable' htmlFor="email" title='ایمیل' data-title=""></label>
                    <MdOutlineMailOutline className='input-first-icon w-5 h-5 ' />
                </div>

                <div className="wrapper-input">
                    <input placeholder="" className='section-input' id='password' type={showPassword ? "text" : "password"} required autoComplete='off' maxLength={30} />
                    <label className='section-input-lable' htmlFor="password" title='رمز عبور' data-title=""></label>
                    <MdOutlineKey className='input-first-icon w-5 h-5 ' />
                    {showPassword ?
                        <IoMdEye onClick={() => setShowPassword(!showPassword)} className='input-second-icon  w-5 h-5 ' />
                        :
                        <IoMdEyeOff onClick={() => setShowPassword(!showPassword)} className='input-second-icon  w-5 h-5 ' />
                    }
                </div>

                <div className="wrapper-input">
                    <input placeholder="" className='section-input' id='repetePassword' type={showRepetePassword ? "text" : "password"} required autoComplete='off' maxLength={30} />
                    <label className='section-input-lable' htmlFor="repetePassword" title='تکرار رمز عبور' data-title=""></label>
                    <MdOutlineKey className='input-first-icon w-5 h-5 ' />
                    {showRepetePassword ?
                        <IoMdEye onClick={() => setShowRepetePassword(!showRepetePassword)} className='input-second-icon  w-5 h-5 ' />
                        :
                        <IoMdEyeOff onClick={() => setShowRepetePassword(!showRepetePassword)} className='input-second-icon  w-5 h-5 ' />
                    }
                </div>

            </div>

            <button type='submit' className='mt-4 text-sm sm:text-lg rounded-xl bg-primary text-white w-full min-h-12'>ثبت نام</button>
        </form>
    )
}

export default Register
