"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="relative w-full flex justify-center pt-6 pb-2 bg-[#0a0718]">
      <div className="w-full max-w-[1500px] flex items-center justify-between px-4">
        {/* Left Icon */}
        <button
          type="button"
          className="w-12 h-12 rounded-full flex items-center justify-center mr-2 shadow focus:outline-none focus:ring-2 focus:ring-[#2E9AD2] transition"
          aria-label="Language"
        >
          <Image src="/globe.png" alt="Globe" width={48} height={48} />
        </button>
        {/* Center Navbar */}
        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-[1350px] h-[56px] flex items-center px-6 rounded-full bg-[#0d0a1a] border border-[#28243a] shadow-[0_0_8px_0_rgba(255,255,255,0.08)] relative">
            {/* Left Links */}
            <div className="flex gap-12 items-center h-full">
              <Link href="/" className="text-[#E2E2E2] text-base tracking-[0.06em] font-light font-['Poppins'] hover:text-[#2E9AD2] transition">Home</Link>
              <Link href="/about" className="text-[#E2E2E2] text-base tracking-[0.06em] font-light font-['Poppins'] hover:text-[#2E9AD2] transition">About Us</Link>
              <Link href="/gallery" className="text-[#E2E2E2] text-base tracking-[0.06em] font-light font-['Poppins'] hover:text-[#2E9AD2] transition">Gallery</Link>
            </div>
            {/* Center Logo */}
            <Link
              href="/"
              className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10"
              aria-label="Home"
            >
              <Image src="/logolight.svg" alt="Logo" width={90} height={47} className="object-contain" priority />
            </Link>
            {/* Right Links */}
            <div className="flex gap-12 items-center h-full ml-auto">
              <Link href="/blogs" className="text-[#E2E2E2] text-base tracking-[0.06em] font-light font-['Poppins'] hover:text-[#2E9AD2] transition">Blogs</Link>
              <Link href="/events" className="text-[#E2E2E2] text-base tracking-[0.06em] font-light font-['Poppins'] hover:text-[#2E9AD2] transition">Events</Link>
              <Link href="/contact" className="text-[#E2E2E2] text-base tracking-[0.06em] font-light font-['Poppins'] hover:text-[#2E9AD2] transition">Contact Us</Link>
            </div>
          </div>
        </div>

        {/* Right Icon */}
        <Link
          href="/signin"
          className="w-12 h-12 rounded-full flex items-center justify-center ml-2 shadow focus:outline-none focus:ring-2 focus:ring-[#2E9AD2] transition hover:bg-white/10"
          aria-label="Sign In"
        >
          <Image src="/user.png" alt="User" width={48} height={48} />
        </Link>
      </div>
    </nav>
  );
}
