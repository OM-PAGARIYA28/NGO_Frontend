import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [aboutUsData, setAboutUsData] = useState({
    title: '',
    description: '',
    imageUrl: ''
  });

  useEffect(() => {
    const fetchAboutUsData = async () => {
      try {
        const response = await fetch('https://ngo-backend-om-pagariyas-projects.vercel.app/aboutus/getaboutus');
        const data = await response.json();

        setAboutUsData({
          title: data.title || 'Default Title',
          description: data.description || 'Default Description',
          imageUrl: data.image || 'https://via.placeholder.com/400',
        });
      } catch (error) {
        console.error('Error fetching about us data:', error);
      }
    };

    fetchAboutUsData();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 pt-24 lg:pt-32 pb-32 lg:pb-24 container mx-auto">
      <div className="flex flex-col justify-center items-center gap-6 lg:gap-8 lg:max-w-2xl text-left px-4">
        <h1 className="text-3xl lg:text-5xl font-extrabold tracking-wider lg:tracking-wide text-center">
          {aboutUsData.title}
        </h1>
        <p className="text-base lg:text-xl text-gray-900 tracking-widest px-10 text-left">
          At Happy Day Foundation, we believe that everyone deserves a chance to experience true joy. Our mission is to create brighter days for those in need within our community. We work tirelessly to provide support, resources, and opportunities that help individuals and families overcome challenges and reach their full potential.
        </p>
      </div>
      <div className="flex justify-center items-center relative">
        <img
          src={aboutUsData.imageUrl}
          alt={aboutUsData.title}
          className="max-w-xs lg:max-w-lg w-full h-auto"
        />
        <span className="absolute right-[-150px] top-[-100px] z-[-1] hidden lg:block">
          {/* Add decorative SVG or image if needed */}
        </span>
      </div>
    </div>
  );
};

export default Hero;
