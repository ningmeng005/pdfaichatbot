import React from "react";
import Link from "next/link";
import Image from "next/image";
import { createPopper } from "@popperjs/core";

const headerNavLinks = [
    { href: '/', title: 'Home' },
    { href: '/tools', title: 'Tools' },
    {
        title: 'Use Cases ',
        children: [
            { href: '/about-us', title: 'For All' },
            { href: '/for-writers', title: 'For Writers' },
            { href: '/privacy-policy', title: 'For Students' },
            { href: '/privacy-policy', title: 'For Researchers' },
            { href: '/privacy-policy', title: 'For Web Developer' },
            { href: '/privacy-policy', title: 'For Legal Professionsls' },
            { href: '/privacy-policy', title: 'For Financial Professionsls' },
            { href: '/privacy-policy', title: 'For Markrting Professionsls' },
        ]
    },
    {
        title: 'About ',
        children: [
            { href: '/about-us', title: 'About us' },
            { href: '/contact-us', title: 'Contact us' },
            { href: '/privacy-policy', title: 'Privacy Policy' },
        ]
    },
    {
        title: 'Language',
        children: [
            { href: '/', title: 'English' },
            { href: '/br', title: 'Português (BR)' },
            { href: '/es', title: 'Español (ES)' },
            { href: '/id', title: 'Indonesia (ID)' },
        ]
    },
];

const IndexDropdown = () => {
    const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
    const btnDropdownRef = React.createRef();
    const popoverDropdownRef = React.createRef();
    const openDropdownPopover = () => {
        createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
            placement: "bottom-start",
        });
        setDropdownPopoverShow(true);
    };
    const closeDropdownPopover = () => {
        setDropdownPopoverShow(false);
    };

    return (
        <div className="flex items-center text-[16px] space-x-6 leading-5 sm:space-x-6">
            {headerNavLinks.map(link => (
                <div key={link.title} className="font-[600] text-[15px] group relative hover:text-[#040322] flex items-center gap-1 py-5">
                    <a className="hover:cursor-pointer" href={link.href}>
                        {link.title}
                    </a>
                    {link.children && (
                        <>
                            <div className="bg-white shadow-[0px_12px_24px_rgba(0,80,125,0.08)] absolute top-[62px] left-1/2 -translate-x-1/2 max-w-[1300px] w-full min-w-fit rounded-xl transition-all overflow-hidden origin-top-left opacity-0 scale-y-0 -translate-y-5 -z-10 flex group-hover:opacity-100 group-hover:scale-y-100 group-hover:translate-y-0 group-hover:z-10">
                                <div className="p-4 space-y-4">
                                    {link.children.map(child => (
                                        <a key={child.title} className="flex items-center whitespace-nowrap gap-[6px] text-display font-semibold text-black hover:text-[#00D3B6]" href={child.href}>
                                            {child.title}
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <span className="transform transition-transform duration-300 group-hover:rotate-180">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 font-[900]">
                                    <path fillRule="evenodd" d="M12 15.707l-5.646-5.647a.75.75 0 011.06-1.06L12 13.586l4.586-4.586a.75.75 0 111.06 1.06L12 15.707z" clipRule="evenodd" />
                                </svg>
                            </span>
                        </>
                    )}
                </div>
            ))}
            <div className="flex items-center justify-between min-w-16">
                <a
                    className="block bg-gradient-to-r from-[#1b6dde] to-[#1b6dde] text-[#ffffff] text-[14px] font-[600] px-5 py-2 rounded-full"
                    href="/dashboard"
                    rel="nofollow">
                    Try For Free
                    <Image
                        src={"/images/icon-right.png"}
                        alt=""
                        width={20}
                        height={20}
                        className='inline-block text-[#ffffff] text-[14px]'
                    />
                </a>
            </div>
        </div>
    );
};

export default IndexDropdown;