import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import ProductCard from "../productCard/ProductCard";

function Slider() {

    const handleNext = () => {
        document.querySelector('.swiper-button-next').click()
    }

    return (
        <div className="container relative">

            {/*alternative next button of swiper */}

            <div className="hidden sm:flex-center absolute top-[40%] -left-3 z-10 
                w-12 h-12 border border-primary text-primary 
                flex-center rounded-full" onClick={handleNext}>
                <MdOutlineKeyboardArrowLeft className="w-6 h-6" />
            </div>

            {/* start swiper */}
            <Swiper
                slidesPerView={1.5}
                spaceBetween={30}

                navigation={true}
                breakpoints={{
                    460: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    640: {
                        slidesPerView: 2.5,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 24,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 24,
                    },
                    1280: {
                        slidesPerView: 5.5,
                        spaceBetween: 24,
                    },
                }}
                modules={[Navigation]}
                className="mySwiper home-slider"
            >

                <SwiperSlide >
                        <ProductCard/>
                </SwiperSlide>
                <SwiperSlide >
                        <ProductCard/>
                </SwiperSlide>
                <SwiperSlide >
                        <ProductCard/>
                </SwiperSlide>
                <SwiperSlide >
                        <ProductCard/>
                </SwiperSlide>
                <SwiperSlide >
                        <ProductCard/>
                </SwiperSlide>
                <SwiperSlide >
                        <ProductCard/>
                </SwiperSlide>
                <SwiperSlide >
                        <ProductCard/>
                </SwiperSlide>
                <SwiperSlide >
                        <ProductCard/>
                </SwiperSlide>
                <SwiperSlide >
                        <ProductCard/>
                </SwiperSlide>
                <SwiperSlide >
                        <ProductCard/>
                </SwiperSlide>
                <SwiperSlide >
                        <ProductCard/>
                </SwiperSlide>
                <SwiperSlide >
                        <ProductCard/>
                </SwiperSlide>
               
            </Swiper>

            {/* Alternative for next button in swiper */}


        </div>
    )
}

export default Slider
