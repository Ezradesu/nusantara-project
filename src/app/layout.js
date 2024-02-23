"use client"

import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import SmoothScroll from "@/components/SmoothScroll"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { useEffect } from "react";


gsap.registerPlugin(ScrollTrigger);

const playfair = Playfair_Display({ subsets: ["latin"] });



// export const metadata = {
//   title: "Nusantara",
//   description: "Website kebudayaan Indonesia",
// };


export default function RootLayout({ children }) {
  useEffect(() =>{
    ScrollTrigger.create({
      animation: gsap.from(".logo",{
        y:"50vh",
        scale: 6,
        yPercent: -50,
      }),
      scrub: true,
      trigger:".content",
      start: "top bottom",
      endTrigger: ".content",
      end: "top center",
      markers: true,
    })
    
    .from
  })
  return (
    <html lang="en">
      <body className={playfair.className}>
        <SmoothScroll>
        <div className="nav fixed w-full h-24 flex items-center justify-between px-0 py-4 z-50">
          <div className="items-left ml-10">
            <a className="no-underline font-bold  px-5 py-2 text-base border border-black rounded-full transition ease-out hover:bg-slate-100 gap-5" href="#">kuliner</a>
            <a className="no-underline font-bold  px-5 py-2 text-base border border-black rounded-full transition ease-out hover:bg-slate-100" href="">etnis</a>
          </div>
          <div className="items-right mr-10">
            <a className="no-underline font-bold  px-5 py-2 text-base border border-black rounded-full transition ease-out hover:bg-slate-100" href="#">peta</a>
            <a className="no-underline font-bold  px-5 py-2 text-base border border-black rounded-full transition ease-out hover:bg-slate-100" href="#">agama</a>
          </div>
        </div>
        <div className="logo-container fixed top-0 left-1/2 -translate-x-1/2 p-6 z-50">
          <Image
          src="/nusantara.svg"
          width={200}
          height={200}
          className="logo"
          />
        </div>
        <div className="container w-full h-screen"></div>
        <div className="content">
          <Image
          src="https://www.humaniora.id/wp-content/uploads/2023/10/tari-bali.jpg"
          width={1000}
          height={1000}
          className="w-4/6 rounded-lg items-center m-auto"
          />
        </div>
        {children}
        </SmoothScroll>
        </body>
    </html>
  );
}
