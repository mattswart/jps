import { useState } from 'react';
import FaqItem from '@/components/FaqItem';

export default function Faq({ heading, faqs }) {
    const [openFaqIndex, setOpenFaqIndex] = useState(null);

    const handleFaqClick = (index) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    // Don't render the section if there are no FAQs
    if (!faqs || faqs.length === 0) {
        return null;
    }

    return (
        <div className="section text-white flex flex-col md:flex-row md:gap-6">
            <h2 className="uppercase text-3xl font-black pb-4 md:basis-1/4">{heading}</h2>
            <div className="faq-items flex flex-col gap-2 md:basis-3/4">
                {faqs.map((faq, index) => (
                    <FaqItem
                        key={index}
                        question={faq.q}
                        answer={faq.a}
                        isOpen={index === openFaqIndex}
                        onClick={() => handleFaqClick(index)}
                    />
                ))}
            </div>
        </div>
    );
};