"use client";

import Image from "next/image";

import {
    INSTAGRAM_LINK,
    SUBSECTION_BASE_YELLOW,
    SUBSECTION_EDGES_YELLOW,
    PURP_BUTTONS_BASE_PURPLE,
    PURP_BUTTONS_EDGES_PURPLE,
    BG_GREEN,
    FAQ_CENTRE_YELLOW,
} from "../common/constants";
import {
    SUBSECTIONS_CONTAINER_CLASSNAME,
    SUBSECTIONS_TITLE_HEIGHT,
    SUBSECTIONS_TEXT_CLASSNAME,
    EVENT_GRAPHICS_ROW_CLASSNAME,
    EVENT_GRAPHICS_DIV_CLASSNAME,
    SubsectionEars,
} from "./WhatDoWeDo";
import { useIsMobile } from "../layout/useIsMobile";
import SectionTitle from "../common/SectionTitle";
import DynamicButton from "../common/DynamicButton";
import { divGradientStyleBackground } from "../common/divGradientStyleBackground";

const PURP_BUTTON_GRADIENT_STYLE_COMPONENT = divGradientStyleBackground(
    PURP_BUTTONS_BASE_PURPLE,
    PURP_BUTTONS_EDGES_PURPLE,
    25,
);


export default function Events() {
    const isMobile = useIsMobile();

    const PURP_BUTTON_CLASSNAME = `p-[2cqw] text-[max(3cqw,1.1rem)] border-3 block rounded-lg shadow-lg text-white
        ${isMobile && "text-center"}`;

    return (

        // Subsection container: coloured rectangle
        <section
            className={SUBSECTIONS_CONTAINER_CLASSNAME}
            style={{
                background: divGradientStyleBackground(
                    SUBSECTION_BASE_YELLOW,
                    SUBSECTION_EDGES_YELLOW,
                ),
                containerType: "inline-size",
            }}
        >

            {/* Ears */}
            <SubsectionEars colour={SUBSECTION_EDGES_YELLOW}/>
            
            {/* Subsection title */}
            <SectionTitle height={SUBSECTIONS_TITLE_HEIGHT}>Events</SectionTitle>

            {/* Overview */}
            <p className={SUBSECTIONS_TEXT_CLASSNAME}>
                We host a variety of events every <strong>Friday 3–6pm</strong>.
                <br />
                All members can come at any point to relax and hang out.
                <br />
                Any <strong>UofT student</strong> may sign up to become a member for <strong>free!</strong>
                <br />
                Look out for <strong>Instagram posts</strong> and <strong>Discord announcements</strong> to see what events are coming up!
            </p>

            {/* Example events graphics container */}
            <div className="mt-[2cqw]">

                {/* Row 1 */}
                <div className="grid grid-cols-3">
                    {[
                        ["Themed Events", "/events-themed-events.webp"],
                        ["Craft Days", "/events-craft-days.webp"],
                        ["Gallery Visits", "/events-gallery-visits.webp"]
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

                {/* Row 2 */}
                <div className="mt-[2cqw] grid grid-cols-3">
                    {[
                        ["Workshops", "/events-workshops.webp"],
                        ["Virtual Events", "/events-virtual-events.webp"]]
                        .map(([label, src], idx) => (
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

                    {/* And more! */}
                    <div className="flex justify-center items-center">
                        <div className="w-[15cqw] -translate-y-[2cqw] aspect-square relative">
                            <Image
                                src="/and-more.png"
                                alt="AND MORE!"
                                className="object-contain"
                                fill
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Purple buttons */}
            <div className={`m-[2cqw] gap-[2cqw] ${isMobile ? "flex flex-col" : "grid grid-cols-2"}`}>

                {/* Instagram */}
                <DynamicButton>
                    <a
                        href={INSTAGRAM_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={PURP_BUTTON_CLASSNAME}
                        style={{ background: PURP_BUTTON_GRADIENT_STYLE_COMPONENT }}
                        onMouseEnter={(e) =>
                            (e.currentTarget.style.color = FAQ_CENTRE_YELLOW)
                        }
                        onMouseLeave={(e) =>
                            (e.currentTarget.style.color = "")
                        }
                    >
                        Check out our past events on our Instagram page!
                    </a>
                </DynamicButton>

                {/* Join us */}
                <DynamicButton>
                    <a
                        href="/join-us"
                        className={PURP_BUTTON_CLASSNAME}
                        style={{ background: PURP_BUTTON_GRADIENT_STYLE_COMPONENT }}
                        onMouseEnter={(e) =>
                            (e.currentTarget.style.color = BG_GREEN)
                        }
                        onMouseLeave={(e) =>
                            (e.currentTarget.style.color = "")
                        }
                    >
                        Feeling inspired?{" "}
                        {isMobile ? <></> : <br/>}
                        Become a member today!
                    </a>
                </DynamicButton>
            </div>
        </section>
    )
}
