"use client";
import Navbar from "./Navbar";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="relative min-h-screen w-full bg-gradient-1 overflow-hidden">
      {/* Noise overlay */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-30 mix-blend-overlay">
        <Image src="/grid.png" alt="Noise" fill style={{ objectFit: 'cover' }} />
      </div>
      <div className="absolute top-0 left-0 w-full z-20">
        <Navbar />
      </div>
      {/* Padding after navbar */}
      <div className="h-32 w-full" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 z-10" />
      
      {/* Main content */}
        
      <div className="flex flex-col items-center justify-center min-h-[80vh] w-full relative z-10">
        <h2 className="text-white text-3xl font-semibold mt-8 mb-2 text-center drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]">Ooops!!!...Page not Found</h2>
        <h1 className="text-white text-[10rem] font-bold leading-none tracking-tight text-center mb-4 drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]">404</h1>
        <p className="text-white/90 text-lg text-center max-w-xl mb-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
          The page you're looking for can't be found.<br />
          Double-check the URL and try again. Or click the button below.
        </p>
        <div className="flex gap-8">
          <Link href="/" className="bg-white text-[#0e1c3f] font-semibold px-8 py-3 rounded-full shadow transition hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">Go Home</Link>
          <button
            onClick={() => router.back()}
            className="bg-white text-[#0e1c3f] font-semibold px-8 py-3 rounded-full shadow transition hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
