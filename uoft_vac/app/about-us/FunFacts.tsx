"use client";

import Image from "next/image";

import {
    SUBSECTION_BASE_BLUE,
} from "../common/constants";
import { useIsMobile } from "../layout/useIsMobile";
import SectionTitle from "../common/SectionTitle";

const FACT_CLOUD_IMG_CLASSNAME = "z-[-1] object-contain";
const FACT_TEXT_CLASSNAME = `m-[5cqw] text-[9cqw] text-center`;


export default function FunFacts() {
    const isMobile = useIsMobile();
    const isSmaller = useIsMobile(true);

    const FACT_CONTAINER_CLASSNAME =
        `${!isMobile ? "w-[24cqw]" :
            !isSmaller ? "w-[35cqw]" : "w-75"}
        aspect-square flex items-center relative`;

    return (
        <section
            className="my-15 flex flex-col items-center"
            style={{ containerType: "inline-size" }}
        >

            {/* Section title */}
            <SectionTitle
                src="/title-fun-facts.webp"
                height="min(7rem,17.5cqw)"
            >
                Fun Facts!
            </SectionTitle>

            {/* Facts container */}
            <div className={`${!isSmaller && "grid"} ${!isMobile
                ? "mt-10 gap-[1cqw] grid-cols-4"
                : !isSmaller ? "mt-20" : "mt-10"}
                grid-cols-2`}
            >

                {/* Fact 1 */}
                <div
                    className={`${!isMobile
                        ? "translate-y-[0cqw]"
                        : !isSmaller 
                            ? "-translate-x-[5cqw]"
                            : "-translate-x-[10cqw] -mb-10"}
                        ${FACT_CONTAINER_CLASSNAME}`}
                    style={{ containerType: "inline-size" }}
                >
                    <Image
                        src="/fact-cloud1.webp"
                        alt="Fact 1"
                        className={FACT_CLOUD_IMG_CLASSNAME}
                        fill
                    />

                    <p className={FACT_TEXT_CLASSNAME}>
                        VAC originated from the <strong>Scarborough campus</strong> and then branched out to <strong>St. George in 2019</strong>.
                    </p>
                </div>

                {/* Fact 2 */}
                <div
                    className={`${!isMobile
                        ? "translate-y-[5cqw]"
                        : !isSmaller 
                            ? "-translate-y-[5cqw]"
                            : "translate-x-[7.5cqw] -mb-15"}
                        ${FACT_CONTAINER_CLASSNAME}`}
                    style={{ containerType: "inline-size" }}
                >
                    <Image
                        src="/fact-cloud2.webp"
                        alt="Fact 2"
                        className={FACT_CLOUD_IMG_CLASSNAME}
                        fill
                    />

                    <p className={FACT_TEXT_CLASSNAME}>
                        VAC used to be known as <strong>VAS</strong> – <strong>The Visual Art Society</strong>.
                    </p>
                </div>

                {/* Fact 3 */}
                <div
                    className={`${!isMobile
                        ? "translate-y-[1cqw]"
                        : !isSmaller 
                            ? "translate-y-[5cqw]"
                            : "-translate-x-[7.5cqw] -mb-20"}
                        ${FACT_CONTAINER_CLASSNAME}`}
                    style={{ containerType: "inline-size" }}
                >
                    <Image
                        src="/fact-cloud3.webp"
                        alt="Fact 3"
                        className={FACT_CLOUD_IMG_CLASSNAME}
                        fill
                    />

                    <p className={FACT_TEXT_CLASSNAME}>
                        VAC only held virtual events in <strong>2020 and 2021</strong>.
                    </p>
                </div>

                {/* Fact 4 */}
                <div
                    className={`${!isMobile
                        ? "translate-y-[6cqw]"
                        : !isSmaller 
                            ? "translate-x-[5cqw]"
                            : "translate-x-[10cqw]"}
                        ${FACT_CONTAINER_CLASSNAME}`}
                    style={{ containerType: "inline-size" }}
                >
                    <Image
                        src="/fact-cloud4.webp"
                        alt="Fact 4"
                        className={FACT_CLOUD_IMG_CLASSNAME}
                        fill
                    />

                    <p className={FACT_TEXT_CLASSNAME}>
                        2022 was the first year we held <strong>in-person events</strong> again.
                    </p>
                </div>
            </div>

            {/* Mascot container */}
            <div className={`${!isMobile
                ? "mt-[7cqw] ml-[25cqw]"
                : "mt-[10cqw] ml-[50cqw] max-[700px]:ml-[10cqw]"}
                w-full flex items-center relative`}
            >

                {/* Frodo */}
                <div className="w-[min(8rem,15cqw)] aspect-square relative">
                    <Image
                        src="/frodo-facts.webp"
                        alt="Frodo"
                        className="object-contain"
                        fill
                    />
                </div>

                {/* Text */}
                <p
                    className="z-[-1] -ml-[min(2rem,5cqw)] pl-[min(3rem,6cqw)] pr-[min(2rem,4cqw)] h-[min(4rem,10cqw)] text-[min(1.5rem,5cqw)]
                        font-semibold rounded-r-full flex items-center"
                    style={{ background: SUBSECTION_BASE_BLUE }}
                >
                    Hi I'm Frodo, the club mascot!
                </p>
            </div>
        </section>
    );
}
