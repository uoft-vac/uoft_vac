"use client";

const TESTING_IMAGE_CAROUSEL = false; // TOGGLE
const TEST_IMAGES = ["bg-[rgb(255,255,0)]", "bg-[rgb(255,0,0)]", "bg-[rgb(0,0,255)]"];
const TEST_CAPTION = "clean my bellay ".repeat(100);


import {
    useState,
    useEffect,
} from "react";
import {
    motion,
} from "framer-motion";

import {
    INSTAGRAM_LINK,
    COMMON_EASE_OUT,
} from "../common/constants";
import { useIsMobile } from "../layout/useIsMobile";
import SectionTitle from "../common/SectionTitle";
import TextLink from "../common/TextLink";
import { useExpandableText } from "../common/useExpandableText";
import ExpandableImageCarousel from "../common/ExpandableImageCarousel";

const CAPTION_COLLAPSED_HEIGHT = 400;


export default function FeaturedPost() {
    const isMobile = useIsMobile();

    const [images, setImages] = useState<string[] | null>(null);
    const [isReel, setIsReel] = useState(false);
    const [captionText, setCaptionText] = useState<string>("Loading Instagram post… 🧐");
    const [timestamp, setTimestamp] = useState<string | null>(null);
    const [captionExpanded, setCaptionExpanded] = useState(false);

    useEffect(() => {

        // If testing image carousel, use test objects.
        if (TESTING_IMAGE_CAROUSEL) {
            setImages(TEST_IMAGES);
            setCaptionText(TEST_CAPTION);
            setTimestamp(null);
            return;
        }

        // Otherwise, fetch data.
        fetch("/api/featured-post")
            .then(res => res.json())
            .then(data => {
                setImages(data.images);
                setIsReel(data.isReel);
                setCaptionText(data.caption);
                setTimestamp(data.timestamp);
            })
            .catch(console.error);
    }, []);

    // ExpandableText hook
    const { ref, fullHeight, needsExpand } =
        useExpandableText<HTMLDivElement>(
            captionExpanded,
            CAPTION_COLLAPSED_HEIGHT,
            [captionText, CAPTION_COLLAPSED_HEIGHT]
        );

    // Timestamp logic
    let timestampText = "🧐";

    if (timestamp) {
        const diff = Date.now() - new Date(timestamp).getTime();
        const seconds = Math.floor(diff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        if (days > 0)
            timestampText = `${days} day${days === 1 ? "" : "s"} ago`;
        else if (hours > 0)
            timestampText = `${hours} hour${hours === 1 ? "" : "s"} ago`;
        else if (minutes > 0)
            timestampText = `${minutes} minute${minutes === 1 ? "" : "s"} ago`;
        else
            timestampText = "Just now";
    }

    const TEXT_MARGIN_X = !isMobile ? "" : "mx-[5cqw]";

    const [hoverCarousel, setHoverCarousel] = useState(false);

    return (
        <section
            className="mt-10 flex flex-col items-center"
            style={{ containerType: "inline-size" }}
        >

            {/* Section title */}
            <SectionTitle
                src="/title-featured-post.webp"
                height="min(10rem,20cqw)"
            >
                Featured Post!
            </SectionTitle>

            {/* Images & caption halves container */}
            <div className={`mt-10 grid ${!isMobile
                ? "mx-[5cqw] gap-20 grid-cols-[auto_1fr]"
                : "gap-10"}`}
            >

                {/* Images container */}
                <div className="relative flex justify-center">

                    {/* Expandable image carousel */}
                    {images && images.length > 0 && (
                        <div
                            className="flex-col items-center justify-center"
                            onMouseEnter={() => setHoverCarousel(true)}
                            onMouseLeave={() => setHoverCarousel(false)}
                        >
                            <ExpandableImageCarousel
                                images={images}
                                alt="Featured Post"
                                normalSize="w-[min(25rem,100cqw)]"
                                isTest={TESTING_IMAGE_CAROUSEL}
                            />

                            {/* Preload images. */}
                            <div className="hidden" aria-hidden="true">
                                {images.map((src) => (
                                    <img key={src} src={src}/>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Is Reel */}
                    {isReel && (
                        <motion.div
                            initial={false}
                            className="z-[-10] text-[min(1.1rem,3cqw)] translate-y-[min(2rem,7cqw)] bottom-0 text-center absolute"
                            animate={!isMobile ? {
                                y: !hoverCarousel ? "-150%" : "0%",
                                opacity: 1,
                            } : {
                                y: "0%",
                                opacity: 1,
                            }}
                            transition={{ ease: COMMON_EASE_OUT, duration: .4 }}
                        >
                            This post is a reel. Watch it on Instagram!
                        </motion.div>
                    )}
                </div>

                {/* Caption half container */}
                <div>

                    {/* Caption */}
                    <p className={`text-[min(1.3rem,4cqw)] ${isMobile && "mt-5"} ${TEXT_MARGIN_X} text-left`}>
                        <motion.div
                            ref={ref}
                            className="overflow-hidden whitespace-pre-line"
                            transition={{ ease: COMMON_EASE_OUT, duration: .5 }}
                            animate={{ maxHeight: captionExpanded
                                ? fullHeight
                                : CAPTION_COLLAPSED_HEIGHT }}
                        >
                            {captionText}
                        </motion.div>

                        {/* Expand/collapse prompt */}
                        {needsExpand && (
                            <button
                                onClick={() => setCaptionExpanded(prev => !prev)}
                                className="mt-3 text-blue-600 underline hover:opacity-80"
                            >
                                {captionExpanded ? "Show less" : "... more"}
                            </button>
                        )}
                    </p>

                    {/* Timestamp */}
                    <p className={`mt-3 ${TEXT_MARGIN_X} text-[min(1.1rem,3cqw)] text-gray-500`}>
                        {timestampText}
                    </p>
                </div>
            </div>

            {/* Wanna see more? */}
            <div
                className={`${!isMobile ? "mt-15" : "mt-10"} mx-10 text-[min(1.5rem,4cqw)]`}
            >
                <p>
                    Wanna see more? Visit our{" "}
                    <TextLink
                        text="Instagram"
                        href={INSTAGRAM_LINK}
                        style={{ color: "blue" }}
                        hoverStyle={{ color: "blue" }}
                    />
                    {" "}page!
                </p>
            </div>
        </section>
    );
}
