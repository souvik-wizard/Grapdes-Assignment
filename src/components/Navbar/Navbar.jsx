import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import { IoIosArrowDown } from 'react-icons/io';
import { Button2 } from '../Button/Button2';

const Navbar = () => {
    return (
        <nav className="py-4 px-4 lg:px-16 hidden lg:block">
            <div className="mx-auto flex justify-between items-center">

                <Link href="" className="flex items-center justify-center">
                    <Image
                        src="/assets/logo.png"
                        alt="logo"
                        width={200}
                        height={400}
                    />
                </Link>

                <div id="nav-content" className="hidden lg:flex lg:w-auto w-full flex-col lg:flex-row mt-3 lg:mt-0">

                    <div className="group relative mx-4 z-50">
                        <div className="flex items-center">
                            <button
                                className="lg:py-4 p-2 block border-b-2 border-transparent hover:border-white lg:hover:border-white">
                                Solutions
                            </button>
                            <IoIosArrowDown className='cursor-pointer' />
                        </div>

                        <div
                            className="absolute left-0 mt-2 w-full lg:w-auto bg-white rounded-lg shadow-lg z-10 invisible group-hover:visible">
                            <a href="#" className="block lg:px-4 py-2 px-0">Item 1</a>
                            <a href="#" className="block lg:px-4 py-2 px-0">Item 2</a>
                        </div>
                    </div>

                    <div className="group relative mx-4 z-50">
                        <div className="flex items-center">
                            <button
                                className="lg:py-4 p-2 block border-b-2 border-transparent hover:border-white lg:hover:border-white">
                                Resources
                            </button>
                            <IoIosArrowDown className='cursor-pointer' />
                        </div>
                        <div
                            className="absolute left-0 mt-2 w-full lg:w-auto bg-white rounded-lg shadow-lg z-10 invisible group-hover:visible">
                            <a href="#" className="block lg:px-4 py-2 px-0">Item 3</a>
                            <a href="#" className="block lg:px-4 py-2 px-0">Item 4</a>
                        </div>
                    </div>

                    <a href=""
                        className="lg:p-4 mx-2 py-2 px-0 block border-b-2 border-transparent hover:border-white lg:hover:border-white ">About
                        us</a>
                    <a href=""
                        className="lg:p-4 mx-2 py-2 px-0 block border-b-2 border-transparent hover:border-white lg:hover:border-white ">Contact
                        us</a>

                    <Button2 className="mx-2" text="Login" />
                </div>

            </div>
        </nav>
    )
}
export default Navbar
