"use client";

import Image from "next/image";
import {
    useState,
    useRef,
    useEffect,
} from "react";

import {
    SIDE_DECOR_WIDTH,
} from "../common/constants";

const SCROLL_VEL = .1;

type Stripe = { y: number };


export default function SideDecor({ offset }: { offset: number }) {

    const [leftStripes, setLeftStripes] = useState<Stripe[]>([{ y: 0 }]);
    const [rightStripes, setRightStripes] = useState<Stripe[]>([{ y: 0 }]);
    const [barHeight, setBarHeight] = useState<number | null>(null);

    const animationRef = useRef<number>(0);

    // Load image to compute scroll repetition height.
    useEffect(() => {
        const img = new window.Image();
        img.src = "/side-decor-l.webp";
        img.onload = () => {
            const scaledHeight =
                img.naturalHeight * (SIDE_DECOR_WIDTH / img.naturalWidth);
            setBarHeight(scaledHeight);
        };
    }, []);

    // Scroll animation
    useEffect(() => {
        if (!barHeight) return;

        const animate = () => {
            setLeftStripes((prev) => {
                const updated = prev.map((s) => ({ ...s, y: s.y + SCROLL_VEL }));
                const last = updated[updated.length - 1];
                if (last.y >= 0) updated.push({ y: last.y - barHeight });
                return updated.filter((s) => s.y < barHeight);
            });

            setRightStripes((prev) => {
                const updated = prev.map((s) => ({ ...s, y: s.y + SCROLL_VEL }));
                const last = updated[updated.length - 1];
                if (last.y >= 0) updated.push({ y: last.y - barHeight });
                return updated.filter((s) => s.y < barHeight);
            });

            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationRef.current!);

    }, [barHeight]);

    const translateX = offset * SIDE_DECOR_WIDTH;

    return (<>

        {/* Left stripe */}
        <div
            className="fixed top-0"
            style={{
                transform: `translateX(-${translateX}px)`,
                width: SIDE_DECOR_WIDTH,
                height: "100%",
            }}
        >
            {leftStripes.map((stripe) => (
                <Image
                    key={stripe.y}
                    src="/side-decor-l.webp"
                    alt="Side decor"
                    style={{
                        position: "absolute",
                        top: stripe.y,
                    }}
                    width={SIDE_DECOR_WIDTH} height={0}
                />
            ))}
        </div>

        {/* Right stripe */}
        <div
            className="fixed right-0 top-0"
            style={{
                transform: `translateX(${translateX}px)`,
                width: SIDE_DECOR_WIDTH,
                height: "100%",
            }}
        >
            {rightStripes.map((stripe) => (
                <Image
                    key={stripe.y}
                    src="/side-decor-r.webp"
                    alt="Side decor"
                    style={{
                        position: "absolute",
                        top: stripe.y,
                    }}
                    width={SIDE_DECOR_WIDTH} height={0}
                />
            ))}
        </div>
    </>);
}
