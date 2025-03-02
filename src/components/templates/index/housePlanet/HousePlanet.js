import React, { useEffect, useRef, useState } from "react";

import Link from "next/link";
import Slider from "@/components/modules/slider/Slider";

export default function HousePlanet() {

    const handleNext = () => {
        document.querySelector('.swiper-button-next').click()
    }

    return (
        <div className="mt-10 md:mt-16">
            <div className="container mb-6">
                <Link href='' className="section-title">گیاهان آپارتمانی</Link>
            </div>

            <Slider/>
        </div>
    );
}
