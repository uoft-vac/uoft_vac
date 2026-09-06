"use client";

import Image from "next/image";
import {
    useState,
    MouseEvent,
} from "react";

import {
    BARS_CENTRE_GREEN,
    FAQ_CENTRE_YELLOW,
    FAQ_EDGES_YELLOW,
} from "../common/constants";
import { faqs } from "./FAQs";
import Question from "./Question";
import { useIsMobile } from "../layout/useIsMobile";
import SectionTitle from "../common/SectionTitle";
import { divGradientStyleBackground } from "../common/divGradientStyleBackground";


export default function FAQPageClient() {
    const isMobile = useIsMobile()

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const handleClick = (e: MouseEvent<HTMLDivElement>, index: number) => {
        const target = e.target as HTMLElement;
        if (target.closest("a")) return; // If clicking on a link, do not collapse.
        toggleFAQ(index);
    };

    return (
        <main className="mt-10 mb-15 flex flex-col items-center">

            {/* Section title */}
            <SectionTitle
                src="/title-faq.webp"
                height="min(5rem,6cqw)"
            >
                Frequently Asked Questions
            </SectionTitle>

            {/* Container top graphic (Frodo face) */}
            <div className={`mt-10 ${!isMobile && "mx-[5cqw]"}`}>
                <Image
                    src="/faq-container-top.webp"
                    alt="Frodo Head"
                    className=" object-contain"
                    width={2000} height={0}
                />
            </div>
            
            {/* Green container */}
            <div
                className={`${!isMobile ? "mx-[5cqw] px-10 pb-5" : "px-5 pb-3"}`}
                style={{ background: BARS_CENTRE_GREEN }}
            >
                {/* Yellow container */}
                <div
                    className={`px-5 rounded-2xl ${!isMobile ? "shadow-lg" : "shadow-md"}`}
                    style={{ background: divGradientStyleBackground(
                        FAQ_CENTRE_YELLOW,
                        FAQ_EDGES_YELLOW,
                        3,
                        3,
                    ) }}
                >
                    {/* Map the data in FAQs.tsx using the Question.tsx component. */}
                    {faqs.map((faq, i) => (
                        <Question
                            key={i}
                            question={faq.question}
                            answer={faq.answer}
                            isExpanded={openIndex === i}
                            index={i}
                            onClick={(e) => handleClick(e, i)}
                        />
                    ))}
                </div>
            </div>

            {/* Container bottom graphic (Frodo butt) */}
            <div className={`${!isMobile && "mx-[5cqw]"}`}>
                <Image
                    src="/faq-container-bot.png"
                    alt="Frodo butt"
                    className=" object-contain"
                    width={2000} height={0}
                />
            </div>
        </main>
    );
}
