"use client";
import React, { useState } from "react";
import Image from "next/image";

const members = [
  { img: "/member1.png", name: "Dhruv" },
  { img: "/member2.png", name: "Ayush" },
  { img: "/member3.png", name: "Anmol" },
  { img: "/member4.png", name: "Abhishek" },
  { img: "/member5.png", name: "Manshi" },
];

interface LaisonImageSliderProps {
  selected: number;
  setSelected: (idx: number) => void;
}

const LaisonImageSlider: React.FC<LaisonImageSliderProps> = ({ selected, setSelected }) => {
  const total = members.length;
  const prev = () => setSelected((selected - 1 + total) % total);
  const next = () => setSelected((selected + 1) % total);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-4">
        <button onClick={prev} className="text-2xl bg-[#18122B] text-blue-400 rounded-full p-2">&#8592;</button>
        <div className="flex gap-4">
          {[selected - 1, selected, selected + 1].map((idx, i) => {
            const memberIdx = (idx + total) % total;
            return (
              <Image
                key={memberIdx}
                src={members[memberIdx].img}
                alt={members[memberIdx].name}
                width={72}
                height={72}
                className={`rounded-full border-4 ${i === 1 ? 'border-blue-400 scale-110' : 'border-transparent opacity-60'} bg-[#18122B]`}
              />
            );
          })}
        </div>
        <button onClick={next} className="text-2xl bg-[#18122B] text-blue-400 rounded-full p-2">&#8594;</button>
      </div>
      <div className="flex gap-2 mt-2">
        {members.map((_, idx) => (
          <span
            key={idx}
            className={`h-3 w-3 rounded-full ${idx === selected ? 'bg-blue-400' : 'bg-gray-500'}`}
            onClick={() => setSelected(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default LaisonImageSlider;
