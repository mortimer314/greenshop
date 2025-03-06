import Footer from '@/components/modules/footer/Footer'
import Navbar from '@/components/modules/navbar/Navbar'
import Login from '@/components/templates/registre-login/Login'
import Register from '@/components/templates/registre-login/Register'
import React, { useState } from 'react'

function index() {

  const [showLogin, setShowLogin] = useState(false)


  return (
    <div>

      <Navbar />

      <div className="relative flex flex-col-reverse sm:grid sm:grid-cols-2  -mt-1 sm:mt-0 sm:mb-2 sm:container">

        <div className="relative sm:static overflow-hidden px-4 h-[415px] sm:content-center sm:h-auto -top-[300px] bottom-0 right-0 left-0 bg-white rounded-t-[20px]">

          
          {showLogin ? <Register /> : <Login />}

          <div className="mt-3">
            {showLogin ?
              <div className="text-center">حساب کاربری دارید؟<span className='text-sm sm:text-lg text-primary cursor-pointer mr-1' onClick={() => setShowLogin(!showLogin)} >ورود</span> کنید</div>
              :
              <div className="text-center">حساب کاربری ندارید؟<span className='text-sm sm:text-lg text-primary cursor-pointer mr-1' onClick={() => setShowLogin(!showLogin)} >ثبت نام</span> کنید</div>}
          </div>

        </div>

        <div className="flex overflow-hidden">
          <img className='' src="/images/register-login.png" alt="" />

        </div>

      </div>

      <Footer />
    </div>
  )
}

export default index
