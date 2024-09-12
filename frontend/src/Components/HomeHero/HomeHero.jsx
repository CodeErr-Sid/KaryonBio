import React from 'react';
import assets from '../../assets/assets';

const HomeHero = () => {
  return (
    <section className="relative flex items-center h-screen bg-cover bg-center" style={{ backgroundImage: `url(${assets.hero1})` }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-1 items-center justify-center p-8">
        <div className="text-white max-w-lg">
          <h1 className="text-4xl md:text-[2.8rem] leading-tight font-bold mb-4">
            Empowering Precision Liver Health
          </h1>
          <p className="text-3xl mb-6">AI-Driven Biomarker Discovery</p>
        </div>
      </div>

      {/* Image */}
      <div className="relative flex-1 hidden lg:block">
        <div className="relative w-full h-full flex items-center justify-center">
          <img src={assets.circle} alt="Hero" className="object-cover w-full h-full p-14" />
          <img 
            src={assets.liver} 
            alt="Liver" 
            className="absolute inset-0 w-1/2 h-auto" 
            style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
          />
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
