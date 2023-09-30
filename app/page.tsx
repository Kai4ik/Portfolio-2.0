import { kanitMB, latoReg } from "@/assets/fonts";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen bg-dark pt-8">
      <div className="flex flex-col gap-y-8 px-8 pb-[20vh] w-full overflow-x-hidden text-creamy">
        <div className="w-full h-[50vh] overflow-hidden relative">
          <Image
            src="/images/HeroImg.jpg"
            alt="Kairat on Toronto FC game"
            fill
            className="object-cover fixed top-0"
          />
        </div>
        <p className={`${latoReg.className} text-lg `}>
          I&apos;m a full-stack web developer located in Toronto who really
          loves working with all layers of the stack. Whether it&apos;s
          front-end or back-end, the only thing that matters to me is building
          efficient user-friendly web applications that meet all client
          requirements.
        </p>
        <h3 className={`${kanitMB.className} text-3xl`}>My Coding Activity</h3>
        <figure>
          <embed src="https://wakatime.com/share/@Kai4ik/ac58e797-5179-4589-9ac5-65cce20cb91a.svg"></embed>
        </figure>
        <figure>
          <embed src="https://wakatime.com/share/@Kai4ik/3d84a3c9-2361-4b57-abb2-b1ca73155a02.svg"></embed>
        </figure>
      </div>

      <div className="fixed flex flex-col gap-y-4 p-8 w-full bottom-0 text-creamy bg-dark">
        <div>
          <h1 className={`${kanitMB.className} text-4xl`}>Kairat Orozobekov</h1>
          <h2 className={`${latoReg.className} text-lg`}>
            Software Developer / Data Engineer
          </h2>
        </div>

        <div className="w-full h-[2px] bg-creamy"></div>
      </div>
    </main>
  );
}
