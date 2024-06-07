import React from "react";
import Image from "next/image";

export default function ChatbotListening() {
    return (
        <>
            <div className="bg-[#f8fbff] pt-[60px] pb-[60px] relative">
                <div className="container mx-auto px-4 flex flex-row bg-[#ffffff] rounded-[20px]">
                    <div className="">
                        <h2 className="text-[30px] capitalize leading-[65px] text-[#212B36] font-[600] pb-[20px]">XXX Chatbot is Listening - Talk to Your PDF AI Assistant</h2>
                        <p className="text-[16px] leading-[27px]">Streamline your PDF workflow with our PDF AI Chat tool. Talk to it, ask it what you need, and watch the answers roll in.</p>
                    </div>

                    <div className="">
                        <button>
                            Get Started for Free
                        </button>
                    </div>

                </div>
            </div>
        </>
    );
}