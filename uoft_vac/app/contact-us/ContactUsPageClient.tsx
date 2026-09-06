"use client";

import Image from "next/image";

import {
    EMAIL_LINK,
    DISCORD_LINK,
    INSTAGRAM_LINK,
    TEXT_LINK_PASSIVE_ORANGE,
    TEXT_LINK_HOVER_ORANGE,
} from "../common/constants";
import {
    SP_TITLE_HEIGHT,
    SP_HALVES_V_CLASSNAME,
    SP_TEXT_CONTAINER_CLASSNAME,
} from "../common/smallPagesCommon";
import { useIsMobile } from "../layout/useIsMobile";
import SectionTitle from "../common/SectionTitle";
import TextLink from "../common/TextLink";


export default function ContactUsPageClient() {
    const isMobile = useIsMobile()

    return (
        <main
            className="mt-5 mb-10"
            style={{ containerType: "inline-size" }}
        >

            {/* Page title */}
            <SectionTitle
                src="/title-contact-us.webp"
                height={SP_TITLE_HEIGHT}
            >
                Contact Us!
            </SectionTitle>

            {/* DESKTOP VIEW */}
            {!isMobile ? (

                // Two halves horizontal
                <div className="grid grid-cols-[auto_1fr]">

                    {/* Left: graphic */}
                    <Image
                        src="/contact-us-graphic.webp"
                        alt="Contact Us!"
                        className="mt-5 w-[45cqw]"
                        width={1000} height={0}
                    />

                    {/* Right: contact info */}
                    <ContactInfo/>
                </div>
            
            // MOBILE VIEW
            ) : (

                // Two halves vertical
                <div className={SP_HALVES_V_CLASSNAME}>

                    {/* Top: contact info */}
                    <ContactInfo/>

                    {/* Buttom: graphic */}
                    <Image
                        src="/contact-us-graphic.png"
                        alt="Contact Us!"
                        className="mt-10"
                        width={600} height={0}
                    />
                </div>
            )}
        </main>
    );
}


function ContactInfo() {
    return (
        <ol className={`mt-[3cqw] gap-[5cqw] ${SP_TEXT_CONTAINER_CLASSNAME}`}>

            {/* First line */}
            <p className="text-[min(2.5rem,6cqw)] font-semibold">
                You can reach us by:
            </p>

            {/* Bullet 1 */}
            <p style={{ transform: "rotate(-1deg)" }}>
                • Writing us an{" "}
                <TextLink
                    text="email"
                    href={EMAIL_LINK}
                    style={{ color: TEXT_LINK_PASSIVE_ORANGE }}
                    hoverStyle={{ color: TEXT_LINK_HOVER_ORANGE }}
                />
                !
            </p>

            {/* Bullet 2 */}
            <p style={{ transform: "rotate(1deg)" }}>
                • Sending us a message on{" "}
                <TextLink
                    text="Instagram"
                    href={INSTAGRAM_LINK}
                    style={{ color: TEXT_LINK_PASSIVE_ORANGE }}
                    hoverStyle={{ color: TEXT_LINK_HOVER_ORANGE }}
                />
                !
            </p>

            {/* Bullet 3 */}
            <p style={{ transform: "rotate(-1deg)" }}>
                • Ping the <strong>@President</strong> or{" "}
                <strong>@Co-Vice President</strong> role on{" "}
                <TextLink
                    text="Discord"
                    href={DISCORD_LINK}
                    style={{ color: TEXT_LINK_PASSIVE_ORANGE }}
                    hoverStyle={{ color: TEXT_LINK_HOVER_ORANGE }}
                />
                !
            </p>
        </ol>
    )
}
