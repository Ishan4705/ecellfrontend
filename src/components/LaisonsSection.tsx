"use client";
import Pencil from "@/assets/icons/pencil.svg"
import Image from "next/image"
import { useState } from "react"
import LaisonCard from "./LaisonCard"
import styles from "./LaisonsSection.module.css"

const members = [
  { img: "/member1.png", name: "Dhruv", surname: "Duggal", role: "Marketing" },
  { img: "/member2.png", name: "Ayush", surname: "Kshitij", role: "Tech" },
  { img: "/member3.png", name: "Anmol", surname: "Tewari", role: "PCR" },
  { img: "/member4.png", name: "Abhishek", surname: "Sahoo", role: "PCR" },
  { img: "/member5.png", name: "Manshi", surname: "Jaiswal", role: "R&D" },
];

const ANIMATION_DURATION = 400;

const LaisonsSection = () => {
    const [selected, setSelected] = useState(0);
    const [animatingIdx, setAnimatingIdx] = useState<number|null>(null);
    const [pendingIdx, setPendingIdx] = useState<number|null>(null);
    const selectedLiason = members[selected];
    const sliderMembers = members.filter((_, idx) => idx !== selected);

    const handleSelect = (idx: number) => {
        setAnimatingIdx(idx);
        setPendingIdx(idx);
        setTimeout(() => {
            setSelected(idx);
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
                    <span className="font-bold text-cta">MEET OUR LAISONS</span>
                    <Image src={Pencil} alt="pencil icon" className="w-9 bg-cta p-1.5 rounded-full" />
                </button>
                <button className="bg-primary text-cta font-bold px-4 py-2 rounded-2xl mt-2">JOIN US</button>
            </div>
            {/* Below: Card on left, slider on right */}
            <div className="flex flex-row items-center justify-center w-full gap-14">
                <div className="flex-1 flex justify-end items-center min-h-[400px]">
                    <div className={`${pendingIdx !== null ? styles.cardFadeOut : styles.cardFadeIn}`}>
                        <LaisonCard avatarUrl={selectedLiason.img} name={`${selectedLiason.name} ${selectedLiason.surname}`} title={selectedLiason.role} />
                    </div>
                </div>
                <div className="flex-1 flex justify-start">
                    <div className="flex gap-6 items-center">
                        {sliderMembers.map((liason, idx) => {
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
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LaisonsSection
