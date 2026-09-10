"use client";

import Image from "next/image";

import {
    SUBSECTION_BASE_BLUE,
    SUBSECTION_EDGES_BLUE,
} from "../common/constants";
import {
    SUBSECTIONS_CONTAINER_CLASSNAME,
    SUBSECTIONS_TITLE_HEIGHT,
    SUBSECTIONS_TEXT_CLASSNAME,
    SubsectionEars,
} from "./WhatDoWeDo";
import SectionTitle from "../common/SectionTitle";
import { divGradientStyleBackground } from "../common/divGradientStyleBackground";

const BUBBLE_GRAPHICS_DIV_CLASSNAME = "w-[25cqw] aspect-square border-3 rounded-full";


export default function OfficeHours() {
    return (
        <section
            className={SUBSECTIONS_CONTAINER_CLASSNAME}
            style={{
                background: divGradientStyleBackground(
                    SUBSECTION_BASE_BLUE,
                    SUBSECTION_EDGES_BLUE,
                ),
                containerType: "inline-size",
            }}
        >

            {/* Ears */}
            <SubsectionEars colour={SUBSECTION_EDGES_BLUE}/>

            {/* Subsection title */}
            <SectionTitle height={SUBSECTIONS_TITLE_HEIGHT}>Office Hours</SectionTitle>

            {/* Overview */}
            <p className={SUBSECTIONS_TEXT_CLASSNAME}>
                We host office hours every <strong>Monday and Wednesday from 3–6pm</strong>.
                <br />
                Be sure to check our <strong>Discord announcements</strong> for additional office hours!
            </p>

            <div className="mt-2.5 grid grid-cols-[auto_1fr]">

                {/* Video container */}
                <div className="ml-[2cqw] mb-[2cqw] text-[max(3.25cqw,1rem)] flex flex-col items-center text-center">

                    Can't find our office?<br />
                    Watch this video!

                    {/* Video */}
                    <video
                        src="/office-video.mp4"
                        className="mt-[1cqw] h-[69cqw] border-3 rounded-lg shadow-lg"
                        controls
                    />
                </div>

                {/* Bubble graphics container */}
                <div className="flex flex-col items-center">

                    {/* Make Art */}
                    <div className={`translate-x-[10cqw]
                        ${BUBBLE_GRAPHICS_DIV_CLASSNAME}`}
                    >
                        <Image
                            src="/office-hours-make-art.webp"
                            alt="Make Art"
                            fill
                        />
                    </div>

                    {/* Study */}
                    <div className={`translate-x-[-10cqw] translate-y-[-2cqw]
                        ${BUBBLE_GRAPHICS_DIV_CLASSNAME}`}
                    >
                        <Image
                            src="/office-hours-study.webp"
                            alt="Study"
                            fill
                        />
                    </div>

                    {/* Socialise */}
                    <div className={`translate-x-[5cqw]
                        ${BUBBLE_GRAPHICS_DIV_CLASSNAME}`}
                    >
                        <Image
                            src="/office-hours-socialise.webp"
                            alt="Socialise"
                            fill
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
