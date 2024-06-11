'use client'

import React, { useState } from 'react';
import Link from "next/link";
import Image from "next/image";

// components
import IndexDropdown from "@/components/Dropdowns/IndexDropdown";
import siteMetadata from '@/data/siteMetadata'


export default function Navbar(props) {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <>
            <nav className="w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">

                        {typeof siteMetadata.siteTitle === 'string' ? (
                            // className="hidden sm:block"
                            <div className="flex flex-row items-center">
                                <Image
                                    src={siteMetadata.siteLogo}
                                    alt="PDF AI Chatbot logo"
                                    width={20}
                                    height={20}
                                    className='inline-block w-[30px] h-auto'
                                />
                                <span className="text-white text-[28px] sm:text-[28px] ml-[10px]">
                                    {siteMetadata.siteTitle}
                                </span>
                            </div>
                            ) : (
                              <>
                                 {siteMetadata.siteLogo}
                                 {siteMetadata.siteTitle}
                              </>
                        )}
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
                            (navbarOpen ? " block" : " hidden")
                        }
                        id="example-navbar-warning"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                                <IndexDropdown />
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
