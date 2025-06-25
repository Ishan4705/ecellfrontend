import Image from "next/image"
import LogoLight from "@/assets/logolight.svg"
import LogoKiit from "@/assets/logokiit.svg"

const AboutSection = () => {
    return (
        <section className="flex flex-col justify-center items-center w-full bg-gradient-1 py-10 px-24 gap-10">
            <div className="flex justify-around items-center w-full">
                <Image src={LogoLight} alt="Logo" />
                <h1 className="text-8xl font-extrabold pl-20" style={{ 
                    background: 'linear-gradient(to right, #FFFFFF 0%, #2E9AD2 48%, #061955 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                }}>About Us</h1>
                <Image src={LogoKiit} alt="Logo KIIT" className="size-60"/>
            </div>
            <div className="flex items-center justify-center w-full gap-20 mb-30">
                <div className="w-full flex flex-col gap-6 text-2xl text-justify">
                    <p>
                        The <span style={{ color: '#2E9AD2' }}>KIIT Entrepreneurship Cell (E-Cell)</span> operates with the motto "Imagine, Innovate, Implement." Entrepreneurs are pioneers — innovators and changemakers who shape a better future.
                    </p>
                    <p>
                        KIIT <span style={{ color: '#2E9AD2' }}>E-Cell</span> strives to empower these visionaries by providing mentorship, exposure, networking opportunities, and essential support to transform their ideas into successful enterprises. By nurturing a strong entrepreneurial spirit among students, KIIT E-Cell is dedicated to building a comprehensive support system for aspiring business leader.
                    </p>
                    <p>
                        The KIIT <span style={{ color: '#2E9AD2' }}> E-Cell </span> regularly organizes major flagship events, including the KIIT E-Summit, Hult Prize KIIT, Internship Camps, Design XP, Speaker Sessions, Star nights and a variety of workshops and seminars.
                    </p>
                </div>
                <div className="flex items-center justify-center relative">
                    <div className="rounded-full" style={{ 
                        background: 'linear-gradient(to right, #888888, #FFFFFF)',
                        width: '369px',
                        height: '369px'
                    }}></div>
                    <Image
                        src="/For_Enter_By_Enter_2.png"
                        alt="For Enter By Enter 2"
                        className="absolute"
                        width={359}
                        height={359}
                        style={{
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            zIndex: 6
                        }}
                    />
                    <div className="absolute rounded-full" style={{ 
                        backgroundColor: '#022B93',
                        width: '250px',
                        height: '250px',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}></div>
                    <Image
                        src="/Property_Crafting_ideas_1_Frame_84.png"
                        alt="Ideas"
                        className="absolute"
                        width={180}
                        height={180}
                        style={{
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            zIndex: 10
                        }}
                    />
                </div>
            </div>
        </section>
    )
}

export default AboutSection
