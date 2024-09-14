import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import assets from '../../assets/assets';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const HomeHero = () => {

  useEffect(() => {
    // Animate liver image zooming in and out
    gsap.fromTo('.liver-image', 
      { scale: 1 }, 
      { 
        scale: 1.2, // Zoom in
        duration: 2, // Time for one zoom in and out cycle
        repeat: -1, // Repeat infinitely
        yoyo: true, // Make it zoom in and out
        ease: 'power1.inOut',
      }
    );

    // Animate circle image: fade in and rotate infinitely
    gsap.fromTo('.circle-image', 
      { opacity: 0 }, 
      { 
        opacity: 1, // Fade in
        duration: 2, // Time for fade in
        delay: 1, // Delay before rotation starts
        onComplete: () => {
          gsap.to('.circle-image', {
            rotation: 360,
            duration: 10, // Time to complete one full rotation
            repeat: -1, // Repeat infinitely
            ease: 'linear',
          });
        }
      }
    );
  }, []);

  return (
    <section 
      className="relative flex items-center h-full bg-cover bg-center flex-col md:flex-row bg-gradient-to-r from-blue-400 to-blue-500"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-1 items-center text-center md:text-left justify-center p-6 sm:p-8 md:p-12 lg:p-16 mt-24 md:mt-16">
        <div className="text-white max-w-lg">
          <h1 className="text-5xl md:text-[2.8rem] leading-tight font-bold mb-4">
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
            className="circle-image object-cover w-full h-full md:max-w-lg lg:max-w-xl"
          />
          <img 
            src={assets.liver} 
            alt="Liver" 
            className="liver-image absolute inset-0 w-1/2 h-auto max-w-[200px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px]"
            style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
          />
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
