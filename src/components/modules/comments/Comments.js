import React from 'react'
import Comment from './Comment'

function Comments() {
    return (
        <div className='p-2.5 mb-16 md:mb-28'>
            <div className="text-lg md:text-2xl text-gray-plus-900 font-normal/[140%] mb-4 md:mb-6">دیدگاه ها و امتیاز</div>

            <ul>
                <Comment/>
                <Comment/>
                <Comment/>
            </ul>


            <div className="flex-center mt-3 sm:mt-6 md:mt-10">
                <button className="section-button-secondary text-sm/7  lg:text-lg/8">مشاهده همه نظرات</button>
            </div>
        </div>
    )
}

export default Comments
