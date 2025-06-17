"use client"

import React from 'react'
import LogoLight from "@/assets/logolight.svg"
import ArrowRight from "@/assets/icons/arrowright.svg"
import LinkedIn from "@/assets/icons/linkedin.svg"
import Instagram from "@/assets/icons/instagram.svg"
import Facebook from "@/assets/icons/facebook.svg"
import Youtube from "@/assets/icons/youtube.svg"
import Landmark from "@/assets/icons/landmark.svg"
import Mail from "@/assets/icons/mail.svg"

import Image from 'next/image'

const Footer = () => {

    return (
        <footer className="px-10 flex flex-col justify-center items-center w-full">
            <div className='w-full flex justify-around items-start'>
                <div className='flex flex-col items-center justify-center gap-10'>
                    <div className='flex flex-col items-center justify-center gap-5'>
                        <Image src={LogoLight} alt="Logo" className='w-30' />
                        <h2 className='text-secondary font-bold text-lg'>KIIT E-CELL</h2>
                    </div>
                    <div className='flex flex-col items-start justify-center gap-2'>
                        <h2 className='font-bold'>Subscribe to Our Blogs</h2>
                        <div className='border border-secondary p-2 rounded-full flex justify-center items-center'>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="outline-none bg-transparent text-primary px-6"
                            />
                            <button className="bg-blue-500 text-white rounded-full ml-2 p-2">
                                <Image src={ArrowRight} alt="Arrow Right" className='size-5' />
                            </button>
                        </div>
                    </div>
                    <div className='flex justify-start items-center w-full gap-5'>
                        <Image src={LinkedIn} alt="LinkedIn" className='size-12 border border-secondary p-2 rounded-xl' />
                        <Image src={Instagram} alt="Instagram" className='size-12 border border-secondary p-2 rounded-xl' />
                        <Image src={Youtube} alt="Youtube" className='size-12 border border-secondary p-2 rounded-xl' />
                        <Image src={Facebook} alt="Facebook" className='size-12 border border-secondary p-2 rounded-xl' />
                    </div>
                </div>
                <div className='flex justify-center items-start gap-30'>
                    <div className='flex flex-col justify-center items-start gap-2'>
                        <h1 className='text-xl text-secondary font-bold'>
                            OUR INITIATIVES
                        </h1>
                        <ul className='text-sm flex flex-col gap-1 justify-center items-start font-medium'>
                            <li>I-Camp</li>
                            <li>BuildSchool</li>
                            <li>Hult Prize</li>
                            <li>Ideathon</li>
                            <li>Growth Garage</li>
                        </ul>
                    </div>
                    <div className='flex flex-col justify-center items-start gap-2'>
                        <h1 className='text-xl text-secondary font-bold'>
                            USEFUL LINKS
                        </h1>
                        <ul className='text-sm flex flex-col gap-1 justify-center items-start'>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Gallery</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className='flex flex-col justify-center items-start gap-2'>
                        <h1 className='text-xl text-secondary font-bold'>
                            CONTACT
                        </h1>
                        <ul className='text-sm flex flex-col gap-1 justify-center items-start'>
                            <li className='flex items-center gap-2'>
                                <Image src={Landmark} alt="Location" className='inline-block'/>
                                <span>E-Cell KIIT, Bhubaneswar, Odisha</span>
                            </li>
                            <li className='flex items-center gap-2'>
                                <Image src={Mail} alt="Email" className='inline-block' />
                                <a href="mailto:support@ecell.in">support@ecell.in</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='w-full h-[0.01rem] bg-secondary mt-9'></div>
            <div>
                <p className='text-secondary p-4'>
                    © 2025 KIIT E-CELL. All rights reserved.
                </p>
            </div>
        </footer >
    )
}

export default Footer
