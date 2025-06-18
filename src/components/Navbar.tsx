"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="relative w-full flex justify-center pt-8 overflow-visible">
      <div className="w-[1200px] h-[73px] relative overflow-visible flex items-start">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[50px] rounded-[100px] navbar-gradient-bg shadow-[0px_0px_5px_0.25px_rgba(255,255,255,0.5)] backdrop-blur-[15px] overflow-visible" />
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[1080px] h-[73px] flex items-center overflow-visible">
 
          <div className="flex gap-[64px] items-center justify-center h-full">
            <Link href="/" className="text-[#E2E2E2] text-base tracking-[0.06em] font-light font-['Poppins']">Home</Link>
            <Link href="/about" className="text-[#E2E2E2] text-base tracking-[0.06em] font-light font-['Poppins']">About Us</Link>
            <Link href="/gallery" className="text-[#E2E2E2] text-base tracking-[0.06em] font-light font-['Poppins']">Gallery</Link>
          </div>

          <div className="flex-1 flex justify-center items-start relative h-full">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 z-10 pointer-events-none overflow-visible">
              <Image src="/logolight.png" alt="Logo" width={139} height={73} className="w-[138.88px] h-[73px]" style={{ aspectRatio: '138.88/73', objectFit: 'contain', display: 'block' }} priority />
            </div>
          </div>

          <div className="flex gap-[80px] items-center justify-center h-full">
            <Link href="/blogs" className="text-[#E2E2E2] text-base tracking-[0.06em] font-light font-['Poppins']">Blogs</Link>
            <Link href="/events" className="text-[#E2E2E2] text-base tracking-[0.06em] font-light font-['Poppins']">Events</Link>
            <Link href="/contact" className="text-[#E2E2E2] text-base tracking-[0.06em] font-light font-['Poppins']">Join Us</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
