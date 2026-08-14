"use client";

const CATEGORY_CONTAINER_CLASSNAME_COMMON = "mt-20";

// Exec category specs:
const EXEC_CATEGORIES_SPECS: Record<string, {
    members: string[];
    members_mobile?: string[]; // If none, mobile will use the same order.
    is_first_right?: boolean; // Default: false
    titleSrc?: string;
    titleHeight?: string;
    containerClassname?: string;
} >= {

    "Admin": {
        members: ["Allison", "Sy", "Sunny", "Max", "Osose"],
        members_mobile: ["Allison", "Sy", "Sunny", "Max", "Osose"],
        titleSrc: "admin",
        containerClassname: "mt-5",
        titleHeight: `min(6rem,15cqw)`,
    },

    "Events": {
        members: ["Thomas", "Valentine", "Vivian", "Elisha", "Izzy"],
        titleSrc: "events",
        containerClassname: CATEGORY_CONTAINER_CLASSNAME_COMMON,
        titleHeight: `min(7rem,15cqw)`,
        is_first_right: true,
    },

    "Graphics": {
        members: ["Christina", "Lauren", "Ruby", "Arianne", "Sophie"],
        titleSrc: "graphics",
        containerClassname: CATEGORY_CONTAINER_CLASSNAME_COMMON,
        titleHeight: `min(7rem,17cqw)`,
    },

    "Marketing": {
        members: ["Alisha", "Nabneel", "Emilio", "Emily", "Keziah"],
        titleSrc: "marketing",
        containerClassname: CATEGORY_CONTAINER_CLASSNAME_COMMON,
        titleHeight: `min(7rem,15cqw)`,
        is_first_right: true,
    },

    "Webmaster": {
        members: ["Utami", "Esosa"],
        titleSrc: "webmaster",
        containerClassname: CATEGORY_CONTAINER_CLASSNAME_COMMON,
        titleHeight: `min(6rem,12.5cqw)`,
        is_first_right: true,
    },

    "Office Manager": {
        members: ["Lydia", "Alex"],
        titleSrc: "office-manager",
        containerClassname: CATEGORY_CONTAINER_CLASSNAME_COMMON,
        titleHeight: `min(7rem,11cqw)`,
        is_first_right: true,
    },
};


import { useIsMobile } from "../layout/useIsMobile";
import ExecEntryGrid from "./ExecEntryGrid";
import ExecEntryList from "./ExecEntryList";
import SectionTitle from "../common/SectionTitle";

export const NAME_OUTLINE_TEXT_SHADOW =
    `-1px -1px 0 #000,
    1px -1px 0 #000,
    -1px  1px 0 #000,
    1px  1px 0 #000`;


export default function OurTeamPageClient() {
    const isMobile = useIsMobile();
    const isSmaller = useIsMobile(true);

    return (
        <main className="mb-15">
            {Object.entries(EXEC_CATEGORIES_SPECS).map( ([
                category, {
                    members,
                    members_mobile,
                    is_first_right,
                    titleSrc,
                    containerClassname,
                    titleHeight,
                }, ]) => {

                    const cols = Math.min(members.length, 4);
                    const mobileMembers = members_mobile ?? members;

                    return (
                        <section className={containerClassname}>
                        
                            {/* Category title */}
                            <SectionTitle
                                src={titleSrc ? `/title-execs-${titleSrc}.png` : undefined}
                                height={titleHeight}
                            >
                                {category}
                            </SectionTitle>
                
                            {/* Entries */}

                            {/* DESKTOP VIEW */}
                            {!isMobile ? (
                                <div className={`mt-5 mx-3 gap-10 grid ${{
                                    1: "grid-cols-1",
                                    2: "grid-cols-2",
                                    3: "grid-cols-3",
                                    4: "grid-cols-4 max-[1600px]:grid-cols-2",
                                }[cols]}`}>
                                    {members.map((name) => (
                                        <ExecEntryGrid
                                            key={name}
                                            entryKey={name}
                                        />
                                    ))}
                                </div>
                            
                            // MOBILE VIEW
                            ) : (
                                <ol className="mt-10 gap-10 grid">
                                    {mobileMembers.map((name, index) => (

                                        // Use list format normally.
                                        !isSmaller ? (
                                            <ExecEntryList
                                                key={name}
                                                entryKey={name}
                                                isLeft={is_first_right ? ((index % 2 === 1)) : (index % 2 === 0)}
                                            />
                                        
                                        // Revert to grid format for small window width.
                                        ) : (
                                            <ExecEntryGrid
                                                key={name}
                                                entryKey={name}
                                            />
                                        )
                                    ))}
                                </ol>
                            )}
                        </section>
                    )
                }
            )}
        </main>
    );
}
