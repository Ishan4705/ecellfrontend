"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="relative w-full flex justify-center pt-8">
      <div className="w-[1050px] h-[57px] relative">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1050px] h-[50px] rounded-[100px] navbar-gradient-bg shadow-[0px_0px_5px_0.25px_rgba(255,255,255,0.5)] backdrop-blur-[15px]">
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[942px] h-[57px]">
          {/* Right nav links */}
          <div className="absolute right-0 top-4 flex gap-[70px] items-center justify-center">
            <Link href="/blogs" className="text-[#E2E2E2] text-base tracking-[0.06em] font-light font-['Poppins']">Blogs</Link>
            <Link href="/events" className="text-[#E2E2E2] text-base tracking-[0.06em] font-light font-['Poppins']">Events</Link>
            <Link href="/join" className="text-[#E2E2E2] text-base tracking-[0.06em] font-light font-['Poppins']">Join Us</Link>
          </div>
          {/* Left nav links */}
          <div className="absolute left-0 top-4 flex gap-[54px] items-center justify-center">
            <Link href="/" className="text-[#E2E2E2] text-base tracking-[0.06em] font-light font-['Poppins']">Home</Link>
            <Link href="/about" className="text-[#E2E2E2] text-base tracking-[0.06em] font-light font-['Poppins']">About Us</Link>
            <Link href="/gallery" className="text-[#E2E2E2] text-base tracking-[0.06em] font-light font-['Poppins']">Gallery</Link>
          </div>
          {/* Center logo - PNG */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[3px] z-10">
            <Image src="/logolight.png" alt="Logo" width={139} height={73} className="w-[138.88px] h-[73px]" style={{ aspectRatio: '138.88/73', objectFit: 'contain' }} priority />
          </div>
        </div>
      </div>
    </nav>
  );
}
