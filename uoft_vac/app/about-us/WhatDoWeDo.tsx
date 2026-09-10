"use client";

import { useIsMobile } from "../layout/useIsMobile";
import SectionTitle from "../common/SectionTitle";
import Events from "./Events";
import OfficeHours from "./OfficeHours";
import UnofficalEvents from "./UnofficialEvents";

export const SUBSECTIONS_CONTAINER_CLASSNAME = "w-full max-w-[40rem] rounded-b-xl shadow-xl relative";
export const SUBSECTIONS_TITLE_HEIGHT = "max(7.5cqw,3rem)";
export const SUBSECTIONS_TEXT_CLASSNAME = "mx-3 text-[max(3.25cqw,1.25rem)] text-center";
export const EVENT_GRAPHICS_ROW_CLASSNAME = "gap-[1cqw] text-[max(3cqw,.8rem)] flex flex-col items-center font-medium text-center";
export const EVENT_GRAPHICS_DIV_CLASSNAME = "w-[20cqw] aspect-square border-3 rounded-lg shadow-lg relative overflow-hidden";


export default function WhatDoWeDo() {
    const isMobile = useIsMobile();
    const isSmaller = useIsMobile(true);

    return (
        <section className="mt-15">

            {/* Section title */}
            <SectionTitle
                src="/title-what-do-we-do.webp"
                height="min(5rem,8cqw)"
            >
                What do we do?
            </SectionTitle>

            {/* Events and office hours subsections */}
            <div className="gap-20">
                <div
                    className={`mt-15 ${!isMobile
                        ? "mx-[1cqw] gap-5 flex justify-center"
                        : `${!isSmaller && "mx-[5cqw]"} gap-[10cqw] flex flex-col items-center`
                    }`}
                >
                    <Events />
                    <OfficeHours />
                </div>

                <div className="mt-17 flex justify-center">
                    <UnofficalEvents />
                </div>
            </div>
        </section>
    );
}


// Subsection ears component
const EAR_CLASSNAME = `z-[-10] aspect-square rounded-full absolute`;

export function SubsectionEars({
    colour,
    size = 15,
} : {
    colour: string;
    size?: number;
}) {
    const earStyle = {
        background: colour,
        width: `${size}cqw`,
        top: `-${size / 2}cqw`,
    };

    return (<>
        <div
            className={EAR_CLASSNAME}
            style={{
                ...earStyle,
                left: 0,
            }}
        />

        <div
            className={EAR_CLASSNAME}
            style={{
                ...earStyle,
                right: 0,
            }}
        />
    </>)
}
