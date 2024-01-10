"use client"
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';


// import required modules
import { Autoplay, FreeMode } from 'swiper/modules';

export const Achivements = () => {
    return (
        <>
            <div className='lg:p-24 p-16 flex flex-col gap-12'>
                <h1 className='2xl:text-5xl md:text-3xl text-2xl font-bold lg:leading-loose'>The best in the <br /> country <span className='text-[#E94724]'>trust us</span> </h1>
                <div className='flex flex-col justify-between md:flex-row gap-12'>
                    <div>
                        <h1 className='text-[#EDAA20] font-extrabold text-5xl lg:text-[72px]'>
                            30
                        </h1>
                        <p className='text-lg font-semibold'>
                            Top Institutions
                        </p>
                    </div>
                    <div>
                        <h1 className='text-[#30A981] font-extrabold text-5xl lg:text-[72px]'>
                            13
                        </h1>
                        <p className='text-lg font-semibold'>
                            in A/A+/A++ Tier
                        </p>
                    </div>
                    <div>
                        <h1 className='text-[#EDAA20] font-extrabold text-5xl lg:text-[72px]'>
                            3000
                        </h1>
                        <p className='text-lg font-semibold'>
                            Faculty Connect
                        </p>
                    </div>
                    <div>
                        <h1 className='text-[#30A981] font-extrabold text-5xl lg:text-[72px]'>
                            90,000
                        </h1>
                        <p className='text-lg font-semibold'>
                            Students Benefited
                        </p>
                    </div>
                </div>
            </div>

            <Swiper
                slidesPerView={5}
                spaceBetween={10}
                loop={true}
                autoplay={{
                    delay: 1500,
                }}
                breakpoints={{
                    280: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    320: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    }
                }}
                modules={[FreeMode, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Image src="/assets/slider4.png" alt="..." width={100} height={100} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/assets/slider5.png" alt="..." width={100} height={100} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/assets/slider6.png" alt="..." width={200} height={200} />
                </SwiperSlide>
                <SwiperSlide className='m-auto'>
                    <Image src="/assets/slider7.png" alt="..." width={400} height={400} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/assets/slider8.png" alt="..." width={100} height={100} />
                </SwiperSlide>
            </Swiper>
        </>

    )
}
