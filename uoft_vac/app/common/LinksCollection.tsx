"use client";

import Image from "next/image";
import {
    useState,
} from "react";

import {
    EMAIL_LINK,
    DISCORD_LINK,
    INSTAGRAM_LINK,
    LINKTREE_LINK,
} from "./constants";
import TextLink from "./TextLink";
import DynamicButton from "./DynamicButton";


export default function LinksCollection({
    size = 30,
    justify = "justify-center",
} : {
    size?: number;
    justify?: string;
}) {
    const [emailHovered, setEmailHovered] = useState(false);
    const [emailImgError, setEmailImgError] = useState(false);

    return (
        <div className="grid">

            {/* Email */}

            {/* Use image if loaded successfully. */}
            {!emailImgError ? (
                <a
                href={EMAIL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setEmailHovered(true)}
                onMouseLeave={() => setEmailHovered(false)}
            >
                <Image
                    src={emailHovered ? "/email-hovered.webp" : "/email.webp"}
                    alt="utvisualartclub@gmail.com"
                    width={size * 7.5} height={0}
                    onError={() => setEmailImgError(true)}
                />
            </a>
            
            // If load failed, use TextLink.
            ) : (
                <TextLink
                    text="utvisualartclub@gmail.com"
                    href={EMAIL_LINK}
                    style={{ fontSize: size * .5 }}
                />
            )}

            {/* Icons row */}
            <ol
                className={`flex ${justify}`}
                style={{
                    marginTop: size * .5,
                    gap: size * .5,
                    marginLeft: size * .3,
                    marginRight: size *.3,
                }}
            >

                {/* Discord */}
                <a
                    href={DISCORD_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Discord"
                >
                    <DynamicButton>
                        <Image
                            src="/discord-logo.png"
                            alt="Discord"
                            className="object-contain"
                            width={size} height={0}
                        />
                    </DynamicButton>
                </a>

                {/* Instagram */}
                <a
                    href={INSTAGRAM_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                >
                    <DynamicButton>
                        <Image
                            src="/instagram-logo.webp"
                            alt="Instagram"
                            className="object-contain"
                            width={size} height={0}
                        />
                    </DynamicButton>
                </a>

                {/* Linktree */}
                <a
                    href={LINKTREE_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Linktree"
                >
                    <DynamicButton>
                        <Image
                            src="/linktree-logo.png"
                            alt="Linktree"
                            className="object-contain"
                            width={size} height={0}
                        />
                    </DynamicButton>
                </a>
            </ol>
        </div>
    )
}
