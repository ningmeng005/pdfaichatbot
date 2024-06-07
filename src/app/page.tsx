/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";

// components
import IndexNavbar from "@/components/Navbars/IndexNavbar";
import Footer from "@/components/Footers/Footer";
import FrequentlyAskedQuestions from "@/components/Contents/FrequentlyAskedQuestions";
import ChatbotListening from "@/components/Contents/ChatbotListening";

export default function Page() {
    return (
        <>
            <IndexNavbar fixed />

            {/*banner*/}
            <section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
                <div className="justify-center text-center flex flex-wrap mt-24">
                    <div className="w-full md:w-6/12 px-12 md:px-4">
                        <h1 className="font-semibold text-[48px] text-[#212b36]">Chat with Your PDFs</h1>
                        <p>Read Any Documents Faster with AI</p>
                        <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
                            Enough endless pages scrolling! Let your PDF AI summarize, analyze, translate, extract takeaways, and give you answers and insights instantly from documents. Read smarter, work faster!
                        </p>
                    </div>
                </div>
            </section>

            {/*FAQ*/}
            <section>
                <FrequentlyAskedQuestions />
            </section>

            {/*XXX Chatbot is Listening - Talk to Your PDF AI Assistant*/}
            <section>
                <ChatbotListening />
            </section>

            <Footer />
        </>
    );
}
