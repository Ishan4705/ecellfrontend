import React from 'react';
import Navbar from './Navbar';
import ContactForm from './ContactForm';
import './styles.css';
import Footer from './Footer';
import Image from 'next/image';
import LogoLight from "@/assets/logolight.svg"
// import Navbar from './Navbar';
export default function ContactPage() {
  return (
    <div className="page-bg bg-gradient-1 py-10 w-full relative overflow-hidden">
      {/* Noise overlay */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-30 mix-blend-overlay">
        <Image src="/grid.png" alt="Noise" fill style={{ objectFit: 'cover' }} />
      </div>
      <div className="absolute top-0 left-0 w-full z-20">
              <Navbar />
            </div>
      <div className="max-w-7xl w-full px-24 mx-auto mt-32 relative z-10">
        <div className="main-section flex items-center justify-between gap-16">
          <div className="info-section w-1/2 flex flex-col gap-4 justify-center">
            <div className="flex bg-gray-200 rounded-full shadow-lg overflow-hidden w-fit mb-8 relative">
              <button className="z-10 px-10 py-4 font-extrabold text-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black shadow-[6px_6px_24px_0px_rgba(0,0,0,0.25)] rounded-full border-none focus:outline-none transition-all">
                Contact Us
              </button>
              <button className="px-10 py-4 font-extrabold text-xl rounded-r-full bg-transparent text-black shadow-none border-none focus:outline-none transition-all -ml-6">
                Join Us
              </button>
            </div>
            <h1 className="text-white text-4xl md:text-5xl font-extrabold leading-tight mb-2 drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]">
              Want to Know More?<br /> Reach Out to us!
            </h1>
            <p className="text-white text-lg md:text-xl mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">We will get back to you asap!</p>
            <div className="flex justify-start mt-2">
              <Image src={LogoLight} alt="KIIT E-Cell Logo" width={260} height={120} className="" />
            </div>
          </div>
          <div className="w-1/2 flex justify-center">
            <ContactForm />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-transparent to-gray-900 z-10" />
      <div className='bg-black'>
        <div className='w-full h-24' />
        <Footer /></div>
      
    </div>
  );
}