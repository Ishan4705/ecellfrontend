"use client";
import Navbar from "./Navbar";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function NotFound() {
  const controls = useAnimation();
  const [ellipse, setEllipse] = useState("/Ellipse 25.png");

  useEffect(() => {
    controls.start({
      y: 90,
      scale: 0.3,
      opacity: 0,
      transition: { duration: 1.2, ease: "easeInOut" },
    });

    // Change image as the ball drops
    const t1 = setTimeout(() => setEllipse("/Ellipse 28.png"), 400);
    const t2 = setTimeout(() => setEllipse("/Ellipse 26.png"), 800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [controls]);

  return (
    <div className="relative min-h-screen w-full bg-[#0a0826] overflow-hidden">
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-20">
        <Navbar />
      </div>
      {/* Padding after navbar */}
      <div className="h-32 w-full" />
      {/* Main content */}
      <div className="flex flex-col items-center justify-center min-h-[80vh] w-full relative z-10">
        <div className="flex items-center justify-center relative mb-2">
          <span className="text-white text-[11rem] md:text-[16rem] font-extrabold select-none">4</span>
          {/* Ball in the center with smooth drop animation */}
          <span className="relative flex flex-col items-center w-[11rem] md:w-[16rem] h-[11rem] md:h-[16rem]">
            <motion.span
              initial={{ y: -220, scale: 1, opacity: 1 }}
              animate={controls}
              className="absolute z-10"
              style={{ width: "100%", height: "100%" }}
            >
              <Image
                src={ellipse}
                alt="ball"
                width={256}
                height={256}
                className="w-full h-full object-contain"
                priority
              />
            </motion.span>
            {/* Ellipse shadow */}
            <span className="absolute left-1/2 top-[70%] -translate-x-1/2 -z-10">
              <svg width="340" height="60" viewBox="0 0 340 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="170" cy="30" rx="170" ry="30" fill="#002046" fillOpacity="0.9"/>
              </svg>
            </span>
          </span>
          <span className="text-white text-[11rem] md:text-[16rem] font-extrabold select-none">4</span>
        </div>
        <h2 className="text-white text-2xl md:text-3xl font-bold mb-2 text-center">Ooops!!!...Page not Found</h2>
        <p className="text-white/90 text-base md:text-lg text-center max-w-xl mb-8">
          The page you're looking for can't be found.<br />
          Double-check the URL and try again. Or click the button below.
        </p>
        <Link
          href="/"
          className="bg-[#1a2e5c] text-white font-semibold px-8 py-3 rounded-full shadow transition hover:bg-[#243e7a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1a2e5c] text-base"
        >
          Back To Home
        </Link>
      </div>
    </div>
  );
}
