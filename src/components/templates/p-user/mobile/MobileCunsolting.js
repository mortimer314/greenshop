import React, { use } from 'react'
import Title from '../components/Title'
import { MdOutlineLibraryAdd } from "react-icons/md";

function MobileCunsolting() {

    const userData = { img: false }


    return (
        <div className="py-6 container">
            <Title title="مشاوره با گیاه پزشک" />

            <form >
                <div className="flex items-center flex-wrap justify-start gap-2 mb-6 mt-4">
                    {
                        userData.img ?
                            <>
                                <div className="flex-center w-[120px]  h-[120px] rounded-lg overflow-hidden border border-gray-plus-500">
                                    <img className='block w-full h-full rounded-lg' src="/images/p-user/myPlant.png" alt="plant pic" />
                                </div>

                                <div className="flex items-center justify-start gap-x-2 md:gap-x-4 ">
                                    <label className="section-button cursor-pointer">
                                        ویرایش با تصویر جدید
                                        <input type="file" className='opacity-0 invisible absolute' />
                                    </label>
                                    <div className="section-button border border-primary text-primary bg-gray-plus-200 cursor-pointer">حذف تصویر</div>

                                </div>
                            </> :
                            <label className="flex flex-col justify-center items-center gap-y-2 w-[72px]  h-[72px] rounded-lg overflow-hidden cursor-pointer bg-gray-100 border border-gray-plus-500">
                                <MdOutlineLibraryAdd className='w-6 h-6 text-gray-plus-800' />
                                <span className='text-[10px] text-gray-plus-900'>
                                    آپلود تصویر گیاه
                                </span>
                                <input type="file" className='opacity-0 invisible absolute' />
                            </label>
                    }

                </div>

                <div className="min-h-40 p-4 overflow-hidden rounded-lg text-gray-plus-800 bg-gray-100 border border-gray-plus-500">
                    <p className='mb-3 sticky top-'>توضیح درباره مشکل گیاه : </p>
                    <textarea className='block text-sm resize-none w-full h-full bg-inherit outline-none border-none' rows={8} placeholder='توضیحات خود را اینجا بنویسید ...' />
                </div>

                <button type='submit' className='block mt-4 text-lg  rounded-xl bg-primary text-white w-full h-12'>ارسال</button>

            </form>

        </div>
    )
}

export default MobileCunsolting
