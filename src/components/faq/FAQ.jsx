// src/FAQ.js

import React, { useState } from 'react';

const FAQ = ({ faqs, openIndex, toggleFAQ }) => {
    return (
        <div className="flex flex-col space-y-4"> 
            {faqs.map((faq, index) => (
                <div key={index} className="bg-gradient-to-r from-[#e7cd22] via-[#b29f1f] to-[#373317] rounded-lg shadow-md">
                    <div className={`border-b border-gray-300 ${openIndex === index ? 'bg-gradient-to-r from-[#e7cd22] via-[#b29f1f] to-[#373317]' : ''}`}>
                        <button
                            className="w-full text-left py-4 px-4 bg-gradient-to-r from-[#e7cd22] via-[#b29f1f] to-[#373317]"
                            onClick={() => toggleFAQ(index)}
                        >
                            {faq.question}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

const FAQSection = () => {
    const faqs = [
        {
            question: "How Does Laser Hair Removal Work?",
            answer: "Laser hair removal uses concentrated light to target hair follicles, providing a quick and efficient method to reduce hair growth."
        },
        {
            question: "Does Laser Hair Removal Hurt?",
            answer: "The treatment is virtually painless, especially compared to waxing. Each pulse lasts less than a second."
        },
        {
            question: "How Many Sessions Are Needed?",
            answer: "Most clients require 6-8 sessions for optimal results."
        },
        {
            question: "Is It Safe For All Skin Types?",
            answer: "Yes, but it's important to consult a professional for personalized advice."
        },
        {
            question: "Why You Choose Us?",
            answer: "We offer advanced technology and personalized treatments for the best results."
        }
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="container mx-auto px-6 py-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="col-span-1 md:col-span-1">
                    <div className="flex items-center justify-center space-x-4">
                        <img src="sun.png" alt="Sun" className="w-14 h-14" />
                        <h1 className="text-xl font-bold text-center bg-gradient-to-r from-[#e7cd22] via-[#b29f1f] to-[#373317] bg-clip-text text-transparent">
                            We Have Answers Of
                        </h1>
                        <img src="sun.png" alt="Sun" className="w-14 h-14" />
                    </div>

                    <FAQ faqs={faqs} openIndex={openIndex} toggleFAQ={toggleFAQ}  className="bg-gradient-to-r from-[#e7cd22] via-[#b29f1f] to-[#373317]"/>
                </div>

                <div className="col-span-1 md:col-span-2 bg-gradient-to-r from-[#e7cd22] via-[#b29f1f] to-[#373317] px-6 py-4">
                    {openIndex !== null ? (
                        <div>
                            <h1 className="text-lg md:text-xl">{faqs[openIndex].answer}</h1>
                        </div>
                    ) : (
                        <div>
                            <h1 className="text-lg md:text-xl">
                                One of the benefits of Laser Hair Removal is that the treatment is virtually painless, especially compared to waxing. Each pulse lasts less than a second, producing a slight tingling feeling. In particularly sensitive areas, such as the upper lip, it may feel like a rubber band snap on the skin. We use an advanced cooling machine in conjunction with our laser device to reduce the heat sensation on the skin and minimize any discomfort.
                            </h1>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FAQSection;
