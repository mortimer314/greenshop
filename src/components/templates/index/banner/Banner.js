import React from 'react'

function Banner() {
  return (
    <div className='container flex flex-col sm:flex-row mt-10 lg:mt-20 items-center lg:justify-between gap-4 lg:gap-6'>
      <div className="">
        <img src='/images/Frame1.png' />
      </div>
      <div className="">
        <img src='/images/Frame2.png' />
      </div>
    </div>
  )
}

export default Banner
