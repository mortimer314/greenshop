import { useRouter } from 'next/router'
import React from 'react'
import DesktopCunsolting from './DesktopCunsolting'
import DesktopMessages from './DesktopMessages'
import DesktopAccountDetails from './DesktopAccountDetails'

function DesktopDetails() {

    const route = useRouter()
    const shortName = route.query.userPages
    const asPath = route.asPath
    console.log(route)

    return (
        <>
            {asPath === "/p-user" ? <DesktopAccountDetails /> : ""}
            {shortName === "account-details" ? <DesktopAccountDetails /> : ""}
            {shortName === "cunsolting" ? <DesktopCunsolting /> : ""}
            {shortName === "messages" ? <DesktopMessages /> : ""}
        </>
    )
}

export default DesktopDetails
