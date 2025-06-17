import Image from "next/image"
import LogoLight from "@/assets/logolight.svg"
import LogoKiit from "@/assets/logokiit.svg"

const AboutSection = () => {
    return (
        <section className="flex flex-col justify-center items-center w-full bg-gradient-1 py-10 px-24 gap-10">
            <div className="flex justify-around items-center w-full">
                <Image src={LogoLight} alt="Logo" />
                <h1 className="text-8xl font-extrabold pl-20">About Us</h1>
                <Image src={LogoKiit} alt="Logo KIIT" className="size-60"/>
            </div>
            <div className="flex items-center justify-center w-full gap-20 mb-30">
                <div className="w-full flex flex-col gap-6 text-2xl text-justify">
                    <p>
                        The KIIT Entrepreneurship Cell (E-Cell) operates with the motto "Imagine, Innovate, Implement." Entrepreneurs are pioneers — innovators and changemakers who shape a better future.
                    </p>
                    <p>
                        KIIT E-Cell strives to empower these visionaries by providing mentorship, exposure, networking opportunities, and essential support to transform their ideas into successful enterprises. By nurturing a strong entrepreneurial spirit among students, KIIT E-Cell is dedicated to building a comprehensive support system for aspiring business leader.
                    </p>
                    <p>
                        The KIIT E-Cell regularly organizes major flagship events, including the KIIT E-Summit, Hult Prize KIIT, Internship Camps, Design XP, Speaker Sessions, Star nights and a variety of workshops and seminars.
                    </p>
                </div>
                <div>
                    <Image
                        src="/ideas.png"
                        alt="Ideas"
                        className=""
                        width={500}
                        height={500}
                    />
                </div>
            </div>
        </section>
    )
}

export default AboutSection
