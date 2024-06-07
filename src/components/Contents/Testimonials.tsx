"use client"; // 添加这行

import React from "react";
import Image from "next/image";

const testimonials = [
    {
        name: 'Jonathan Miller',
        content: "Instead of spending hours digging through lengthy documents, I can now quickly find specific clauses and terms with just a few simple queries.",
        role: 'Senior Partner',
        unit: 'Miller & Associates',
        img: '/images/CustomersReview-Jonathan Miller.jpg',
        imgalt: "Jonathan Miller - Instead of spending hours digging through lengthy documents, I can now quickly find specific clauses and terms with just a few simple queries.",
        tags: ['#PDFAI', '#PDFCHAT']
    },
    {
        name: 'Emily Roberts',
        content: "Finding information in PDFs used to be a huge headache. Since I started using XXX, it's so much easier. I just type in a question and it gives me the exact info I need. My students love that I can answer their questions quickly!",
        role: 'Teacher',
        unit: 'Lincoln High School',
        img: '/images/CustomersReview-Emily Roberts.jpg',
        imgalt: "Emily Roberts - Finding information in PDFs used to be a huge headache. Since I started using XXX, it's so much easier. I just type in a question and it gives me the exact info I need. My students love that I can answer their questions quickly!",
        tags: ['#PDFCHAT', '#DocumentChat', '#PDFAI']
    },
    {
        name: 'Sarah Thompson',
        content: "Being able to quickly summarize a long PDF has been a lifesaver. XXX lets me get the key points without reading every page. It’s great because now I have more time for my clients, and they really appreciate that.",
        role: 'Financial Advisor',
        unit: 'Thompson Wealth Management',
        img: '/images/CustomersReview-Sarah Thompson.jpg',
        imgalt: "Sarah Thompson - Being able to quickly summarize a long PDF has been a lifesaver. XXX lets me get the key points without reading every page. It’s great because now I have more time for my clients, and they really appreciate that.",
        tags: ['#AIInteraction', '#TechTools', '#EfficientReading']
    },
    {
        name: 'David Hernandez',
        content: "XXX is the best thing that happened to my workflow. Normally, I'd spend ages flipping through PDFs, but with this AI tool, I just ask it what I need to know, and it points me to the exact spot. No more endless scrolling! If you work with PDFs, you NEED this.",
        role: 'Research Analyst',
        unit: 'Global Insights Inc',
        img: '/images/CustomersReview-David Hernandez.jpg',
        imgalt: "David Hernandez - XXX is the best thing that happened to my workflow. Normally, I'd spend ages flipping through PDFs, but with this AI tool, I just ask it what I need to know, and it points me to the exact spot. No more endless scrolling! If you work with PDFs, you NEED this.",
        tags: ['#PDFInsights', '#ProfessionalEfficiency', '#PDFCHAT']
    },
    {
        name: 'Emma Davis',
        content: "XXX is super easy to use. I'm not the most tech-savvy person, but even I figured it out right away. My deadlines don't feel as stressful now, and my editor's thrilled with how fast I can turn things around.",
        role: 'Freelance Writer',
        unit: 'Creative Pens Publishing',
        img: '/images/CustomersReview-Emma Davis.jpg',
        imgalt: "Emma Davis - XXX is super easy to use. I'm not the most tech-savvy person, but even I figured it out right away. My deadlines don't feel as stressful now, and my editor's thrilled with how fast I can turn things around.",
        tags: ['#TechTools', '#SmartPDF', '#AIReader']
    },
    {
        name: 'Ethan Reynolds',
        content: "Being a student is tough, especially when you're drowning in papers. But XXX's like having a super-smart buddy to help you out whenever you're stuck. Sure, it's not flawless, but it's a real time-saver. If you're in the same boat, definitely give it a shot!",
        role: 'Student',
        unit: 'UC Berkeley',
        img: '/images/CustomersReview-Ethan Reynolds.jpg',
        imgalt: "Ethan Reynolds - Being a student is tough, especially when you're drowning in papers. But XXX's like having a super-smart buddy to help you out whenever you're stuck. Sure, it's not flawless, but it's a real time-saver. If you're in the same boat, definitely give it a shot!",
        tags: ['#EfficientReading', '#StudentAid', '#PDFAI', '#PDFCHAT']
    },
];

export default function Testimonials() {
    return (
        <div className="bg-[#ffffff] pt-[60px] pb-[60px] relative">
            <div className="container max-w-screen-xl mx-auto">
                <div className="max-w-[968px] mx-auto text-center">
                    <p className="flex items-center justify-center text-[#3482f0] text-[15px] font-[600] uppercase">
                        <Image
                            src={"/images/icon-diamond.png"}
                            width={20}
                            height={20}
                            className='inline-block w-[20px] h-[20px] mr-[10px]'
                        />
                        Testimonials
                        <Image
                            src={"/images/icon-diamond.png"}
                            width={20}
                            height={20}
                            className='inline-block w-[20px] h-[20px] ml-[10px]'
                        />
                    </p>
                    <h2 className="text-[40px] capitalize leading-[65px] text-[#212B36] font-[600] pb-[20px]">Customers Love XXX!</h2>
                    <p className="text-[16px] leading-[27px] text-[#565656]">[ 描述 ]</p>
                </div>

                <div className="mt-[40px] px-[45px] grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-3">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white rounded-[30px] border border-gray-200 shadow-custom p-[32px] flex flex-col gap-y-5">
                            <div className="flex gap-4 justify-start items-center">
                                <div className="w-[40px] h-[40px] flex-shrink-0 overflow-hidden rounded-[360px] border-2 border-solid border-[#1e58eb]">
                                    <Image src={testimonial.img} alt={testimonial.imgalt} width={40} height={40} className="object-cover" />
                                </div>
                                <div className="flex flex-col">
                                    <div className="text-[16px] font-[600] pb-[2px]">{testimonial.name}</div>
                                    <div className="text-[12px] text-[#7c7c7c] leading-[14px]">{testimonial.role}, {testimonial.unit}</div>
                                </div>
                            </div>
                            <div className="quote">
                                <div className="quote-mark">" </div>
                                <div>{testimonial.content}</div>
                                <div className="quote-mark"> "</div>
                            </div>
                            <div>
                                {testimonial.tags.map((tag, tagIndex) => (
                                    <span key={tagIndex} className="text-[#1e58eb] pr-[5px]">
                                        {tag}{tagIndex !== testimonial.tags.length - 1 ? ' ' : ''}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}