import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const FAQ = () => {
    const [faqs, setFaqs] = useState([
        {
            question: "Are the products on this app real?",
            answer:
                "No, the products on this app are not real and are gotten by querying the fake store API products endpoint",
            open: true
        },
        {
            question: "Can I purchase on these site?",
            answer: "As already stated above the products are not real so no purchases can be made",
            open: false
        },
        {
            question:
                "What functions can I perform on these app?",
            answer: "Every other function you can peform on an E-commerce application can be performed here apart from purchasing a product. Functions like adding to cart, wishlisting a product amongst others can be performed. ",
            open: false
        },
        {
            question: "What is the purpose of this app?",
            answer: "The purpose of this app is to show my recuiter that I am capable of building an application using the latest technologies available.",
            open: false
        },
        {
            question: "What is the Tech stack for this app?",
            answer: "This app was built using React, Redux and Tailwind Css",
            open: false
        }
    ]);

    const toggleFAQ = index => {
        setFaqs(
            faqs.map((faq, i) => {
                if (i === index) {
                faq.open = !faq.open;
                } else {
                faq.open = false;
                }
        
                return faq;
            })
            );
        };

    return (
        <div>
            <h1 className="font-bold text-gray-900 text-2xl mb-3">FAQs about this app.</h1>
            {/* faqs */}
            <div className="flex flex-col space-y-6">
                { faqs.map((faq, i) => (
                    <div className="rounded-xl bg-gray-800 shadow-lg shadow-gray-700/80" key={i}>
                        <div className={`question ${faq.open ? "border-b-2 border-gray-600" : ""}  p-6 flex gap-4 justify-between items-center`}>
                            <h1 className="font-bold text-white">{faq.question}</h1>
                            {faq.open ? <AiOutlineMinus className='text-white cursor-pointer' onClick={() => toggleFAQ(i)} /> : <AiOutlinePlus className='text-white cursor-pointer' onClick={() => toggleFAQ(i)}/>}
                        </div>
                        <div className={`answer ${faq.open? "block" : "hidden"}`}>
                            <p className='text-gray-200 p-6'>{faq.answer}</p>
                        </div>
                    </div>
                )) }
            </div>
        </div>
    )
}

export default FAQ