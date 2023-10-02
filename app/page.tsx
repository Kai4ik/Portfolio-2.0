// fonts
import { kanitMB, latoReg } from "@/assets/fonts";

// Next.js specific
import Image from "next/image";

// components
import ToolkitSection from "@/components/homePage/toolkitSection";

export default function Home() {
  return (
    <main className="w-screen  relative z-30">
      <div className=" flex flex-col gap-y-8 lg:gap-y-16 px-8 lg:px-[8vw] pt-12 pb-[20vh] w-full overflow-x-hidden text-creamy">
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

        <section className={`flex flex-col gap-12 ${latoReg.className}`}>
          <div className="flex flex-col gap-y-4">
            <h3
              className={`${kanitMB.className} text-3xl text-american-yellow lg:text-5xl`}
            >
              Coding Chronicles
            </h3>
            <p
              className={`${latoReg.className} text-lg lg:text-2xl lg:max-w-[70%]`}
            >
              Welcome to my Coding Chronicles section, where I spill the beans
              on my week-long coding adventures! <br />
              Powered by the magical Wakatime tool that I&apos;ve being using
              since 2020, I wanna show you what I&apos;ve been up to in the past
              7 days of my life.
            </p>
          </div>
          <div className="flex flex-col gap-y-8 lg:flex-row lg:flex-wrap lg:justify-between  lg:gap-y-16">
            <div className="flex flex-col md:gap-y-8 lg:basis-[45%]">
              <div className=" relative w-full h-[35vh] md:h-[50vh] ">
                <Image
                  src="https://wakatime.com/share/@Kai4ik/5d13fc09-4404-40a1-aacf-c835bc2464d2.png"
                  alt="Chart that shows coding activity of Kairat Orozobekov over last 7 days (in hours)"
                  fill
                  className="object-contain absolute"
                />
              </div>
              <p className={`${latoReg.className} text-lg relative`}>
                Behold my weekly code-o-meter, tracking the hours I&apos;ve
                spent &apos;talking&apos; to my computer - my way of proving
                that I&apos;m in a committed relationship with my code!
              </p>
            </div>
            <div className="flex flex-col md:gap-y-8 lg:basis-[45%]">
              <div className=" relative w-full h-[35vh] md:h-[50vh] ">
                <span className="w-full h-[0.5px] bg-creamy lg:hidden"> </span>
                <Image
                  src="https://wakatime.com/share/@Kai4ik/27248216-815e-4844-b3c7-001bf1631e59.png"
                  alt="Chart that shows languages used by Kairat Orozobekov over last 7 days"
                  fill
                  className="object-contain absolute"
                />
              </div>

              <p className={`${latoReg.className} text-lg `}>
                Explore my &apos;Language Mashup&apos; chart, a wild mixtape of
                coding languages, libraries, and frameworks I&apos;ve been
                jamming with this week – it&apos;s a musical symphony of tech
                notes!
              </p>
            </div>
            <div className="flex flex-col md:gap-y-8 lg:basis-[45%]">
              <div className=" relative w-full h-[35vh] md:h-[50vh] ">
                <span className="w-full h-[0.5px] bg-creamy lg:hidden"> </span>
                <Image
                  src="https://wakatime.com/share/@Kai4ik/243c96f3-d6e1-4848-b1b9-7ece21e85720.png"
                  alt="Chart that shows languages used by kairat Orozobekov over last 7 days"
                  fill
                  className="object-contain absolute"
                />
              </div>

              <p className={`${latoReg.className} text-lg `}>
                Dive into my &apos;IDEology&apos; chart, and you&apos;ll see my
                coding life isn&apos;t just about languages; it&apos;s a
                melodrama starring an ensemble cast of coding editors - my
                trusty companions in this epic tech journey!
              </p>
            </div>
          </div>
          <span className="w-full h-[0.5px] bg-creamy"> </span>
        </section>

        <ToolkitSection />
      </div>

      <div className="fixed flex flex-col justify-center gap-y-4 h-[15vh] px-8 lg:px-[8vw]  w-full bottom-0 text-creamy bg-dark">
        <div>
          <h1 className={`${kanitMB.className} text-4xl `}>
            Kairat Orozobekov
          </h1>
          <h2 className={`${latoReg.className} text-lg`}>
            Software Developer / Data Engineer
          </h2>
        </div>

        <div className="w-full h-[2px] bg-creamy"></div>
      </div>
    </main>
  );
}
