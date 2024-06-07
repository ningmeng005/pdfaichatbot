import React from "react";


const FooterNavLinks = [
    {
        title: 'Products',
        children: [
            { href: '/pdf-chatbot', title: 'PDF Chatbot' },
            { href: '/use-cases', title: 'Use Cases' },
            { href: '/blog', title: 'Blog' },
            { href: '/pdf-compressor', title: 'PDF Compressor' },
            { href: '/pdf-to-png', title: 'PDF to PNG' },
            { href: '/pdf-merger', title: 'PDF Merger' },
            { href: '/more-pdf-tools', title: 'More PDF Tools' },
        ]
    },
    {
        title: 'Compare',
        children: [
            { href: '/chatpdf-alternative', title: 'ChatPDF Alternative' },
            { href: '/pdfai-alternative', title: 'PDFAI Alternative' },
        ]
    },
    {
        title: 'About',
        children: [
            { href: 'about-us', title: 'About Us' },
            { href: 'contact-us', title: 'Contact Us' },
            { href: 'terms-and-conditions', title: 'Terms and Conditions' },
            { href: 'privacy-policy', title: 'Privacy Policy' },
        ]
    },
];

export default function Footer() {
    return (
        <>
            <footer className="relative bg-[#060419] pt-10 pb-2 text-[#fafafa]">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap text-center lg:text-left">
                        <div className="w-full lg:w-4/12 px-4">
                            <h4 className="text-[22px] font-[500] mb-[20px]">[logo] PDF AI Chatbot</h4>
                            <p className="text-[15px] text-blueGray-600">#1 PDF AI Chatting Tool</p>
                            <p className="text-[15px] text-blueGray-600 mb-[20px]">Read & learn lengthy documents faster than never before.</p>
                            <p className="text-[15px] text-blueGray-600">Start Chatting Online with Your PDFs Now!</p>

                        </div>
                        <div className="w-full lg:w-8/12 px-4 ml-auto">
                            <div className="flex flex-wrap items-top mb-6">
                                {FooterNavLinks.map(link => (
                                    <div className="w-full lg:w-4/12" key={link.title}>
                                        <p className="block uppercase text-[17px] font-[600] text-[#FFFFFF] mb-6">
                                            {link.title}
                                        </p>
                                        {link.children && (
                                            <>
                                                <ul className="list-unstyled">
                                                    <li>
                                                        {link.children.map(child => (
                                                            <a key={child.title} className="text-[#a2a1a9] hover:text-[#fafafa] font-semibold block pb-2 text-sm" href={child.href}>
                                                                {child.title}
                                                            </a>
                                                        ))}
                                                    </li>
                                                </ul>
                                            </>
                                        )}

                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <hr className="mt-3 mb-2 border-[#6a6a6a]"/>
                    <div className="flex flex-wrap items-center md:justify-between justify-center">
                        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                            <div className="text-[15px] text-blueGray-500 font-[500] py-1">
                                Copyright © {new Date().getFullYear()} By{" "}
                                <a
                                    href="/"
                                    className="text-blueGray-500 hover:text-blueGray-800"
                                >
                                    PDF AI Chatbot
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
