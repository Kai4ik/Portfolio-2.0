// fonts
import { kanitMB, latoReg } from "@/assets/fonts";

// Next.js specific
import Image from "next/image";
import { Metadata } from "next";

// components
import ToolkitSection from "@/components/homePage/toolkitSection";
import CodingChroniclesSection from "@/components/homePage/codingChroniclesSection";
import PageScroller from "@/components/layout/pageScroller";


export const metadata: Metadata = {
  title: 'Kairat Orozobekov - Software Developer / Data Engineer based in Toronto',
  description: "Welcome to Kairat Orozobekov's portfolio website, the place where I proudly display my recent work experience and projects. Let's take a journey through my professional adventures!",
  openGraph: {
    title: 'Kairat Orozobekov - Software Developer / Data Engineer based in Toronto',
    description: "Welcome to Kairat Orozobekov's portfolio website, the place where I proudly display my recent work experience and projects. Let's take a journey through my professional adventures!",
    url: 'https://kairatorozobekov.dev',
    siteName: 'Kairat Orozobekov Portfolio',
    type: 'website',
    images: [
      {
        url: 'https://res.cloudinary.com/dmcvpmmuh/image/upload/f_auto,q_auto,w_600,h_600/v1/OK%20Portfolio%20Content/bnehthyjmavmc9sdppgb',
        width: 600,
        height: 600,
        alt: 'Kairat Orozobekov Photo'
      },
      {
        url: 'https://res.cloudinary.com/dmcvpmmuh/image/upload/f_auto,q_auto,w_1000,h_1000/v1/OK%20Portfolio%20Content/bnehthyjmavmc9sdppgb',
        width: 1000,
        height: 1000,
        alt: 'Kairat Orozobekov Photo'
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@site",
    title: 'Kairat Orozobekov - Software Developer / Data Engineer based in Toronto',
    images: ['https://res.cloudinary.com/dmcvpmmuh/image/upload/f_auto,q_auto,w_1000,h_1000/v1/OK%20Portfolio%20Content/bnehthyjmavmc9sdppgb'],
    description: "Welcome to Kairat Orozobekov's portfolio website, the place where I proudly display my recent work experience and projects. Let's take a journey through my professional adventures!",
  },
}


export default function Home() {
  return (
    <main className="w-screen  relative z-30 pt-16">
      <div className=" flex flex-col gap-y-8 lg:gap-y-16 px-8 lg:px-[8vw] pt-12 pb-[180px] lg:pb-[200px] w-full overflow-x-hidden text-creamy">
        <div className="flex flex-col gap-y-8 items-center justify-between lg:flex-row lg:gap-x-24">
          <div className="relative w-full h-[500px] md:w-[400px] md:h-[600px] lg:w-[500px] 3xl:h-[900px] 3xl:w-[750px]">
            <Image
              src="https://res.cloudinary.com/dmcvpmmuh/image/upload/f_auto,q_auto/v1/OK%20Portfolio%20Content/knxkomuibktmvpbc03ik"
              alt="Kairat on Toronto FC game"
              fill
              quality={100}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 35vw"
              className="object-cover fixed bottom-0 left-0"
            />
          </div>
          <div className="flex flex-col gap-y-4 lg:w-[50%]">
            <h3
              className={`${kanitMB.className} text-3xl text-american-yellow lg:text-5xl`}
            >
              A little bit about myself
            </h3>
            <p className={`${latoReg.className} text-lg lg:text-2xl`}>
              Based in the heart of Toronto, I&apos;m a full-stack developer and data engineer. Now, you might be wondering,
              how did I end up here?
              <br />
              Well, let&apos;s rewind the clock a bit, back to 2019 when I ventured into the world of college
              with almost zero background in computer science. I had my doubts, and I secretly wondered if I&apos;d drop out after
              the first semester.
              <br /><br />
              Fast forward four years, and there I was, on a Thursday evening, tuning in to the Next.js conference, testing out the
              latest Astro.js, diving into Rust, and hitting up IT meetups and conferences. It&apos;s safe to say things worked out quite nicely!
              <br /><br />
              See, when I first dipped my toes into the IT world, I had this idea that it was all about math, analytics, and logic.
              Don&apos;t get me wrong; I&apos;m not terrible at that stuff. It&apos;s just that I&apos;m also a creative soul,
              and I had this nagging worry that I&apos;d burn out eventually.
              <br /><br />
              But over the years, I&apos;ve discovered that coding is more than just crunching numbers.
              It&apos;s a canvas for creativity. It&apos;s like having the best of both worlds: the
              freedom to express myself and the thrill of tackling brain-teasing problems.
              What could be better, right?
            </p>
          </div>
        </div>

        <CodingChroniclesSection />
        <ToolkitSection />
      </div>

      <div className="fixed flex flex-col justify-center gap-y-4 h-[150px]  px-8 lg:px-[8vw]  w-full bottom-0 text-creamy bg-dark">
        <div>
          <h1 className={`${kanitMB.className} text-4xl `}>
            Kairat Orozobekov
          </h1>
          <h2 className={`${latoReg.className} text-lg`}>
            Software Developer / Data Engineer
          </h2>
        </div>

        <PageScroller />
      </div>
    </main>
  );
}
