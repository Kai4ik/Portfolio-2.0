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
    content?: {
        __typename?: "RichText" | undefined;
        raw: any;
    } | null | undefined
}

export default function Accordion({ content }: Props): JSX.Element {
    const [expanded, setExpanded] = useState(false)

    const openAnimation = useSpring({
        opacity: expanded ? "1" : "0",
        maxHeight: expanded ? "1000vh" : "0",
        config: { duration: expanded ? "500" : "1000" }
    });



    return <div className='flex flex-col gap-y-4'>
        <div className={`flex flex-col gap-y-4 rounded-lg p-4 backdrop-blur-[500px] text-creamy text-lg lg:text-xl transition-colors duration-500 ease-out ${latoReg.className} `}>
            <RichText content={content !== null && content !== undefined ? content.raw : ""} renderers={{
                p: ({ children }) => <p>{children}</p>,
                class: ({ children }) => <animated.div style={openAnimation} className={` flex flex-col gap-y-4 transition-all ease-linear overflow-y-hidden`}>{children}</animated.div>
            }} />
        </div>
        <div className='w-full lg:max-w-[40%]' onClick={() => setExpanded((prev) => !prev)}>
            <Button content={`Read ${expanded ? "Less" : "More"} `} />
        </div>
    </div>
}
