"use client";

// Next.js specific
import Link from 'next/link';

// React specific
import { useCallback } from "react";

// fonts
import { kanitMB } from "@/assets/fonts";

// components 
import Button from '@/components/reusable/button';

// animations
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Container, Engine } from "tsparticles-engine";

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faInstagram,
    faLinkedinIn,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FaDev } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";


interface Props {
    openMenu: boolean;
}

export default function Menu({ openMenu }: Props): JSX.Element {
    const particlesInit = useCallback(async (engine: Engine) => {
        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => { }, []);

    return (
        <div id="menuContainer" className={`fixed ${openMenu ? "top-0" : "-top-full"} transition-all duration-500 ease-linear min-h-screen w-screen px-8 lg:px-[8vw] gap-y-8 bg-gradient-to-tr bg-dark z-[60] 
        flex flex-col lg:flex-row items-center justify-center lg:justify-between`}>
            <div className={`absolute top-0 w-full min-h-screen -mx-8 lg:-mx-[8vw]`}>
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={{
                        style: {
                            position: "absolute",
                        },
                        fpsLimit: 120,
                        fullScreen: true,
                        interactivity: {
                            events: {
                                onHover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                                resize: true,
                            },
                            modes: {
                                bubble: {
                                    distance: 250,
                                    duration: 2,
                                    size: 0,
                                    opacity: 0,
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#ffffff",
                            },
                            move: {
                                direction: "top",
                                enable: true,
                                outModes: {
                                    default: "out",
                                },
                                random: true,
                                speed: 3,
                                straight: true,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 800,
                                },
                                value: 80,
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                value: { min: 1, max: 5 },
                            },
                        },
                        detectRetina: true,
                    }}
                />
            </div>
            <ul className={`${kanitMB.className} w-full text-4xl z-20 uppercase flex flex-col gap-y-8 lg:gap-y-4 basis-full lg:basis-1/2`}>
                <Link href='/' >
                    <li className="text-creamy cursor-pointer hover:text-terracotta transition-colors duration-300 ease-in-out">home</li>
                </Link>
                <Link href='/career-journey' >
                    <li className="text-creamy cursor-pointer hover:text-terracotta transition-colors duration-300 ease-in-out">career journey</li>
                </Link>
                <li className="text-creamy transition-colors duration-300 ease-in-out">More is coming</li>
            </ul>
            <div className="z-20 basis-full w-full lg:basis-1/2 flex flex-col gap-y-4 justify-start ">
                <Link href="/files/Kairat Orozobekov Resume.pdf" download target="_blank" className="w-full md:w-[40%]">
                    <Button content="Resume" />
                </Link>
                <div className="flex flex-col gap-y-4 w-full text-creamy ">
                    <p className={`text-4xl ${kanitMB.className}`}>Socials</p>
                    <div className='flex items-center gap-x-4 text-2xl'>
                        <Link href="https://github.com/Kai4ik" target='_blank' className='cursor-pointer hover:text-[#2B3137]'>
                            <FontAwesomeIcon icon={faGithub} />
                        </Link>
                        <Link href="https://www.instagram.com/egoist.ko/" target='_blank' className='cursor-pointer hover:text-[#D62976]'>
                            <FontAwesomeIcon icon={faInstagram} />
                        </Link>
                        <Link href="https://www.linkedin.com/in/kai-orozobekov/" target='_blank' className='cursor-pointer hover:text-[#0077B5]'>
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </Link>
                        <Link href="https://medium.com/@kai4ik" target='_blank' className='cursor-pointer hover:text-[#FFC017]'>
                            <BsMedium />
                        </Link>
                        <Link href="https://dev.to/kairatorozobekov" target='_blank' className='cursor-pointer hover:text-[#353A40]'>
                            <FaDev />
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    )
}
