import React from 'react'
import UserPanelMenu from './UserPanelMenu'
import { useRouter } from 'next/router'
import MobileAccountDetails from './MobileAccountDetails'
import MobileCunsolting from './MobileCunsolting'
import MobileMessage from './MobileMessage'

function MobileWrapperPannel() {

    const route = useRouter()
    const shortName = route.query.userPages
    const asPath = route.asPath

    return (
        <div className=' sm:hidden'>
            {asPath === "/p-user" ? <UserPanelMenu /> : ""}
            {shortName === "account-details" ? <MobileAccountDetails/> : ""}
            {shortName === "cunsolting" ? <MobileCunsolting/> : ""}
            {shortName === "messages" ? <MobileMessage/> : ""}
        </div>
    )
}

export default MobileWrapperPannel 
