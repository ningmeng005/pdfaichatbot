"use client"; // 添加这行

import React, { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";

// 定义 FAQ 数据
const FAQItemmessage = [
    {
        question_text: "Q1: What AI model does XXX use, and is it better than ChatPDF?",
        answer_text: "A: XXX combines a range of AI models, including OpenAI's ChatGPT, Google Gemini, Together AI, Mixtral, Pinecone, and LangChain. It's one of the most versatile Chat PDF tools out there, and some say it's one of the best alternatives to ChatPDF.",
    },
    {
        question_text: "Q2: Is XXX PDFGPT free to use?",
        answer_text: "A: Yes, at the moment, XXX is completely free to use. You can read PDFs, summarize them, and more without paying a dime. We're doing this to get user feedback and improve the tool, so dive in and give it a try while it's free!",
    },
    {
        question_text: "Q3: What are the limitations of XXX?",
        answer_text: "A: XXX currently works with PDF files only. We don't support other formats yet, but we're building more features to make working with PDFs even easier, like a PDF compressor, splitter, editor, and other tools, and they are all free!",
    },
    {
        question_text: "Q4: How do I use XXX chatbot?",
        answer_text: "A: It's super easy. Just drag and drop a PDF file onto the workspace on our site, and you can start chatting with it.",
    },
    {
        question_text: "Q5: Is XXX open-source?",
        answer_text: "A: Yes, XXX is open-source, and we're happy to get contributions from anyone who wants to help. If you have ideas or code to contribute, we'd love to hear from you.",
    },
    {
        question_text: "Q6: Can XXX understand text in images within PDFs?",
        answer_text: "A: Not directly. However, we offer OCR (Optical Character Recognition), which can extract text from images. You can access this feature through the chat interface. It's not built into the AI model itself, but it's a handy workaround when you need to read text from images.",
    },
    {
        question_text: "Q7: How does XXX work?",
        answer_text: "A: XXX uses advanced natural language processing and AI to interact with PDFs. It creates a semantic index for each paragraph, so it can understand the document's structure and content. That’s why it’s so good at finding answers to your questions quickly.",
    },
];

// 定义 FAQ 项目组件
const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleFAQ = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="faq-item">
            <div className="faq-question" onClick={toggleFAQ}>
                <div className="text-[16px] text-[#3482f0] font-[600]">{question}</div>
                <div className="faq-icon">
                    <div className="icon-16px"
                         style={{
                             transform: `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(${isOpen ? 45 : 0}deg) skew(0deg, 0deg)`,
                             transformStyle: 'preserve-3d',
                         }}>
                        <div className="faq-icon-bar hoz"></div>
                        <div className="faq-icon-bar ver"></div>
                    </div>
                </div>
            </div>
            <div className="faq-answer" style={{ height: isOpen ? 'auto' : '0px', overflow: 'hidden' }}>
                <p className="faq-answer-text">{answer}</p>
            </div>
        </div>
    );
};

// 在 FAQ 组件中直接遍历 FAQItemmessage 数组
const FAQList: React.FC = () => {
    return (
        <div className="grid faq-wrap">
            {FAQItemmessage.map((faq, index) => (
                <FAQItem
                    key={index}
                    question={faq.question_text}
                    answer={faq.answer_text}
                />
            ))}
        </div>
    );
};

// Frequently Asked Questions 组件
const FrequentlyAskedQuestions = () => {
    return (
        <>
            {/* Frequently Asked Questions */}
            <div className="pt-[60px] pb-[60px] relative">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="max-w-[968px] mx-auto text-center">
                        <p className="flex items-center justify-center text-[#3482f0] text-[15px] font-[600]">
                            <Image
                                src={"/images/icon-diamond.png"}
                                width={20}
                                height={20}
                                className='inline-block w-[20px] h-[20px] mr-[10px]'
                            />
                                FAQ
                            <Image
                                src={"/images/icon-diamond.png"}
                                width={20}
                                height={20}
                                className='inline-block w-[20px] h-[20px] ml-[10px]'
                            />
                        </p>
                        <h2 className="text-[40px] capitalize leading-[65px] text-[#212B36] font-[600] pb-[20px]">Frequently Asked Questions</h2>
                        <p className="text-[16px] leading-[27px] text-[#565656]">[ 描述 ]</p>
                    </div>

                    <div className="mt-[40px]">
                        <FAQList />
                    </div>

                </div>
            </div>
        </>
    );
};

export default FrequentlyAskedQuestions;
