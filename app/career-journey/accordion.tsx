"use client";

// HyGraph
import { RichText } from '@graphcms/rich-text-react-renderer';

// React specific
import { useState } from "react";

// fonts
import { latoReg } from "@/assets/fonts";

// animations
import { animated, useSpring } from '@react-spring/web'

// components 
import Button from '@/components/reusable/button';


interface Props {
    companyName: string;
    content?: {
        __typename?: "RichText" | undefined;
        raw: any;
    } | null | undefined
}

export default function Accordion({ content, companyName }: Props): JSX.Element {
    const [expanded, setExpanded] = useState(false)

    const expandAnimation = useSpring({
        from: {
            opacity: 0,
            maxHeight: 0
        },
        to: {
            opacity: expanded ? 1 : 0,
            maxHeight: expanded ? 5000 : 0
        },
        config: { duration: expanded ? 500 : 1000 }
    });


    return <div className='flex flex-col gap-y-4'>
        <div className={`flex flex-col gap-y-4 rounded-lg p-4 backdrop-blur-[500px] text-creamy text-lg lg:text-xl transition-colors duration-500 ease-out ${latoReg.className} `}>
            <RichText content={content !== null && content !== undefined ? content.raw : ""} renderers={{
                p: ({ children }) => <p>{children}</p>,
                class: ({ children }) => <animated.div style={expandAnimation} className={` flex flex-col gap-y-4 transition-all ease-linear overflow-y-hidden`}>{children}</animated.div>
            }} />
        </div>
        <div id={companyName} className='readMoreBtn w-full lg:max-w-[40%]' onClick={() => setExpanded((prev) => !prev)}>
            <Button content={`Read ${expanded ? "Less" : "More"} `} />
        </div>
    </div>
}
