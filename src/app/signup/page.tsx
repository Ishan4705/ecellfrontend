"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import SignUpForm from "@/components/SignUpForm";
import Image from "next/image";

export default function SignUpPage() {
  return (
    <div className="relative min-h-screen w-full bg-gradient-1 overflow-hidden flex flex-col items-center justify-center">
      {/* Noise/grid overlay */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-30 mix-blend-overlay">
        <Image src="/grid.png" alt="Noise" fill style={{ objectFit: 'cover' }} />
      </div>
      <div className="absolute top-0 left-0 w-full z-20">
        <Navbar />
      </div>
      <div className="flex flex-1 items-center justify-center w-full mt-32 z-10">
        <SignUpForm />
      </div>
    </div>
  );
}
