/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Image from "next/image";
import Link from "next/link";

// components
import IndexNavbar from "@/components/Navbars/IndexNavbar";
import Footer from "@/components/Footers/Footer";
import Testimonials from "@/components/Contents/Testimonials";
import FrequentlyAskedQuestions from "@/components/Contents/FrequentlyAskedQuestions";
import ChatbotListening from "@/components/Contents/ChatbotListening";


const iframedescriptiondata = [
    {
        title: 'PDF to AI Conversation',
        alt: 'PDF to AI Conversation',
        description: "You can ask anything about your PDFs. Just type in what you need, and get responses in real-time.",
        image: '/images/iframedescription-1.png',
    },
    {
        title: 'Save Time',
        alt: 'Save Time',
        description: "Don't waste time hunting for information. Ask for any summary or extract key information - all in seconds.",
        image: '/images/iframedescription-2.png',
    },
    {
        title: 'Easy Learning',
        alt: 'Easy Learning',
        description: "We all know how things keep interesting when interacting with your documents while learning.",
        image: '/images/iframedescription-3.png',
    },
];

const UseCasetags = [
    {
        alt: 'AI-Powered PDF Interaction for Any Use Case - Book.pdf',
        text: "Book.pdf",
    },
    {
        alt: 'AI-Powered PDF Interaction for Any Use Case - Book.pdf',
        text: "Financial Report.pdf",
    },
    {
        alt: 'AI-Powered PDF Interaction for Any Use Case - Book.pdf',
        text: "Contact.pdf",
    },
    {
        alt: 'AI-Powered PDF Interaction for Any Use Case - Book.pdf',
        text: "User Manual.pdf",
    },
    {
        alt: 'AI-Powered PDF Interaction for Any Use Case - Book.pdf',
        text: "Invoice.pdf",
    },
    {
        alt: 'AI-Powered PDF Interaction for Any Use Case - Book.pdf',
        text: "Scientific Paper.pdf",
    },
    {
        alt: 'AI-Powered PDF Interaction for Any Use Case - Book.pdf',
        text: "Marketing Brochure.pdf",
    },
    {
        alt: 'AI-Powered PDF Interaction for Any Use Case - Book.pdf',
        text: "Newsletter.pdf",
    },
]

const tags = [
    'Social Media Posts', 'Product Description', 'Blogs', 'Emails', 'Newsletters',
    'Blog Posts', 'Website Content', 'Messages', 'Reports', 'Presentations',
    // Add more tags as needed
];

export default function Page() {
    return (
        <>
            {/* BannerSection */}
            <section className="bg-banner-section">

                {/* header */}
                <IndexNavbar />

                <div className="bg-cover bg-center bg-no-repeat px-10 pt-[100px] pb-[400px] text-white">
                    <div className="justify-center text-center flex flex-wrap">
                        <div className="w-full md:w-6/12 px-12 md:px-4">
                            <h1 className="font-semibold text-[60px] text-[#ffffff]">Chat with Your PDFs</h1>
                            <p className="text-[28px] text-[#ffffff]">Read Faster Your Documents</p>
                            <p className="text-lg leading-relaxed mt-[40px] mb-10 text-[#b5b9bd]">
                                Enough endless pages scrolling! Let your PDF AI summarize, analyze, translate, extract takeaways, and give you answers and insights instantly from documents. Read smarter, work faster!
                            </p>
                            <div className="flex gap-4 justify-center">
                                <div className="flex items-center justify-between min-w-16 ml-[10px]">
                                    <a
                                        className="block bg-gradient-to-r from-[#3db1fc] to-[#7f61fe] text-white text-[20px] font-[600] px-10 py-2 rounded-full"
                                        href="#"
                                    >
                                        Chat with Your PDF for Free
                                        {/*<Image*/}
                                        {/*    src={"/images/icon-right.png"}*/}
                                        {/*    alt=""*/}
                                        {/*    width={20}*/}
                                        {/*    height={20}*/}
                                        {/*    className='inline-block w-[30px] h-auto'*/}
                                        {/*/>*/}
                                    </a>
                                </div>
                                {/*<div className="flex items-center justify-between min-w-16 ml-[10px]">*/}
                                {/*    <a*/}
                                {/*        className="block border-2 border-solid border-[#3c486c] text-white text-[18px] font-[400] px-6 py-2 rounded-full"*/}
                                {/*        href="#"*/}
                                {/*    >*/}
                                {/*        Try to demo*/}
                                {/*        <Image*/}
                                {/*            src={"/images/icon-right.png"}*/}
                                {/*            alt=""*/}
                                {/*            width={20}*/}
                                {/*            height={20}*/}
                                {/*            className='inline-block w-[20px] h-auto'*/}
                                {/*        />*/}
                                {/*    </a>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-[-320px]">
                {/* iframe */}
                <div className="max-w-screen-xl w-full px-4 mx-auto relative">
                    {/* iframe 部分，底层视频 */}
                    <div className="absolute inset-0 flex items-center justify-center z-0 max-w-[1000px] mx-auto mt-[30px] mb-[80px]">
                        <div className="relative w-full h-full" style={{ paddingTop: "65%", borderRadius: "35px" }}>
                            <iframe
                                src="https://customer-k5rghq683w5sm3cf.cloudflarestream.com/08305713d67ee6e204c0435b7ae5ce7f/iframe?muted=true&amp;preload=true&amp;loop=true&amp;autoplay=true&amp;poster=https%3A%2F%2Fcustomer-k5rghq683w5sm3cf.cloudflarestream.com%2F08305713d67ee6e204c0435b7ae5ce7f%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600"
                                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                                allowFullScreen
                                style={{
                                    borderRadius: "10px",
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    height: "100%",
                                    width: "100%"
                                }}
                            />
                        </div>
                    </div>
                    {/* 图片部分，顶层图片 */}
                    <div className="relative z-10">
                        <Image
                            src="/images/iframe-bg.png"
                            alt="Chat with Your PDF for Free"
                            layout="responsive"
                            width={1100} // 图片的原始宽度
                            height={600} // 图片的原始高度
                            quality={100} // 设置图片优化质量，可以在1-100之间
                            className="w-full h-auto"
                        />
                    </div>
                </div>

                {/* iframedescription */}
                <div className="container max-w-screen-xl xl:mx-auto pt-[50px] sm:pt-[50px] pb-[50px] sm:pb-[50px] sm:px-4 ">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-[64px] sm:gap-[50px]">
                        {iframedescriptiondata.map((item, index) => (
                            <div key={index} className="p-[40px] rounded-[30px] shadow-lg gradient-border">
                                <div className="flex items-center pb-[30px] sm:pb-[30px]">
                                    <Image
                                        src={item.image}
                                        alt={item.alt}
                                        width={62}
                                        height={62}
                                        className="w-auto h-[40px]"
                                    />
                                </div>
                                <div className="flex flex-col">    {/* items-center gap-2 sm:gap-9*/}
                                    <h3 className="text-[20px] sm:text-[20px] pb-[10px] sm:pb-[10px] font-[600]">       {/* text-center text-2xl sm:text-5xl tracking-[-1.2px] leading-[34.5px]*/}
                                        {item.title}
                                    </h3>
                                    <p className="pb-5 sm:pb-0 max-w-sm leading-[22px] sm:leading-[22px] text-[16px] sm:text-[16px] text-gray-600">{/* text-center text-[17px] sm:text-2xl leading-[20px] sm:leading-[34.5px] tracking-[-0.34px] sm:tracking-[-0.6px]*/}
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* AI-Powered PDF Interaction for Any Use Cases */}
            <section>
                <div className="pt-[30px] pb-[30px]">
                    <div className="container max-w-screen-xl mx-auto">
                        <div className="max-w-[968px] mx-auto text-center">
                            <p className="flex items-center justify-center text-[#3482f0] text-[15px] font-[600] uppercase">
                                <Image
                                    src={"/images/icon-diamond.png"}
                                    width={20}
                                    height={20}
                                    className='inline-block w-[20px] h-[20px] mr-[10px]'
                                />
                                PDF AI Chatbot -- Use Cases
                                <Image
                                    src={"/images/icon-diamond.png"}
                                    width={20}
                                    height={20}
                                    className='inline-block w-[20px] h-[20px] ml-[10px]'
                                />
                            </p>
                            <h2 className="text-[40px] capitalize leading-[65px] text-[#212B36] font-[600] mt-[-5px] pb-[5px]">AI-Powered PDF Interaction for Any Use Cases</h2>
                            <p className="max-w-[860px] mx-auto text-[16px] leading-[24px] text-[#565656]">
                                At XXX, we're a team of AI experts who get what it's like to deal with dense,
                                multi-page PDFs. Making it easier for you to find, summarize, and understand
                                all that information is why XXX was created -
                                it works no matter what kind of PDF content you want to explore. </p>
                        </div>
                        <div className="mt-10 max-w-4xl mx-auto w-full flex flex-wrap justify-center gap-4">
                            {UseCasetags.map((item, index) => (
                                <span key={index} className="bg-white text-gray-700 py-2 px-4 rounded-full shadow-md">
                                    <Image
                                        src={"/images/icon-diamond.png"}
                                        alt={item.alt}
                                        width={20}
                                        height={20}
                                        className='inline-block w-[20px] h-[20px]'
                                    />{item.text}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

            </section>

            {/*banner*/}
            {/*<section className="bg-[#020918]">*/}
            {/*    <div className="justify-center text-center flex flex-wrap">*/}
            {/*        <div className="w-full md:w-6/12 px-12 md:px-4">*/}
            {/*            <h1 className="font-semibold text-[48px] text-[#ffffff]">Chat with Your PDFs</h1>*/}
            {/*            <p>Read Any Documents Faster with AI</p>*/}
            {/*            <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">*/}
            {/*                Enough endless pages scrolling! Let your PDF AI summarize, analyze, translate, extract takeaways, and give you answers and insights instantly from documents. Read smarter, work faster!*/}
            {/*            </p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}

            {/*Testimonials*/}
            {/*<section>*/}
            {/*    <Testimonials />*/}
            {/*</section>*/}

            {/*FAQ*/}
            {/*<section>*/}
            {/*    <FrequentlyAskedQuestions />*/}
            {/*</section>*/}

            {/*XXX Chatbot is Listening - Talk to Your PDF AI Assistant*/}
            {/*<section>*/}
            {/*    <ChatbotListening />*/}
            {/*</section>*/}

            <Footer />
        </>
    );
}
