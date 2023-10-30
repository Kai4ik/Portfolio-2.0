import "./globals.css";
import type { Metadata } from "next";

// components
import LocoScrollIntegration from "@/components/layout/locomotiveScroll";
import GsapCircleAnimation from "@/components/layout/animateCircles";
import Navbar from "@/components/layout/navbar";

// Apollo
import Providers from "@/store/storeClientProvider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-screen bg-dark overflow-x-hidden">
        <Providers>

          <LocoScrollIntegration />
          <GsapCircleAnimation />

          <div className="relative bg-dark overflow-hidden">
            <Navbar />
            <div className="w-full h-full top-0 left-0 absolute backdrop-blur-[100px] z-20"></div>

            <div className="circle w-[50%] h-[700px] rounded-full bg-terracotta absolute -top-24 -left-24"></div>
            <div className="circle w-[50%] h-[700px] rounded-full bg-american-yellow bg-opacity-70 absolute bottom-0 -right-16"></div>

            <div className="circle w-[50%] h-[700px] rounded-full bg-american-yellow bg-opacity-70 absolute top-[50%] -left-8"></div>

            <div className="circle w-[400px] h-[400px] rounded-full bg-american-yellow bg-opacity-70 absolute top-[20%] -left-8"></div>

            <div className="circle w-[450px] h-[450px] rounded-full bg-terracotta absolute top-[30%] -right-8"></div>

            <div className="circle w-[500px] h-[500px] rounded-full bg-terracotta absolute top-[50%] -right-8"></div>
            {children}
          </div>

          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
          />

        </Providers>
      </body>
    </html>
  );
}
