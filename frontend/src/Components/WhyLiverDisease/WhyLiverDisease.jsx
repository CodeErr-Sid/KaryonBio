import React, { useState, useEffect, useRef } from 'react';
import { Play } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const data = [
  { year: 1970, liver: 100, other: 100 },
  { year: 1980, liver: 150, other: 90 },
  { year: 1990, liver: 200, other: 80 },
  { year: 2000, liver: 300, other: 70 },
  { year: 2010, liver: 350, other: 60 },
  { year: 2020, liver: 320, other: 50 },
];

const WhyLiverDisease = () => {
  const [isVisible, setIsVisible] = useState(false);
  const chartRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => {
      if (chartRef.current) {
        observer.unobserve(chartRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-400 to-blue-500 text-white p-6 md:p-10 lg:p-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-4xl font-semibold mb-4 text-sky-300">WHY</h2>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 lg:w-1/2">
          Chronic liver disease is the only top ten global killer on the rise
        </h1>
        
        <div className="lg:flex lg:space-x-8">
          <div className="lg:w-1/2 mb-6 lg:mb-0">
            <blockquote className="border-l-4 border-sky-300 pl-4 mb-6 ">
              <p className="text-xl">"Liver disease is the third leading cause of premature death."</p>
              <footer className="text-sm mt-2">UK Health Security Agency, July 2021</footer>
            </blockquote>
            
            <p className="mb-6">
              Without effective therapies, the only resort for many patients remains a liver transplant. However the supply of healthy donor organs cannot meet what's required, with minorities disproportionately disadvantaged.
            </p>
            
            <button className="flex items-center space-x-2 bg-sky-300 hover:bg-sky-400 transition duration-300 rounded-full px-4 py-2">
              <Play size={40} className="border-2 border-zinc-50 rounded-full p-1" />
              <span>
                Jack O'Meara on how improving outcomes for liver transplant patients is a first step towards treating chronic liver disease
              </span>
            </button>
          </div>
          
          <div className="lg:w-1/2" ref={chartRef}>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <XAxis dataKey="year" stroke="#fff" />
                <YAxis stroke="#fff" />
                {isVisible && (
                  <>
                    <Line 
                      type="monotone" 
                      dataKey="liver" 
                      stroke="#8bf2fc" 
                      strokeWidth={2} 
                      name="Liver Disease"
                      animationDuration={2000}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="other" 
                      stroke="#fcd34d" 
                      strokeWidth={2} 
                      name="Other Diseases"
                      animationDuration={2000}
                    />
                  </>
                )}
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyLiverDisease;