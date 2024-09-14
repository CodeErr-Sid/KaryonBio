import React from 'react';
import assets from '../../assets/assets';

const AboutUs = () => {
  return (
    <div className="bg-white p-8 mb-12 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-slate-800 text-center mb-2">About Us</h1>
      <h2 className="text-xl text-blue-500 text-center mb-6 font-bold">PRO HEALTH</h2>

      <p className="text-slate-600 text-center mb-16 max-w-2xl mx-auto lg:w-1/2">
        At Karyon Bio, we revolutionize liver disease management with our innovative, AI-powered biomarker and drug discovery solutions.
      </p>

      <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
        <div className="relative flex-1 mx-auto ">
          <img
            src={assets.dummy}
            alt="Doctor with patient"
            className="w-full rounded-lg object-cover"
          />
        </div>

        <div className="flex-1 space-y-4">
          <div className="flex items-start gap-4">
            <svg
              className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-slate-600">
              By seamlessly integrating multi-omics data, clinical insights, literature mining, and advanced imaging techniques, our non-invasive platform offers early diagnosis, accurate prognosis, and personalized treatment strategies for NAFLD/NASH and other liver disorders.
            </p>
          </div>
          <div className="flex items-start gap-4">
            <svg
              className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-slate-600">
              Our proprietary AI algorithm technology detects NAFLD at its inception, predicts disease progression, and identifies tailored therapeutic options. With a commitment to precision medicine, Karyon Bio is at the forefront of transforming liver care, providing patients and healthcare providers with the tools they need for better health outcomes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
