import React from 'react';
import assets from '../../assets/assets';

const HomeHero = () => {
  return (
    <section className="relative flex items-center h-full bg-cover bg-center flex-col md:flex-row" style={{ backgroundImage: `url(${assets.hero1})` }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-1 items-center  text-center md:text-left justify-center p-6 sm:p-8 md:p-12 lg:p-16 mt-24 md:mt-16">
        <div className="text-white max-w-lg ">
          <h1 className="text-5xl  md:text-[2.8rem] leading-tight font-bold mb-4">
            Empowering Precision Liver Health
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl mb-6">AI-Driven Biomarker Discovery</p>
        </div>
      </div>

      {/* Image */}
      <div className="relative flex-1 block w-full px-8 sm:px-12 md:px-14 lg:px-16 py-6 md:mt-8">
        <div className="relative w-full h-full flex items-center justify-center">
          <img 
            src={assets.circle} 
            alt="Hero" 
            className="object-cover w-full h-full  md:max-w-lg lg:max-w-xl"
          />
          <img 
            src={assets.liver} 
            alt="Liver" 
            className="absolute inset-0 w-1/2 h-auto max-w-[200px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px]"
            style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
          />
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
