import React from 'react'
import Navbar from '@/components/modules/navbar/Navbar'
import DesktopWrapperPannel from '@/components/templates/p-user/desktop/DesktopWrapperPannel'
import MobileWrapperPannel from '@/components/templates/p-user/mobile/MobileWrapperPannel '

function index() {
    return (
        <div className='h-screen'>
            <Navbar />


            {/* ======================== mobile menu ======================== */}
            <MobileWrapperPannel />


            {/* ======================== desktop ========================  */}

            <DesktopWrapperPannel />



        </div>
    )
}

export default index
