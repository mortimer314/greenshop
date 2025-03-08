import React from 'react'
import DesktopMenu from './DesktopMenu'
import DesktopDetails from './DesktopDetails'

function DesktopWrapperPannel() {
    return (
        <>
            <div className="hidden sm:block -mt-3 h-full">
                <div className="container h-full">
                    <div className="h-full grid grid-cols-2 sm:grid-cols-12 md:grid-cols-3 xl:grid-cols-4">
                        <div className="sm:col-span-5 md:col-span-1 xl:col-span-1 border-l border-gray-plus-400 sticky top-0">
                            <DesktopMenu />

                        </div>
                        <div className="sm:col-span-7 md:col-span-2 xl:col-span-3">
                            <DesktopDetails />
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default DesktopWrapperPannel
