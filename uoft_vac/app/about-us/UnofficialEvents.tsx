"use client";

import Image from "next/image";

import 
{
SUBSECTION_BASE_PURPLE,
SUBSECTION_EDGES_PURPLE
} from "../common/constants";

import {
    SUBSECTIONS_CONTAINER_CLASSNAME,
    SUBSECTIONS_TITLE_HEIGHT,
    SUBSECTIONS_TEXT_CLASSNAME,
    EVENT_GRAPHICS_ROW_CLASSNAME,
    EVENT_GRAPHICS_DIV_CLASSNAME,
    SubsectionEars,
} from "./WhatDoWeDo";
import SectionTitle from "../common/SectionTitle";
import { divGradientStyleBackground } from "../common/divGradientStyleBackground";


export default function UnofficalEvents() {
    return (
        <section
            className={`pb-3 ${SUBSECTIONS_CONTAINER_CLASSNAME}`}
            style={{
                background: divGradientStyleBackground(
                    SUBSECTION_BASE_PURPLE,
                    SUBSECTION_EDGES_PURPLE,
                ),
                containerType: "inline-size",
            }}
        >

            {/* Ears */}
            <SubsectionEars colour={SUBSECTION_EDGES_PURPLE}/>

            {/* Subsection title */}
            <SectionTitle height={SUBSECTIONS_TITLE_HEIGHT}>Unoffical Events</SectionTitle>

            {/* Overview */}
            <p className={SUBSECTIONS_TEXT_CLASSNAME}>
                We also have seasonal unofficial events beyond the school year. All members are welcome!
            </p>

            <div className="mt-[2cqw]">

                 {/* Row 1 */}
                 <div className="grid grid-cols-3">
                    {[
                        ["Beach Day", "/unevents-beach-day.webp"],
                        ["UWaterloo Collab", "/unevents-uw-collab.webp"],
                        ["Inktober", "/unevents-inktober.webp"]
                    ].map(([label, src], idx) => (
                        <div
                            key={idx}
                            className={EVENT_GRAPHICS_ROW_CLASSNAME}
                        >
                            <div className={EVENT_GRAPHICS_DIV_CLASSNAME}>
                                <Image
                                    src={src}
                                    alt={label}
                                    fill
                                />
                            </div>
                            {label}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
