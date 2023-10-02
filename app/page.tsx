// fonts
import { kanitMB, latoReg } from "@/assets/fonts";

// Next.js specific
import Image from "next/image";

// components
import ToolkitSection from "@/components/homePage/toolkitSection";
import CodingChroniclesSection from "@/components/homePage/codingChroniclesSection";
import PageScroller from "@/components/layout/pageScroller";

export default function Home() {
  return (
    <main className="w-screen  relative z-30">
      <div className=" flex flex-col gap-y-8 lg:gap-y-16 px-8 lg:px-[8vw] pt-12 pb-[180px] lg:pb-[200px] w-full overflow-x-hidden text-creamy">
        <div className="flex flex-col gap-y-8 items-center lg:flex-row lg:gap-x-24">
          <div className="w-full h-[50vh] overflow-hidden relative md:w-[50%] lg:h-[80vh] lg:w-[40%] ">
            <Image
              src="/images/HeroImg.jpg"
              alt="Kairat on Toronto FC game"
              fill
              className="object-cover fixed top-0"
            />
          </div>
          <div className="flex flex-col gap-y-4 lg:w-[50%]">
            <h3
              className={`${kanitMB.className} text-3xl text-american-yellow lg:text-5xl`}
            >
              A little bit about myself
            </h3>
            <p className={`${latoReg.className} text-lg lg:text-2xl`}>
              I&apos;m a full-stack web developer located in Toronto who really
              loves working with all layers of the stack. Whether it&apos;s
              front-end or back-end, the only thing that matters to me is
              building efficient user-friendly web applications that meet all
              client requirements.
              <br /> I am passionate about coding which gives me freedom of
              creativity and at the same time requires applying logical thinking
              when solving complex problems. <br /> Let&apos;s make something
              special together!
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
