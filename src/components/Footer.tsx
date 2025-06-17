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
        <footer className="px-10 py-10 flex flex-col justify-around items-start w-full gap-20 border">
            <div>
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
                                className="outline-none bg-transparent text-primary px-2"
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
                <div className='flex justify-center items-start gap-20'>
                    <div className='flex flex-col justify-center items-start gap-2'>
                        <h1 className='text-xl text-secondary font-bold'>
                            OUR INITIATIVES
                        </h1>
                        <ul className='text-sm flex flex-col gap-1 justify-center items-start'>
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
                    <div>
                        <h1 className='text-xl text-secondary font-bold'>
                            CONTACT
                        </h1>
                        <ul className='text-sm flex flex-col gap-1 justify-center items-start'>
                            <li>
                                E-Cell KIIT, Bhubaneswar, Odisha
                            </li>
                            <li>
                                <a href="mailto:support@ecell.in">support@ecell.in</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div></div>
            <div></div>
        </footer >
    )
}

export default Footer
