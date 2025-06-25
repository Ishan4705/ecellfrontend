import React from 'react';
import Slider from './EventsSlider';
import Navbar from './Navbar';
import Footer from './Footer';
const App: React.FC = () => {
  return (
 
    <div className="events-page bg-[#090314] text-white min-h-screen relative overflow-hidden flex flex-col w-full">

        <div className="absolute top-0 left-0 w-full z-20">
            <Navbar />
        </div>
      {/* Main Content Area */}
      <div className="flex flex-col items-center justify-center flex-1 pt-[120px] pb-16 px-2 sm:pt-[140px] md:pt-[150px] md:pb-20 grow w-full">
        
        <div
          className="for-those-who-seek-more font-bold text-[2.2rem] sm:text-[2.8rem] md:text-[3.5rem] lg:text-[68px] leading-[1.1] tracking-[-0.03em] text-center mb-10 sm:mb-14 md:mb-16 w-full"
          style={{
            background: 'linear-gradient(179.67deg, rgba(255, 255, 255, 1) 0%, rgba(46, 154, 210, 1) 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            color: 'transparent',
            opacity: 0.9,
          }}
        >
          <span className="for-those-who-seek-more-span text-[#B9F5FF]">For those who</span>
          <br />
          <span className="for-those-who-seek-more-span text-[#B9F5FF]">Seek more!</span>
        </div>
        <Slider />
        {/* Register Button */}
        
      </div>
<Footer />
      {/* Noise overlay */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-30 mix-blend-overlay">
        
      </div>
    </div>
  );
};

export default App;