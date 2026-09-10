"use client";

// Pages
const PAGES = [
    { title: "Home", href: "/", img: "/navbar-home.webp" },
    { title: "About Us", href: "/about-us", img: "/navbar-about-us.webp" },
    { title: "Our Team", href: "/our-team", img: "/navbar-our-team.webp" },
    { title: "Join Us", href: "/join-us", img: "/navbar-join-us.webp" },
    { title: "Contact Us", href: "/contact-us", img: "/navbar-contact-us.webp" },
    { title: "FAQ", href: "/faq", img: "/navbar-faq.webp" },
];


import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import {
    BARS_EDGES_GREEN,
    BARS_GRADIENT_STYLE,
} from "../common/constants";
import LinksCollection from "../common/LinksCollection";
import { useIsMobile } from "./useIsMobile";
import { useScrollDirection } from "./useScrollDirection";
import DynamicButton from "../common/DynamicButton";

const NAVBAR_HEIGHT_DESKTOP = "h-30";
const NAVBAR_HEIGHT_MOBILE = "h-10";
const TRANSF_DURATIONS = "duration-400";


export default function Navbar() {

    const isMobile = useIsMobile();
    const { direction } = useScrollDirection();

    const pathname = usePathname();

    const [isMobileExpanded, setIsMobileExpanded] = useState(false);
    const [isBarHovered, setIsBarHovered] = useState(false);

    // Get page buttons mapping
    const pageButtonsMapping = PageButtonsMapping(
        pathname,
        isMobile,
        isMobileExpanded,
        setIsMobileExpanded,
    );

    // Desktop collapse logic
    const isBarCollapsed = !isBarHovered && direction === -1;

    const navbarHeight = !isMobile && !isBarCollapsed
        ? NAVBAR_HEIGHT_DESKTOP
        : NAVBAR_HEIGHT_MOBILE;

    return (
        <div className="z-100 relative">

            {/* Hitbox to collapse expanded mobile navbar (whole screen). */}
            {isMobile && isMobileExpanded && (
                <div
                    className="z-10 inset-0 fixed"
                    onClick={() => setIsMobileExpanded(false)}
                />
            )}

            {/* Navbar spacer */}
            <div
                className={`${navbarHeight} ${TRANSF_DURATIONS}`}
                style={BARS_GRADIENT_STYLE}
            />

            {/* Fixed components container */}
            <header className="z-100 w-full top-0 fixed">

                {/* Bar */}
                <nav
                    className={`${navbarHeight} ${TRANSF_DURATIONS} flex justify-center items-center`}
                    style={BARS_GRADIENT_STYLE}
                    onMouseEnter={() => setIsBarHovered(true)}
                    onMouseLeave={() => setIsBarHovered(false)}
                    onClick={() => setIsMobileExpanded(!isMobileExpanded)}
                >

                    {/* Dropdown icon */}
                        <Image
                            src="/navbar-dropdown.png"
                            alt="Navbar"
                            className={`${isMobile || isBarCollapsed
                                ? "max-h-full opacity-full"
                                : "max-h-0 opacity-0"}
                                ${TRANSF_DURATIONS} overflow-hidden absolute`}
                            width={20} height={0}
                        />

                    {/* Desktop page buttons row */}
                    <div
                        className={`${!isMobile && !isBarCollapsed
                            ? "max-h-full opacity-full"
                            : "max-h-0 opacity-0"}
                            ${TRANSF_DURATIONS} overflow-hidden`}
                    >
                        <ol className="flex">
                            {pageButtonsMapping}
                        </ol>
                    </div>
                </nav>

                {/* Mobile page buttons column */}
                {isMobile && (
                    <ol
                        className={`mt-[5cqh] pl-5 gap-[min(1rem,2cqh)] grid fixed
                        ${!isMobileExpanded && "-translate-x-full"}
                        ${TRANSF_DURATIONS}`}
                    >
                        {pageButtonsMapping}
                    </ol>
                )}

                {/* Links collection */}
                <div
                    className={`mr-1 right-0 ${!isMobile
                        ? "translate-y-[115%] bottom-0"
                        : `z-30 mt-2 ${!isMobileExpanded && "translate-x-60"}`}
                        ${TRANSF_DURATIONS} grid absolute`}
                >
                    <LinksCollection
                        justify="justify-end"
                    />
                </div>
            </header>
        </div>
    );
}


function PageButtonsMapping(
    pathname: string,
    isMobile: boolean,
    isDropdownOpen: boolean,
    setIsDropdownOpen: (value: boolean) => void
) {
    return PAGES.map((link) => {

        const isActive = pathname === link.href;

        return (
            <li key={link.href} className="relative">

                {/* Mobile green shroud */}
                {isMobile && (
                    <div
                        className={`w-40 rounded-4xl blur-2xl inset-0 absolute
                        ${isDropdownOpen ? "opacity-100" : "opacity-0"} ${TRANSF_DURATIONS}`}
                        style={{ background: BARS_EDGES_GREEN }}
                    />
                )}

                {/* Page buttons */}
                <DynamicButton>
                    <Link
                        href={link.href}
                        onClick={() => setIsDropdownOpen(false)}
                    >
                        <Image
                            src={link.img}
                            alt={link.title}
                            className={`h-[min(6rem,11cqh)] w-auto
                            ${isActive && "saturate-150"}`}
                            width={100} height={0}
                        />
                    </Link>
                </DynamicButton>
            </li>
        );
    });
}
