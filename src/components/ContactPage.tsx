"use client";
import React from 'react';
import Navbar from './Navbar';
import ContactForm from './ContactForm';
import './styles.css';
import Footer from './Footer';
import Image from 'next/image';
import LogoLight from "@/assets/logolight.svg";
import { FaLinkedin, FaInstagram, FaYoutube, FaFacebookF } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-between relative overflow-hidden bg-slate-950">
      {/* Removed grid overlay */}
      <div className="absolute top-0 left-0 w-full z-20">
        <Navbar />
      </div>
      {/* Main Heading */}
      <div className="flex flex-col items-center mt-24 mb-6 z-10 relative">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-2">
          Let's Get <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">in touch</span>
        </h1>
        <p className="text-white/80 text-lg md:text-xl text-center">Any question or remarks? Just write us a message!</p>
      </div>
      {/* Card Section */}
      <div className="flex-1 flex flex-col items-center justify-center px-2 md:px-8 z-10 relative">
        <div className="w-full max-w-5xl rounded-[2rem] border border-[#4DE1FF] bg-slate-950 flex flex-col md:flex-row shadow-2xl overflow-hidden contact-card-outline">
          {/* Left Section */}
          <div className="flex-1 flex flex-col items-center justify-center py-12 px-6 md:px-10">
            <Image src={LogoLight} alt="KIIT E-Cell Logo" width={140} height={140} className="mb-4" />
            <h2 className="text-white text-3xl md:text-4xl font-extrabold text-center mb-4">Want to Know More?<br />Reach Out to us!</h2>
            <div className="flex gap-4 mb-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener" className="text-white text-2xl hover:text-cyan-400" title="LinkedIn"><FaLinkedin /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener" className="text-white text-2xl hover:text-cyan-400" title="Instagram"><FaInstagram /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener" className="text-white text-2xl hover:text-cyan-400" title="YouTube"><FaYoutube /></a>
              <a href="https://facebook.com" target="_blank" rel="noopener" className="text-white text-2xl hover:text-cyan-400" title="Facebook"><FaFacebookF /></a>
            </div>
            <p className="text-white/80 text-base md:text-lg text-center">We Will get back to you asap!</p>
          </div>
          {/* Right Section (Form Card) */}
          <div className="flex-1 flex flex-col items-center justify-center py-12 px-6 md:px-10 relative">
            {/* <button className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-extrabold text-2xl px-10 py-3 rounded-2xl shadow-lg border-none focus:outline-none">
              Contact Us
            </button> */}
            <div className="mt-10 w-full">
              <ContactForm />
            </div>
          </div>
        </div>
        {/* Join Us Button */}
        <button className="mt-8 bg-white text-black font-extrabold text-xl px-12 py-3 rounded-full shadow-md border-none focus:outline-none hover:bg-gray-200 transition-all" onClick={() => window.location.href = '/signup'}>
          Join Us
        </button>
      </div>
      <div className="bg-black w-full pt-8 pb-2 z-10 relative mt-8">
        <Footer />
      </div>
    </div>
  );
}