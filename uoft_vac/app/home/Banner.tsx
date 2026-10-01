"use client";

import Image from "next/image";

import { SIDE_DECOR_WIDTH } from "../common/constants";
import { useWindowOffset } from "../layout/WindowOffsetContext";

export default function Banner() {
    const { offset } = useWindowOffset();

    return (
        <section className="z-10 w-screen flex justify-center relative">
            <Image
                src="/banner.webp"
                alt="Banner"
                className="w-full object-contain shadow-lg"
                style={{ transform: `translateX(-${SIDE_DECOR_WIDTH * (1 - offset)}px)` }}
                width={1000} height={0}
            />
        </section>
    );
}
