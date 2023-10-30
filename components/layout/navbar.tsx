"use client";

// Next.js specific
import Image from "next/image";

// React specific
import { useEffect, useState, useCallback } from "react";

// body scroll lock package
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

// components 
import Menu from "./menu"

// Redux
import { setLoco } from "@/store/locoSlice";
import { RootState, AppDispatch } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";


export default function Navbar(): JSX.Element {
    const useAppDispatch: () => AppDispatch = useDispatch;
    const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

    const dispatch = useAppDispatch();
    const locoScrollInstance = useAppSelector(
        (state) => state.locoScroll.locoScroll
    );


    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [openMenu, setOpenMenu] = useState(false)

    const handleScroll = useCallback((): void => {
        const scrollTop = Math.max(
            window.scrollY,
            document.documentElement.scrollTop,
            document.body.scrollTop
        );

        if (scrollTop > prevScrollPos) {
            setVisible(false);
        } else {
            setVisible(true);
        }

        if (scrollTop === 0) {
            setVisible(true);
        }

        setPrevScrollPos(scrollTop);
    }, [prevScrollPos]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    const menuToggle = () => {
        setOpenMenu((prev) => !prev);
        const menu = document.getElementById("menuContainer");
        const hambBtnTopLine = document.getElementById("hambBtnTopLine");
        const hambBtnBottomLine = document.getElementById("hambBtnBottomLine");
        if (hambBtnTopLine && hambBtnBottomLine) {
            hambBtnTopLine.classList.toggle("!mb-0");
            hambBtnTopLine.classList.toggle("Rotate-45");
            hambBtnBottomLine.classList.toggle("!-mt-[1px]");
            hambBtnBottomLine.classList.toggle("-rotate-45");
        }

        if (menu) {
            if (openMenu) {
                void (async () => {
                    const LocomotiveScroll = (await import("locomotive-scroll")).default;
                    let locoScroll = new LocomotiveScroll();
                    dispatch(setLoco(locoScroll));
                })();
                enableBodyScroll(menu)
            }
            else {
                if (locoScrollInstance !== null) {
                    locoScrollInstance.destroy()
                }
                disableBodyScroll(menu);
            }
        }
    }

    return <>
        <nav className={`fixed top-0 ${visible ? "flex" : "hidden"
            } items-center justify-between py-4 px-8 bg-dark shadow-sm shadow-gray-700	 lg:px-[8vw] w-full overflow-x-hidden z-[80]`}>
            <div className="relative w-[70px] h-[70px] -left-5">
                <Image
                    src={`https://res.cloudinary.com/dmcvpmmuh/image/upload/f_auto,q_auto/v1/OK%20Portfolio%20Content/m5wptab4ry7tkgyjalgh`}
                    alt="Kairat Orozobekov Logo"
                    fill
                    quality={100}
                    className="object-cover"
                />
            </div>
            <div
                id="hambBtn"
                className="flex flex-col justify-center h-full cursor-pointer"
                onClick={menuToggle}
            >
                <div
                    id="hambBtnTopLine"
                    className="bg-creamy w-9 transition-all duration-500 ease-linear mb-2 h-[2px]"
                >
                </div>
                <div
                    id="hambBtnBottomLine"
                    className="bg-creamy transition-all duration-500 ease-linear w-9 mt-2 h-[2px]"
                >
                </div>
            </div>
        </nav>

        <Menu openMenu={openMenu} menuToggle={menuToggle} />
    </>
}
