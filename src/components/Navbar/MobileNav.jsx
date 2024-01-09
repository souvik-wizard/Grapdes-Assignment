"use client";
import Image from "next/image";
import Link from 'next/link';
import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';



const MobileNav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState({
    solutions: false,
    resources: false,
  });

  const showNavHandler = () => {
    setIsNavOpen((prev) => !prev);
    setShowDropdown((prev) => !prev)
    if (isNavOpen) {
      document.body.style.overflow = 'unset';
    } else {
      document.body.style.overflow = 'hidden';
    }
  };

  const toggleDropdown = (item) => {
    setShowDropdown((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  return (
    <section className={`flex bg-white flex-col lg:hidden fixed w-full z-50 bg-dark shadow ${isNavOpen ? 'min-h-[100vh] ' : 'h-auto'}`}>
      <div className="flex justify-between items-center p-4">
        <Link href="/" className={`flex justify-center items-center flex-col`}>
          <Image
            src="/assets/logo.png"
            alt="logo"
            width={200}
            height={400}
          />
        </Link>

        <div className="flex items-center text-primary">
          <button className="focus:outline-none" onClick={showNavHandler}>
            {
              isNavOpen ?
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-8 text-primary" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 12.586L3.707 18.88a1 1 0 11-1.414-1.414L8.586 11 2.293 4.707a1 1 0 111.414-1.414L10 9.586l6.293-6.293a1 1 0 111.414 1.414L11.414 11l6.293 6.293a1 1 0 11-1.414 1.414L10 12.586z" clipRule="evenodd" />
                </svg> : <svg className="w-6 h-6" fill="#5fc49d" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            }
          </button>
        </div>
      </div>

      <div
        className={`flex flex-col justify-center items-center gap-16 my-auto py-4 px-4 lg:hidden tracking-widest translate-y-5rem ${isNavOpen ? '' : 'hidden'
          }`}
      >
        <div className="relative">
          <div className='flex gap-2 items-center'>
            <button
              onClick={() => toggleDropdown('solutions')}
              className="text-black text-xl focus:outline-none"
            >
              Solutions
            </button>
            <IoIosArrowDown className='cursor-pointer mx-auto' />
          </div>

          {showDropdown.solutions && (
            <div className="absolute top-full left-0 bg-white shadow-lg rounded w-full p-1">
              <Link className='block text-lg' href="#">Item 1</Link>
              <Link className='block text-lg' href="#">Item 2</Link>
            </div>
          )}
        </div>
        <div className="relative">
          <div className='flex gap-2 items-center'>
            <button
              onClick={() => toggleDropdown('resources')}
              className="text-black text-xl focus:outline-none"
            >
              Resources
            </button>
            <IoIosArrowDown className='cursor-pointer mx-auto' />
          </div>
          {showDropdown.resources && (
            <div className="absolute top-full left-0 bg-white shadow-lg rounded w-full p-1">
              <Link className='block text-lg' href="#">Item 3</Link>
              <Link className='block text-lg' href="#">Item 4</Link>
            </div>
          )}
        </div>
        <Link onClick={showNavHandler} href="" className="text-black text-xl">
          Contact Us
        </Link>
        <Link onClick={showNavHandler} href="" className="text-black text-xl">
          About Us
        </Link>
        <Link
          href="#"
          className="px-6 py-2 rounded-full m-auto bg-[#30A981] text-white"
        >
          Login
        </Link>
      </div>


    </section>
  )
}

export default MobileNav