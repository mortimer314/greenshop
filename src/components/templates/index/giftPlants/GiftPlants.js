import Slider from '@/components/modules/slider/Slider'
import Link from 'next/link'
import React from 'react'

function GiftPlants() {
  return (
    <div className="mt-10 md:mt-16 mb-16 md:mb-32">
      <div className="container mb-6">
        <Link href='' className="section-title">گیاهان کادویی</Link>
      </div>

      <Slider />
    </div>
  )
}

export default GiftPlants
