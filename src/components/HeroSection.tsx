"use client";

import Image from "next/image";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen w-full overflow-hidden bg-[#0a1836]">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0a1836] via-[#0a2a6c] to-[#1e5c8a]" />
        <div
          className={`absolute inset-0 w-full h-full ${styles.gridBackground}`}
        />

        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full bg-[#1e5c8a] blur-[100px] opacity-60" />
      </div>

      <div className="relative flex items-center justify-center mb-6">
        <div className="absolute w-[260px] h-[260px] rounded-full bg-[#2563eb] blur-[60px] opacity-60 z-0" />
        <Image
          src="/logolight.png"
          alt="E-Cell Logo"
          width={200}
          height={200}
          className="relative z-10 w-[200px] h-[110px] object-contain"
          priority
        />
      </div>

      <h1 className="text-white text-[3.5rem] md:text-[5rem] font-extrabold tracking-wide text-center leading-none mb-2 drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]">
        KIIT E-CELL
      </h1>

      <h2 className="text-white text-xl md:text-2xl font-semibold text-center mb-3 tracking-wide">
        Imagine - Innovate - Implement
      </h2>

      <div className="flex flex-row gap-8 text-white/80 text-base md:text-lg font-medium mb-10">
        <span>For Entrepreneurs</span>
        <span>By Entrepreneurs</span>
      </div>

      <div className="flex flex-row gap-6">
        <button className="bg-white text-[#0e1c3f] font-bold px-10 py-3 rounded-full shadow-lg border-2 border-white/80 transition hover:bg-gray-100 hover:border-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
          SIGN IN
        </button>
        <button className="bg-white text-[#0e1c3f] font-bold px-10 py-3 rounded-full shadow-lg border-2 border-white/80 transition hover:bg-gray-100 hover:border-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
          SIGN UP
        </button>
      </div>
    </section>
  );
}
