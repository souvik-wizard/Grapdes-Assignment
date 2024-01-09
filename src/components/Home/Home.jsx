"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import Button from '../Button/GlobalBtn';

import 'swiper/css';
// import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import { Navigation, Pagination } from 'swiper/modules';

export default function HomePage() {

    return (
        <>
            <Swiper
                spaceBetween={30}
                // effect={'fade'}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper top-24 lg:top-0 h-full"
            >

                <SwiperSlide>
                    <div className="duration-700 ease-in-out flex  flex-col-reverse md:flex-row items-center justify-center md:justify-between mx-auto px-4 md:px-20"
                        data-carousel-item="active">
                        <div className="w-full md:w-1/2 flex flex-col gap-8 text-center md:text-left">
                            <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold leading-normal">
                                A <span className="text-[#E94724]">power-packed solution</span> to <br /> streamline all
                                educational
                                <br /> and
                                institutional processes.
                            </h1>
                            <p className="md:text-lg md:w-3/4">
                                Campus Tech is a robust solution packed with best-in-className software, consulting, audits, and
                                empowerment activities rolled into one for your institution.
                            </p>
                            <Button text="Get a Demo" />
                        </div>
                        <img src="/assets/header1.png" className="w-full md:w-1/2 p-8" alt="..." />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="duration-700 ease-in-out flex  flex-col-reverse md:flex-row items-center justify-center md:justify-between mx-auto px-4 md:px-20"
                        data-carousel-item>
                        <div className="w-full md:w-1/2 flex flex-col gap-8 text-center md:text-left">
                            <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold leading-normal">
                                Enable <span className="text-[#E94724]">efficient <br /> segregation</span> of tasks
                            </h1>
                            <p className="text-lg md:w-3/4">
                                Campus Tech presents you with multiple dashboards to review the status of various
                                accreditation tasks, including the tasks that are overdue, non-compliant, or need attention.
                            </p>
                            <Button text="Get a Demo" />
                        </div>
                        <img src="/assets/header2.png" className="w-full md:w-1/2  p-8" alt="..." />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="duration-700 ease-in-out flex flex-col-reverse md:flex-row items-center justify-center md:justify-between mx-auto px-4 md:px-20"
                        data-carousel-item>
                        <div className="w-full md:w-1/2 flex flex-col gap-8 text-center md:text-left">
                            <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold leading-normal">
                                Helps cater to <span className="text-[#E94724]">accreditation <br /> requirements</span>
                            </h1>
                            <p className="text-lg md:w-3/4">
                                Campus Tech has created an associated full-fledged and robust campus automation software
                                along with a dedicated mobile app for students that can cater to multiple accreditation and
                                compliance requirements.
                            </p>
                            <Button text="Get a Demo" />
                        </div>
                        <img src="/assets/header3.png" className="w-full md:w-1/2  p-8 " alt="..." />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="duration-700 ease-in-out flex  flex-col-reverse md:flex-row items-center justify-center md:justify-between mx-auto px-4 md:px-20"
                        data-carousel-item>
                        <div className="w-full md:w-1/2 flex flex-col gap-8 text-center md:text-left">
                            <h1 className="lg:text-5xl md:text-3xl text-2xl  font-bold leading-normal">
                                <span className="text-[#E94724]">Live reports</span> and <span
                                    className="text-[#E94724]">comparative <br /> analysis</span> made available
                            </h1>
                            <p className="text-lg md:w-3/4">
                                Get live reports on data added for multiple accreditations, AI-based alerts for tracking of
                                tasks assigned and completed.
                            </p>
                            <Button text="Get a Demo" />
                        </div>
                        <img src="/assets/header4.png" className="w-full md:w-1/2 p-8" alt="..." />
                    </div>
                </SwiperSlide>
            </Swiper>

            <div class="hidden lg:block h-4 w-full md:w-[40%] mt-4 bg-[#EDAA20]" />
        </>
    );
}