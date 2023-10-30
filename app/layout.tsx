import "./globals.css";

// components
import LocoScrollIntegration from "@/components/layout/locomotiveScroll";
import GsapCircleAnimation from "@/components/layout/animateCircles";
import Navbar from "@/components/layout/navbar";

// Apollo
import Providers from "@/store/storeClientProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width" />
        <meta name="author" content="Kairat Orozobekov" />
        <link rel="sitemap" href="/sitemap-index.xml" />
        <link rel="canonical" href="https://kairatorozobekov.dev" />
      </head>
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
