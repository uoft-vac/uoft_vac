"use client";

import Image from "next/image";

import {
    BARS_GRADIENT_STYLE,
} from "../common/constants";
import { useIsMobile } from "./useIsMobile";
import LinksCollection from "../common/LinksCollection";


export default function Footer() {
    const isMobile = useIsMobile();

    return (
        <footer className="z-100 flex flex-col items-center relative">

            {/* Frodo */}
            <Image
                src="/frodo-footer.webp"
                alt="Frodo"
                width={50} height={0}
            />

            {/* Bar */}
            <div
                className="w-full p-5 grid justify-center"
                style={BARS_GRADIENT_STYLE}
            >
                {/* Links collection */}
                <LinksCollection
                size={!isMobile ? 50 : 30}
                />
            </div>
        </footer>
    );
}
