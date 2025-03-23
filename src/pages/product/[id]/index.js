import Breadcrumb from '@/components/modules/breadcrumb/Breadcrumb'
import Footer from '@/components/modules/footer/Footer'
import Navbar from '@/components/modules/navbar/Navbar'
import Slider from '@/components/modules/slider/Slider'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

function index() {

  const route = useRouter()

  console.log(route.query.id)

  return (
    <>
      <Navbar />
      <div className="container mt-2 xl:mt-6">

        <Breadcrumb />

        <div className="mt-10 2xl:mt-20 bg-rose-300">


        </div>

        <div className="mt-10 md:mt-16">
                   <div className="container mb-6">
                       <span className="section-title">گیاه های مشابه</span>
                   </div>
       
                   <Slider/>
               </div>
      </div>


      <Footer />
    </>
  )
}



export default index
