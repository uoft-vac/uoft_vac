"use client";

import { execData, ExecDataTypes } from "./execData";
import ExpandableImageCarousel from "../common/ExpandableImageCarousel";
import { NAME_OUTLINE_TEXT_SHADOW } from "./OurTeamPageClient";

export default function ExecEntryList({
    entryKey,
    isLeft = true
} : {
    entryKey: string;
    isLeft?: boolean;
}) {
    const data: ExecDataTypes = execData[entryKey];
    const {
        name = entryKey,
        position,
        colour = "#000000",
        study,
        medium,
        fact,
        artwork,
    } = data;

    return (
        <li className={`mx-10 gap-5 flex ${isLeft ? "" : "flex-row-reverse"}`}>

            {/* Artwork */}
            <ExpandableImageCarousel
                images={[`/exec-artworks/${artwork}$`]}
                alt={`${entryKey}'s Artwork`}
                normalSize="w-75"
            />

            {/* Info container */}
            <div className={`flex flex-col ${isLeft ? "text-left" : "text-right"}`}>

                {/* Position */}
                <p className="text-[2rem] font-bold">{position}</p>

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

                {/* Small infos */}
                <p className={`mt-2.5 text-[1.25rem]`}>
                    {study}
                </p>

                <p className="mt-2.5 text-[1.25rem]">
                    Favourite medium: {medium}
                </p>

                <p className="mt-2.5 text-[1.5rem] font-bold">
                    {fact}
                </p>
            </div>
        </li>
    );
}
