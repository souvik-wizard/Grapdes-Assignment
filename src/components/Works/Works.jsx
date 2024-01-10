import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';


import { Scrollbar, Freemode } from 'swiper/modules';
import { Button2 } from '../Button/Button2';

const Items = [{
    title: 'Accreditation & Compliance',
    description: "Bring real-time monitoring for all users’ accreditation requirements for continuous quality improvement",
    image: '/assets/slider1.png'
},
{
    title: 'ILMS',
    description: "Customise the learning system by giving users a unified platform for all academic needs with easy-to-use technology",
    image: '/assets/slider2.png'
},
{
    title: 'Exam Management System',
    description: "Streamline the examination process with Interactive Examinations, Live Proctoring, and Exam Evaluation modules",
    image: '/assets/slider3.png'
}, {
    title: 'Accreditation & Compliance',
    description: "Bring real-time monitoring for all users’ accreditation requirements for continuous quality improvement",
    image: '/assets/slider1.png'
}
]

export const Works = () => {
    return (
        <div className='h-full'>
            <h1 className='2xl:text-5xl md:text-3xl text-2xl font-bold leading-normal pl-16 py-4 lg:hidden'>
                Learn more about <span className='text-[#E94724]'><br /> what we solve</span>
            </h1>
            <h1 className='2xl:text-5xl md:text-3xl text-2xl font-bold pl-20 py-20 hidden lg:flex'>
                Learn more about<span className='text-[#E94724] ml-3'>what we solve </span>
            </h1>

            <Swiper
                scrollbar={{
                    hide: true,
                }}
                freeMode={true}
                breakpoints={{
                    280: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
                slidesPerView={3}
                spaceBetween={100}
                modules={[Scrollbar]}
                className="mySwiper "
            >
                {Items.map((item, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className='p-12 lg:p-8 2xl:m-12 lg:py-16 h-88 2xl:hover:shadow-2xl 2xl:rounded-bl-3xl
                            '>
                                <img src={item.image} alt="..." />
                                <h1 className="text-2xl font-bold py-4 text-[#E94724]">{item.title}</h1>
                                <p className="">{item.description
                                }</p>
                                <Button2 className="mt-8" text="Learn More" />
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}
