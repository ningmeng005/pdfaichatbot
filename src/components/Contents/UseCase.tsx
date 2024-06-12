"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const tagsLeft = [
    { alt: 'PDF AI - Book.pdf', text: 'Book.pdf' },
    { alt: 'PDF AI - Financial Report.pdf', text: 'Financial Report.pdf' },
    { alt: 'PDF AI - Contact.pdf', text: 'Contact.pdf' },
    { alt: 'PDF AI - User Manual.pdf', text: 'User Manual.pdf' },
    { alt: 'PDF AI - Invoice.pdf', text: 'Invoice.pdf' },
    { alt: 'PDF AI - Scientific Paper.pdf', text: 'Scientific Paper.pdf' },
    { alt: 'PDF AI - Marketing Brochure.pdf', text: 'Marketing Brochure.pdf' },
    { alt: 'PDF AI - Newsletter.pdf', text: 'Newsletter.pdf' },
];

const tagsRight = [
    { alt: 'PDF AI - Research Paper.pdf', text: 'Research Paper.pdf' },
    { alt: 'PDF AI - Business Proposal.pdf', text: 'Business Proposal.pdf' },
    { alt: 'PDF AI - Survey Results.pdf', text: 'Survey Results.pdf' },
    { alt: 'PDF AI - Magazine.pdf', text: 'Magazine.pdf' },
    { alt: 'PDF AI - Investments Prospectus.pdf', text: 'Investments Prospectus.pdf' },
    { alt: 'PDF AI - Thesis Proposal.pdf', text: 'Thesis Proposal.pdf' },
    { alt: 'PDF AI - Patent Application.pdf', text: 'Patent Application.pdf' },
    { alt: 'PDF AI - Textbook.pdf', text: 'Textbook.pdf' },
];

const tagsLeft2 = [
    { alt: 'PDF AI - Lecture Notes.pdf', text: 'Lecture Notes.pdf' },
    { alt: 'PDF AI - Training Manual.pdf', text: 'Training Manual.pdf' },
    { alt: 'PDF AI - Annual Report.pdf', text: 'Annual Report.pdf' },
    { alt: 'PDF AI - Business Case Analysis.pdf', text: 'Business Case Analysis.pdf' },
    { alt: 'PDF AI - Manga.pdf', text: 'Manga.pdf' },
    { alt: 'PDF AI - Exam Paper.pdf', text: 'Exam Paper.pdf' },
    { alt: 'PDF AI - Academic Journal Article.pdf', text: 'Academic Journal Article.pdf' },
    { alt: 'PDF AI - Workshop Handouts.pdf', text: 'Workshop Handouts.pdf' },
];

const UseCase: React.FC = () => {
    const scrollContainerLeftRef = useRef<HTMLDivElement>(null);
    const scrollContainerRightRef = useRef<HTMLDivElement>(null);
    const scrollContainerLeft2Ref = useRef<HTMLDivElement>(null);
    const [isPausedLeft, setIsPausedLeft] = useState(false);
    const [isPausedRight, setIsPausedRight] = useState(false);
    const [isPausedLeft2, setIsPausedLeft2] = useState(false);

    const scrollSpeed = 30;  // 毫秒间隔，可以调整这个值来改变滚动速度
    const scrollStep = 1;    // 每次滚动的像素数，增加这个值可以加快滚动速度


    useEffect(() => {
        const scrollEffect = (ref, direction = 'left') => {
            const scrollContainer = ref.current;
            let scrollInterval;
            const startScrolling = () => {
                scrollInterval = setInterval(() => {
                    if (scrollContainer) {
                        scrollContainer.scrollLeft += (direction === 'left' ? scrollStep : -scrollStep);
                        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
                            scrollContainer.scrollLeft = 0;
                        }
                        if (scrollContainer.scrollLeft <= 0) {
                            scrollContainer.scrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
                        }
                    }
                }, scrollSpeed);
            };

            if (!isPausedLeft && !isPausedRight && !isPausedLeft2) {
                startScrolling();
            }

            const handleMouseEnter = () => {
                clearInterval(scrollInterval);
                if (direction === 'left') setIsPausedLeft(true);
                if (direction === 'right') setIsPausedRight(true);
                if (direction === 'left2') setIsPausedLeft2(true);
            };

            const handleMouseLeave = () => {
                if (direction === 'left') setIsPausedLeft(false);
                if (direction === 'right') setIsPausedRight(false);
                if (direction === 'left2') setIsPausedLeft2(false);
            };

            scrollContainer?.addEventListener('mouseenter', handleMouseEnter);
            scrollContainer?.addEventListener('mouseleave', handleMouseLeave);

            return () => {
                clearInterval(scrollInterval);
                scrollContainer?.removeEventListener('mouseenter', handleMouseEnter);
                scrollContainer?.removeEventListener('mouseleave', handleMouseLeave);
            };
        };

        scrollEffect(scrollContainerLeftRef, 'left');
        scrollEffect(scrollContainerRightRef, 'right');
        scrollEffect(scrollContainerLeft2Ref, 'left2');
    }, [isPausedLeft, isPausedRight, isPausedLeft2]);

    return (
        <div className="relative mx-auto w-full">
            <div className="overflow-hidden relative" style={{ whiteSpace: 'nowrap', zIndex: 1 }} ref={scrollContainerLeftRef}>
                {Array(3).fill([...tagsLeft, ...tagsLeft]).flat().map((item, index) => (
                    <span key={index} className="gradient-border bg-[#f5f9ff] text-gray-700 py-2 px-8 text-[17px] rounded-full inline-flex items-center mx-2.5">
                        <Image src="/images/icon-pdf.png" alt={item.alt} width={18} height={18} className="inline-block w-[18px] h-[18px] mr-2" />
                        {item.text}
                    </span>
                ))}
            </div>
            <div className="overflow-hidden relative mt-3" style={{ whiteSpace: 'nowrap', zIndex: 1 }} ref={scrollContainerRightRef}>
                {Array(3).fill([...tagsRight, ...tagsRight]).flat().map((item, index) => (
                    <span key={index} className="gradient-border bg-[#f5f9ff] text-gray-700 py-2 px-8 text-[17px] rounded-full inline-flex items-center mx-2.5">
                        <Image src="/images/icon-pdf.png" alt={item.alt} width={18} height={18} className="inline-block w-[18px] h-[18px] mr-2" />
                        {item.text}
                    </span>
                ))}
            </div>
            <div className="overflow-hidden relative mt-3" style={{ whiteSpace: 'nowrap', zIndex: 1 }} ref={scrollContainerLeft2Ref}>
                {Array(3).fill([...tagsLeft2, ...tagsLeft2]).flat().map((item, index) => (
                    <span key={index} className="gradient-border bg-[#f5f9ff] text-gray-700 py-2 px-8 text-[17px] rounded-full inline-flex items-center mx-2.5">
                        <Image src="/images/icon-pdf.png" alt={item.alt} width={18} height={18} className="inline-block w-[18px] h-[18px] mr-2" />
                        {item.text}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default UseCase;