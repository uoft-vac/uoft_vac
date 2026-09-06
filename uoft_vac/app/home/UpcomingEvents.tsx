"use client";

const LAST_UPDATED = "March 25, 2026";


import Image from "next/image";
import {
    useState,
} from "react";
import {
    motion,
} from "framer-motion";

import {
    COMMON_EASE_OUT,
} from "../common/constants";
import { useIsMobile } from "../layout/useIsMobile";
import SectionTitle from "../common/SectionTitle";
import ExpandableImageCarousel from "../common/ExpandableImageCarousel";


export default function UpcomingEvents() {
    const isMobile = useIsMobile();

    const [hoverFrodoo, setHoverFrodoo] = useState(false);
    const [hoverGraphic, setHoverGraphic] = useState(false);

    return (
        <section className="mt-15 mb-20 flex flex-col items-center">

            {/* Section title */}
            <SectionTitle
                src="/title-upcoming-events.webp"
                height="min(5rem,7cqw)"
            >
                Upcoming Events!
            </SectionTitle>

            {/* Row */}
            <div className={`mt-10 ${!isMobile && "w-full grid grid-cols-[1fr_auto_1fr]"} items-center`}>

                {/* Frodo left */}
                {!isMobile &&
                    <div className="flex justify-center">
                        <Image
                            src="/frodo-smiley.webp"
                            alt="Frodo smiley"
                            className="object-contain"
                            width={150} height={0}
                        />
                    </div>
                }

                {/* Graphic container */}
                <div
                    className="relative flex flex-col items-center"
                    onMouseEnter={() => setHoverGraphic(true)}
                    onMouseLeave={() => setHoverGraphic(false)}
                >

                    {/* Graphic */}
                    <ExpandableImageCarousel
                        images={["/event-schedule.webp"]}
                        alt="Event Schedule"
                        normalSize="w-[min(40rem,100cqw)]"
                    />

                    {/* Last updated */}
                    <motion.div
                        initial={false}
                        className="z-[-10] text-[min(1.3rem,4cqw)] translate-y-[min(2rem,7cqw)] bottom-0 absolute"
                        animate={!isMobile ? {
                            y: !hoverGraphic ? "-150%" : "0%",
                            opacity: 1,
                        } : {
                            y: "0%",
                            opacity: 1,
                        }}
                        transition={{ ease: COMMON_EASE_OUT, duration: .4 }}
                    >
                        Last updated: {LAST_UPDATED}
                    </motion.div>
                </div>

                {/* Frodo right */}
                {!isMobile &&
                    <div className="flex justify-center">
                        <Image
                            src={!hoverFrodoo ? "/frodoo.webp" : "/cursed-dave.webp"}
                            alt="Frodave"
                            className="object-contain cursor-pointer"
                            width={150} height={0}
                            onMouseEnter={() => setHoverFrodoo(true)}
                            onMouseLeave={() => setHoverFrodoo(false)}
                        />
                    </div>
                }
            </div>
        </section>
    );
}
