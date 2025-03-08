import Navbar from '@/components/modules/navbar/Navbar'
import DesktopWrapperPannel from '@/components/templates/p-user/DesktopWrapperPannel'
import React from 'react'

function index() {
    return (
        <div className='h-screen'>
            <Navbar />


            {/* ======================== mobile menu ======================== */}
            <div className="sm:hidden">
                <div className="container ">
                    mobile menu
                </div>
            </div>


            {/* ======================== desktop ========================  */}

            <DesktopWrapperPannel />



        </div>
    )
}

export default index
