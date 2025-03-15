import Navbar from '@/components/modules/navbar/Navbar'
import Link from 'next/link'
import React from 'react'

function Error404() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="">
          <div className="flex-center">
            <img src="/images/error404.png" alt="eror 404" />
          </div>
          <div className="text-center md:text-xl">
            صفحه مورد نظر شما یافت نشد!
          </div>
          <div className="text-center mt-5 ">
            <Link href='/' className='py-1.5 md:py-3 px-2 md:px-4 border hover:bg-primary-light transition-all border-primary text-primary rounded-xl text-sm md:text-lg'>
              بازگشت به صفحه اصلی
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Error404
