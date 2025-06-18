import AboutSection from "@/components/AboutSection";
import LaisonsSection from "@/components/LaisonsSection";
import HeroSection from "@/components/HeroSection";
export default function Home() {
  return (
    <>
      <HeroSection />
      {/* Uncomment the line below to display the Hero Section title */}
      {/* <div className="text-4xl font-bold h-dvh">HERO SECTION</div> */}
      <AboutSection />
      <LaisonsSection />
    </>
  );
}
