import Slider from '@/components/modules/slider/Slider'
import Link from 'next/link'
import React from 'react'

function OrnamentalPlants() {
    return (
        <div className=' mt-10 lg:mt-16'>
            
            <div className="container mb-6">
                <Link href='' className='section-title'>گیاهان تزئینی</Link>
            </div>

            <Slider/>

        </div>
    )
}

export default OrnamentalPlants
