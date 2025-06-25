import Pencil from "@/assets/icons/pencil.svg"
import Image from "next/image"
import LaisonCard from "./LaisonCard"

const LaisonsSection = () => {
    return (
        <section className="bg-slate-950 w-full flex flex-col items-center justify-center py-10 gap-14">
            <div className="flex flex-col items-center justify-center text-shadow-lg text-shadow-black">
                <p className="text-5xl">
                    We've joined forces to turn
                </p>
                <p className="text-5xl">
                    bold ideas into reality
                </p>
            </div>
            <div>
                <button className="flex justify-center items-center gap-5 px-4 py-2 rounded-full bg-[linear-gradient(to_right,_#1AB2EC_0%,_#0C857B_100%)] shadow-2xl shadow-black">
                    <span className="font-bold text-cta">MEET OUR LAISONS</span>
                    <Image src={Pencil} alt="pencil icon" className="w-9 bg-cta p-1.5 rounded-full" />
                </button>
            </div>
            <div className="flex gap-20">
                <LaisonCard img="/member1.png" name="Dhruv" surname="Duggal" role="Marketing" />
                <LaisonCard img="/member2.png" name="Ayush" surname="Kshitij" role="Tech" />
                <LaisonCard img="/member3.png" name="Anmol" surname="Tewari" role="PCR" />
                <LaisonCard img="/member4.png" name="Abhishek" surname="Sahoo" role="PCR" />
                <LaisonCard img="/member5.png" name="Manshi" surname="Jaiswal" role="R&D" />
            </div>
            <div className="flex justify-center items-center">
                <button className="bg-primary text-cta font-bold px-4 py-2 rounded-2xl">
                    JOIN US
                </button>
            </div>
        </section>
    )
}

export default LaisonsSection
