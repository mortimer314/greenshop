import Breadcrumb from '@/components/modules/breadcrumb/Breadcrumb'
import Footer from '@/components/modules/footer/Footer'
import Navbar from '@/components/modules/navbar/Navbar'
import Slider from '@/components/modules/slider/Slider'
import ProductDetails from '@/components/templates/productDetails/ProductDetails'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

function index() {

  const route = useRouter()

  console.log(route.query.id)

  return (
    <>
      <Navbar />

      <div className="mt-2 xl:mt-6 ">

        <div className="container">
          <Breadcrumb />
        </div>

        <div className="mt-10 2xl:mt-20 container">
          <ProductDetails />
        </div>


        <div className="mt-11 md:mt-16">
          <div className=" mb-6 container">
            <span className="section-title">گیاه های مشابه</span>
          </div>

          <Slider />

        </div>
      </div>


      <Footer />
    </>
  )
}



export default index
