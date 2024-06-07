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
            <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">

                        {typeof siteMetadata.siteTitle === 'string' ? (
                            // className="hidden sm:block"
                            <div className="flex flex-row items-center">
                                {/*<Image*/}
                                {/*    src={siteMetadata.siteLogo}*/}
                                {/*    alt="PDF AI Chatbot logo"*/}
                                {/*    width={20}*/}
                                {/*    height={20}*/}
                                {/*    className='inline-block'*/}
                                {/*/>*/}
                                <span className="text-primary text-[28px] sm:text-[28px] ml-[10px]">
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
