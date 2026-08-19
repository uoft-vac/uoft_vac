"use client";

import { execData, ExecDataTypes } from "./execData";
import ExpandableImageCarousel from "../common/ExpandableImageCarousel";
import { NAME_OUTLINE_TEXT_SHADOW } from "./OurTeamPageClient";

export default function ExecEntryGrid({
    entryKey,
} : {
    entryKey: string;
}) {
    const data: ExecDataTypes = execData[entryKey];
    const {
        name = entryKey,
        position,
        colour = "#000000",
        study,
        medium,
        fact,
    } = data;

    return (
        <li className="flex flex-col items-center text-center">

            {/* Name */}
            <h2
                className="text-[3rem] font-bold"
                style={{
                    color: colour,
                    textShadow: NAME_OUTLINE_TEXT_SHADOW,
                }}
            >
                {name}
            </h2>

            {/* Artwork */}
            <div className="mt-5">
                <ExpandableImageCarousel
                    images={["jpg", "png", "jpeg"].map(
                        ext => `/exec-artworks/${entryKey}.${ext}`)}
                    alt={`${entryKey}'s Artwork`}
                    normalSize="w-75"
                />
            </div>

            {/* Info container */}
            <div>
                {position && (
                    <p className="mt-2.5 text-[1.5rem] font-bold">
                        {position}
                    </p>
                )}

                <p className={`${position ? "" : "mt-5"} text-[1.25rem]`}>
                    {study}
                </p>

                <p className="mt-1 text-[1.25rem]">
                    Favourite medium:<br />
                    {medium}
                </p>

                <p className="mt-2.5 text-[1.5rem] font-bold">
                    {fact}
                </p>
            </div>
        </li>
    );
}
