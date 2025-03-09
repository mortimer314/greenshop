import React from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link'
import { FaUser } from "react-icons/fa";

function DesktopMenu() {
  const route = useRouter()
  const shortName = route.query.userPages
  return (
    <div className='sticky top-0 pl-6'>

      <div className="flex items-center gap-x-2">
        <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
          <img className='block w-full h-full rounded-full' src="/images/p-user/userImage.png" alt="" />
          {/* <FaUser className='w-full h-full'/> */}
        </div>
        <div className="flex flex-col">
          <span className='text-gray-plus-950 text-sm'>مرتضی خلیل مقدم</span>
          <span className='text-gray-plus-600 text-sm'>09140872080</span>
        </div>
      </div>

      <div className="flex flex-col ">
        <Link className={`${shortName === "account-details" ? "" : ""}`} href='/p-user/account-details' >

          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5.9C13.16 5.9 14.1 6.84 14.1 8C14.1 9.16 13.16 10.1 12 10.1C10.84 10.1 9.9 9.16 9.9 8C9.9 6.84 10.84 5.9 12 5.9ZM12 14.9C14.97 14.9 18.1 16.36 18.1 17V18.1H5.9V17C5.9 16.36 9.03 14.9 12 14.9ZM12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4ZM12 13C9.33 13 4 14.34 4 17V20H20V17C20 14.34 14.67 13 12 13Z" fill="#417F56" />
          </svg>

          <span>مشخصات حساب کاربری</span>

        </Link>
        <Link className={`${shortName === "cunsolting" ? "" : ""}`} href='/p-user/cunsolting' >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15H8V12H10.5V9.5H13.5V12H16V15H13.5V17.5H10.5V15ZM19 8V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V8C5 6.9 5.9 6 7 6H17C18.1 6 19 6.9 19 8ZM17 8H7V19H17V8ZM18 3H6V5H18V3Z" fill="#505050" />
          </svg>

          <span>مشاوره با گیاه پزشک</span>
        </Link>
        <Link className={`${shortName === "messages" ? "" : ""}`} href='/p-user/messages' >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 10.99L4 6H20ZM20 18H4V8L12 13L20 8V18Z" fill="#505050" />
          </svg>

          <span>پیام های دریافتی</span>
        </Link>
      </div>
    </div>
  )
}

export default DesktopMenu;
