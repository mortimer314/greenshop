import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react'

function DesktopMenu() {
    const route = useRouter()
    const shortName = route.query.userPages
  return (
    <div className='flex flex-col gap-5 sticky top-0'>
      <Link className={`${shortName === "account-details" ? "":""}`} href='/p-user/account-details' >account-details</Link>
      <Link className={`${shortName === "cunsolting" ? "":""}`} href='/p-user/cunsolting' >cunsolting</Link>
      <Link className={`${shortName === "messages" ? "":""}`} href='/p-user/messages' >messages</Link>
    </div>
  )
}

export default DesktopMenu;
