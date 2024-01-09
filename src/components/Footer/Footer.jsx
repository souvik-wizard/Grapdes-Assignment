import React from 'react'
import Image from 'next/image'

export const Footer = () => {
  return (
    <footer className='text-center lg:text-start bg-[#F8F7F7] flex flex-col h-full pt-12 lg:pt-20 px-8 lg:px-16 pb-8 lg:gap-16 gap-12'>
      <Image className='mx-auto lg:mx-0' src="/assets/logo.png" alt="logo" width={300} height={300} />
      <div className='flex flex-col gap-8 lg:flex-row lg:gap-28'>
        <div className='flex flex-col gap-4 ' >
          <h1 className='cursor-pointer'>Resources</h1>
          <h1 className='cursor-pointer'>Solutions</h1>
          <h1 className='cursor-pointer'>About Us</h1>
        </div>
        <div>
          <h1>Contact Us</h1>
          <div className='h-1 w-[50%] my-4 lg:mx-0 mx-auto bg-[#E94724]'/>
          <p>support@campus.technology</p>
          <p>+91-9980-747-722</p>
        </div>
        <div>
          <h1>
            Chat with us
          </h1>
          <div className=' h-1 w-[50%] lg:w-[70%] lg:mx-0 mx-auto my-4 bg-[#E94724]'/>
          <div className='flex gap-4 justify-evenly lg:justify-start'>
            <Image className='cursor-pointer' src="/assets/facebook.png" alt="facebook" width={30} height={30} />
            <Image className='cursor-pointer' src="/assets/instagram.png" alt="instagram" width={30} height={30} />
            <Image className='cursor-pointer' src="/assets/twiter.png" alt="twitter" width={30} height={30} />
            <Image className='cursor-pointer' src="/assets/linkedin.png" alt="linkedin" width={30} height={30} />
          </div>
        </div>
      </div>
      <div className='flex flex-col lg:flex-row justify-between lg:mt-4 text-center gap-4 lg:gap-0'>
        <p>© 2022, Kahan Technologies Pvt. Ltd.</p>
        <p>Designed by <span className='font-semibold'>Grapdes</span></p>
      </div>

    </footer>
  )
}
