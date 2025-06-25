"use client";
import Pencil from "@/assets/icons/pencil.svg"
import Image from "next/image"
import { useState } from "react"
import LaisonCard from "./LaisonCard"
import styles from "./LaisonsSection.module.css"
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

const members = [
  { img: "/member1.png", name: "Dhruv", surname: "Duggal", role: "Marketing", username: "dhruvduggal", link: "https://www.linkedin.com/in/dhruv-duggal-897b01255/" },
  { img: "/member2.png", name: "Ayush", surname: "Kshitij", role: "Tech", username: "ayushkshitij", link: "https://www.linkedin.com/in/ayush-kshitij/" },
  { img: "/member3.png", name: "Anmol", surname: "Tewari", role: "PCR", username: "anmoltewari", link: "https://www.linkedin.com/in/anmol-tewari/" },
  { img: "/member4.png", name: "Abhishek", surname: "Sahoo", role: "PCR", username: "abhisheksahoo", link: "https://www.linkedin.com/in/abhishek-sahoo-7420302a8/" },
  { img: "/member5.png", name: "Manshi", surname: "Jaiswal", role: "R&D", username: "manshijaiswal", link: "https://www.linkedin.com/in/manshi-jaiswal20/" },
];

const ANIMATION_DURATION = 400;

const LaisonsSection = () => {
    const [selected, setSelected] = useState(0);
    const [animatingIdx, setAnimatingIdx] = useState<number|null>(null);
    const [pendingIdx, setPendingIdx] = useState<number|null>(null);
    const selectedLiason = members[selected];
    const [sliderStart, setSliderStart] = useState(0);
    const sliderCount = 4;
    const sliderMembers = members.filter((_, idx) => idx !== selected);
    const visibleMembers = sliderMembers.slice(sliderStart, sliderStart + sliderCount);

    const handleSelect = (idx: number) => {
        setAnimatingIdx(idx);
        setPendingIdx(idx);
        setTimeout(() => {
            setSelected(idx);
            setAnimatingIdx(null);
            setPendingIdx(null);
        }, ANIMATION_DURATION);
    };

    const handleLeft = () => {
        const prevIdx = (selected - 1 + members.length) % members.length;
        setAnimatingIdx(prevIdx);
        setPendingIdx(prevIdx);
        setTimeout(() => {
            setSelected(prevIdx);
            setAnimatingIdx(null);
            setPendingIdx(null);
        }, ANIMATION_DURATION);
    };
    const handleRight = () => {
        const nextIdx = (selected + 1) % members.length;
        setAnimatingIdx(nextIdx);
        setPendingIdx(nextIdx);
        setTimeout(() => {
            setSelected(nextIdx);
            setAnimatingIdx(null);
            setPendingIdx(null);
        }, ANIMATION_DURATION);
    };

    return (
        <section className="bg-gradient-2 w-full flex flex-col items-center justify-center py-10 gap-10">
            {/* Top: Centered heading and buttons */}
            <div className="flex flex-col items-center justify-center gap-4 mb-8">
                <div className="text-shadow-lg text-shadow-black text-center">
                    <p className="text-5xl">We've joined forces to turn</p>
                    <p className="text-5xl">bold ideas into reality</p>
                </div>
                <button className="flex justify-center items-center gap-5 px-4 py-2 rounded-full bg-[linear-gradient(to_right,_#1AB2EC_0%,_#0C857B_100%)] shadow-2xl shadow-black">
                    <span
                        className="font-bold text-cta cursor-pointer"
                        onClick={() => {
                            const section = document.getElementById("liaisons-section");
                            if (section) {
                                section.scrollIntoView({ behavior: "smooth" });
                            }
                        }}
                    >
                        MEET OUR LAISONS
                    </span>
                    <Image src={Pencil} alt="pencil icon" className="w-9 bg-cta p-1.5 rounded-full" />
                </button>
                <button
                    className="bg-primary text-cta font-bold px-4 py-2 rounded-2xl mt-2"
                    onClick={() => window.location.href = '/signup'}
                >
                    JOIN US
                </button>
            </div>
            {/* Below: Card on left, slider on right */}
            <div className="flex flex-row items-center justify-center w-full gap-14">
                <div className="flex-1 flex items-center min-h-[400px]">
                    <button onClick={handleLeft} className="mr-6 text-3xl text-blue-400 bg-[#18122B] hover:bg-blue-900/20 rounded-full p-2 transition flex items-center justify-center" aria-label="Previous">
                        <BsChevronCompactLeft />
                    </button>
                    <div className={`flex justify-end w-full ${pendingIdx !== null ? styles.cardFadeOut : styles.cardFadeIn}`}> 
                        <LaisonCard
                            avatarUrl={selectedLiason.img}
                            name={`${selectedLiason.name} ${selectedLiason.surname}`}
                            title={selectedLiason.role}
                            handle={selectedLiason.username}
                            onContactClick={() => window.open(selectedLiason.link, '_blank')}
                        />
                    </div>
                </div>
                <div className="flex-1 flex justify-start">
                    <div className="flex gap-6 items-center">
                        {visibleMembers.map((liason, idx) => {
                            const memberIdx = members.findIndex(m => m === liason);
                            const isAnimating = animatingIdx === memberIdx;
                            return (
                                <button
                                    key={memberIdx}
                                    onClick={() => handleSelect(memberIdx)}
                                    className={`focus:outline-none ${styles.liasonImage} ${isAnimating ? styles.liaisonImageAnimating : ''}`}
                                    disabled={animatingIdx !== null}
                                >
                                    <img
                                        src={liason.img}
                                        alt={liason.name}
                                        className={`w-28 h-28 rounded-full border-4 border-transparent hover:border-blue-400 transition-all object-cover bg-[#18122B] ${isAnimating ? 'ring-4 ring-blue-400' : ''}`}
                                    />
                                </button>
                            );
                        })}
                        <button onClick={handleRight} className="text-3xl text-blue-400 bg-[#18122B] hover:bg-blue-900/20 rounded-full p-2 transition flex items-center justify-center" aria-label="Next">
                            <BsChevronCompactRight />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LaisonsSection
