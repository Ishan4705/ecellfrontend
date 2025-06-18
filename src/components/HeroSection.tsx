"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center">
      {/* Glowing logo */}
      <div className="relative flex items-center justify-center mb-6">
        <div className="absolute w-[320px] h-[320px] rounded-full bg-blue-700 blur-3xl opacity-60 z-0" />
        <Image
          src="/logolight.png"
          alt="E-Cell Logo"
          width={220}
          height={220}
          className="relative z-10 w-[220px] h-[116px] object-contain"
          priority
        />
      </div>
      {/* Main Title */}
      <h1 className="text-white text-[4rem] md:text-[5rem] font-extrabold tracking-tight text-center leading-none mb-2">
        KIIT E-CELL
      </h1>
      {/* Subtitle */}
      <h2 className="text-white text-2xl md:text-3xl font-semibold text-center mb-4">
        Imagine - Innovate - Implement
      </h2>
      {/* Small subtitles */}
      <div className="flex flex-row gap-8 text-white/80 text-base md:text-lg font-normal mb-8">
        <span>For Entrepreneurs</span>
        <span>By Entrepreneurs</span>
      </div>
      {/* Buttons */}
      <div className="flex flex-row gap-8">
        <button className="bg-white text-[#0e1c3f] font-bold px-8 py-3 rounded-full shadow transition hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
          SIGN IN
        </button>
        <button className="bg-white text-[#0e1c3f] font-bold px-8 py-3 rounded-full shadow transition hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
          SIGN UP
        </button>
      </div>
    </section>
  );
}
