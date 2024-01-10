import React from 'react'
import GlobalBtn from '../Button/GlobalBtn'

export const Contact = () => {
  return (
    <>
      <div class="hidden lg:block h-4 w-full md:w-[20%] mt-8 ml-auto bg-[#E94724]" />
      <div className='mt-24'>
        <div className='lg:flex'>
          <div className='pl-16 lg:pl-36 pt-24'>
            <h1 className='2xl:text-5xl md:text-3xl text-2xl font-bold leading-normal pb-8'>
              Ready to give your <br /> <span className='text-[#E94724]'> institution an
                upgrade?</span>
            </h1>
            <GlobalBtn text='Contact Us' />
          </div>
          <img className='w-full mt-8 md:mt-0 lg:w-[35rem] ml-auto rounded-tl-full' src="/assets/contact.png" alt="..." />
        </div>
      </div>
    </>
  )
}
