import React from 'react'
import Image from "next/image";
import GlobalBtn from '../Button/GlobalBtn';

export const Needs = () => {
    return (
        <div className='h-full bg-[#F8F7F7] mt-20' >
            <Image className='absolute -mt-12' src="/assets/top.png" alt="..." width={50} height={50} />
            <div className='flex p-12 sm:p-20 lg:p-28 flex-col lg:justify-between lg:flex-row gap-8'>
                <div className='mb-4'>
                    <div className='flex flex-col z-40'>
                        <h1 className='2xl:text-5xl md:text-3xl text-2xl font-bold'>Why your</h1>
                        <h1 className='2xl:text-5xl md:text-3xl text-2xl font-bold lg:mt-4'>educational </h1>
                        <h1 className='text-[#E94724] 2xl:text-5xl md:text-3xl text-2xl font-bold lg:mt-4'>institution needs</h1>
                        <h1 className='text-[#E94724] 2xl:text-5xl md:text-3xl text-2xl font-bold lg:mt-4 mb-8 lg:mb-8'>Campus Tech</h1>
                    </div>
                    <GlobalBtn text='About Us' />
                </div>
                <div className='flex flex-col gap-4 lg:gap-16'>
                    <div className='flex gap-4 items-center'>
                        <Image src="/assets/1.png" alt="..." width={40} height={40} />
                        <h1 className='text-lg'>Simple and easy-to-use interface</h1>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <Image src="/assets/2.png" alt="..." width={50} height={50} />
                        <h1 className='text-lg'>AI-based alerts for all activities to be conducted</h1>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <Image src="/assets/3.png" alt="..." width={50} height={50} />
                        <h1 className='text-lg'>Build a new culture of compliance and accreditation
                        </h1>
                    </div>
                </div>
                <div className='flex flex-col gap-4 lg:gap-16'>
                    <div className='flex gap-4 items-center'>
                        <Image src="/assets/a.png" alt="..." width={40} height={40} />
                        <h1 className='text-lg'>Multi-institutional dashboard
                        </h1>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <Image src="/assets/b.png" alt="..." width={50} height={50} />
                        <h1 className='text-lg'>Track learning behaviour and learning outcomes</h1>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <Image src="/assets/c.png" alt="..." width={50} height={50} />
                        <h1 className='text-lg'>Integration with your campus website
                        </h1>
                    </div>
                </div>
            </div>
            <Image className='absolute -mt-12 right-0' src="/assets/bottom.png" alt="..." width={50} height={50} />
        </div>
    )
}
