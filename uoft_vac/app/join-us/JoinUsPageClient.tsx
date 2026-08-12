"use client";

import Image from "next/image";

import {
    MEMBERSHIP_FORM_LINK,
    DISCORD_LINK,
    INSTAGRAM_LINK,
    TEXT_LINK_PASSIVE_PURPLE,
    TEXT_LINK_HOVER_PURPLE,
} from "../common/constants";
import {
    SP_TITLE_HEIGHT,
    SP_HALVES_V_CLASSNAME,
    SP_TEXT_CONTAINER_CLASSNAME,
} from "../common/smallPagesCommon";
import { useIsMobile } from "../layout/useIsMobile";
import SectionTitle from "../common/SectionTitle";
import TextLink from "../common/TextLink";


export default function JoinUsPageClient() {
	const isMobile = useIsMobile()

	return (
		<main
			className="mt-5 mb-10"
			style={{ containerType: "inline-size" }}
		>
			
			{/* Page title */}
			<SectionTitle
				src="/title-join-us.png"
				height={SP_TITLE_HEIGHT}
			>
				Join Us Today For Free!
			</SectionTitle>

			{/* DESKTOP VIEW */}
			{!isMobile ? (

				// Two halves horizontal
				<div className="grid grid-cols-[1fr_auto]">

					{/* Left: join instructions */}
					<JoinInstructions/>

					{/* Right: graphic */}
					<Image
						src="/join-us-graphic.png"
						alt="Join Us!"
						className="mt-5 w-[47cqw]"
						width={1000} height={0}
					/>
				</div>

			// MOBILE VIEW
			) : (

				// Two halves vertical
				<div className={SP_HALVES_V_CLASSNAME}>

					{/* Top: join instructions */}
					<JoinInstructions/>

					{/* Bottom: graphic */}
					<Image
						src="/join-us-graphic.png"
						alt="Join Us!"
						className="mt-10"
						width={600} height={0}
					/>
				</div>
			)}
		</main>
	);
}


function JoinInstructions() {
	return (
		<ol className={`mt-[5cqw] gap-[8cqw] ${SP_TEXT_CONTAINER_CLASSNAME} font-semibold`}>

			{/* Step 1 */}
			<p style={{ transform: "rotate(-1deg)" }}>
				1. Fill out our{" "}
				<TextLink
				text="verification form"
				href={MEMBERSHIP_FORM_LINK}
				style={{ color: TEXT_LINK_PASSIVE_PURPLE }}
				hoverStyle={{ color: TEXT_LINK_HOVER_PURPLE }}
				/>
				!
			</p>

			{/* Step 2 */}
			<p style={{ transform: "rotate(1deg)" }}>
				2. Join our{" "}
				<TextLink
				text="Discord"
				href={DISCORD_LINK}
				style={{ color: TEXT_LINK_PASSIVE_PURPLE }}
				hoverStyle={{ color: TEXT_LINK_HOVER_PURPLE }}
				/>{" "}
				and wait for verification!
			</p>

			{/* Step 3 */}
			<p style={{ transform: "rotate(-1deg)" }}>
				3. Follow us on{" "}
				<TextLink
				text="Instagram"
				href={INSTAGRAM_LINK}
				style={{ color: TEXT_LINK_PASSIVE_PURPLE }}
				hoverStyle={{ color: TEXT_LINK_HOVER_PURPLE }}
				/>{" "}
				for updates!
			</p>
		</ol>
	);
}
