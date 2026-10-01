
import {
    ReactNode,
} from "react";

import {
    MEMBERSHIP_FORM_LINK,
    DISCORD_LINK,
    INSTAGRAM_LINK,
    FAQ_LINK_PASSIVE_BLUE,
    FAQ_LINK_HOVER_BLUE,
} from "../common/constants";
import TextLink from "../common/TextLink";


export const faqs: {
    question: string;
    answer: ReactNode;
}[] = [
    
    { // 1
        question: "How do I join VAC?",
        answer: <>
            Simply follow the instructions{" "}
            <TextLink
                text="here"
                href="/join-us"
                style={{ color: FAQ_LINK_PASSIVE_BLUE}}
                hoverStyle={{ color: FAQ_LINK_HOVER_BLUE}}
                stay
            />
            !
        </>,
    },

    { // 2
        question: "Is this club active?",
        answer: <>
            Yes! VAC is active for both Fall and Winter semesters of the new school year. Please check{" "}
            our announcements on{" "}
            <TextLink
                text="Discord"
                href={DISCORD_LINK}
                style={{ color: FAQ_LINK_PASSIVE_BLUE}}
                hoverStyle={{ color: FAQ_LINK_HOVER_BLUE}}
            />
            {" "}and{" "}
            <TextLink
                text="Instagram"
                href={INSTAGRAM_LINK}
                style={{ color: FAQ_LINK_PASSIVE_BLUE}}
                hoverStyle={{ color: FAQ_LINK_HOVER_BLUE}}
            />
            {" "}for any updates.
        </>,
    },

    { // 3
        question: "Are there any fees to pay as a club member?",
        answer: <>
            Joining VAC is totally free! Most of our events are also free, with the exception of some{" "}
            special events, where snacks and/or more expensive supplies are provided. The fee will be{" "}
            specified when such events are announced.
        </>,
    },

    { // 4
        question: "What is the required skill level to join VAC?",
        answer: <>
            We welcome artists of all skill levels here! Our events are also planned with this in mind : )
        </>,
    },

    { // 5
        question: "Which art media and/or art styles are promoted at VAC?",
        answer: <>
            VAC welcomes all artists, regardless of their preferred art medium and art style. Our{" "}
            events also incorporate and embrace various art media and art styles.
        </>,
    },

    { // 6
        question: "Do I have to bring my own art supplies to VAC events?",
        answer: <>
            We always provide art supplies to our events, but you are free to also bring your own.
        </>,
    },

    { // 7
        question: "Can UTM and UTSC students join VAC?",
        answer: <>
            Yes! You are free to join VAC even if you are not from UTSG. Please note that our weekly{" "}
            events are however usually held at UTSG. If you are from UTSC, you might be interested{" "}
            in checking out UTSC VAC instead.
        </>,
    },

    { // 8
        question: "Can non-UofT students join VAC?",
        answer: <>
            Yes, if you have a friend that is a UofT student and a VAC member that can vouch for you!{" "}
            You will have the option to specify this and your friend's info when filling out our {" "}
            <TextLink
                text="membership form"
                href={MEMBERSHIP_FORM_LINK}
                style={{ color: FAQ_LINK_PASSIVE_BLUE}}
                hoverStyle={{ color: FAQ_LINK_HOVER_BLUE}}
            />
            . Note that your friend must have filled out this form, and each UofT student can vouch{" "}
            for at most 1 non-UofT student. Details can be found within the form.
        </>,
    },
    
    { // 9
        question: "I can’t access the Discord server. Why is this happening?",
        answer: <>
            You need to fill out our{" "}
            <TextLink
                text="membership form"
                href={MEMBERSHIP_FORM_LINK}
                style={{ color: FAQ_LINK_PASSIVE_BLUE}}
                hoverStyle={{ color: FAQ_LINK_HOVER_BLUE}}
            />
            {" "}before being granted access to our Discord server. Since we manually verify our members,{" "}
            please then wait for a few days. In the meantime, you can go through our server rules!
        </>,
    },
];
