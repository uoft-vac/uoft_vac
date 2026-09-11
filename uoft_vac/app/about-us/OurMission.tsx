"use client";

import Image from "next/image";

import { useIsMobile } from "../layout/useIsMobile";
import SectionTitle from "../common/SectionTitle";


export default function OurMission() {
    const isSmaller = useIsMobile(true);

    return (
        <section className="mt-10 flex flex-col items-center">

            {/* Section title */}
            <SectionTitle
                src="/title-our-mission.webp"
                height="min(5rem,7cqw)"
            >
                Our Mission!
            </SectionTitle>

            {/* Mission container */}
            <div className="mt-5 w-250 aspect-[3/1.5] flex justify-center items-center relative">

                {/* Paint */}
                <Image
                    src="/mission-paint.webp"
                    alt="Our mission"
                    className="z-[-10] object-contain"
                    fill
                />

                {/* Mission statement */}
                <div className="mx-30 max-w-[90cqw]">
                    <p className="text-[min(1.6rem,4.9cqw)] text-center">
                        The University of Toronto Visual Art Club (UTVAC) aims to build an
                        <strong> encouraging, artistic community</strong> and a <strong>positive platform</strong> for students
                        interested in art to develop and express their passion through
                        <strong> art workshops, exhibits, and socials</strong>. We believe that
                        <strong> anyone can enjoy art</strong>, and we hope to inspire students who may be hesitant about art
                        to <strong>discover their creative potentials</strong>.
                    </p>
                </div>

                {/* Frodo left */}
                <Image
                    src="/frodo-abstract1.webp"
                    alt="Frodo Abstract 1"
                    className="absolute left-[-2%] top-1/2"
                    width={140} height={0}
                />

                {/* Frodo right */}
                <Image
                    src="/frodo-abstract2.webp"
                    alt="Frodo Abstract 2"
                    className="translate-x-10 absolute right-0 bottom-1/2"
                    width={160} height={0}
                />
            </div>

            {/* Values container */}
            <div className={`${!isSmaller ?
                "gap-[5cqw] flex justify-center"
                : "flex flex-col items-center"}`}
            >

                {/* Create */}
                <Image
                    src="/values-create.webp"
                    alt="Create"
                    className={isSmaller ? "translate-x-[-20cqw]" : undefined}
                    width={200} height={0}
                />

                {/* Share */}
                <Image
                    src="/values-share.webp"
                    alt="Share"
                    className={isSmaller ? "translate-x-[15cqw] translate-y-[-5cqw]" : undefined}
                    width={200} height={0}
                />

                {/* Connect */}
                <Image
                    src="/values-connect.webp"
                    alt="Connect"
                    className={isSmaller ? "translate-x-[-10cqw]" : undefined}
                    width={200} height={0}
                />
            </div>
        </section>
    );
}
