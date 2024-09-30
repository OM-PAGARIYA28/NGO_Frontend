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
        const response = await fetch('https://ngo-backend-om-pagariyas-projects.vercel.app/aboutus/getaboutus/1');
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
    <div className="flex flex-col lg:flex-row gap-12 lg:gap-10 pt-20 lg:pt-32 pb-20 lg:pb-14 container mx-auto">
      <div className="flex flex-col justify-start items-start gap-6 lg:gap-8 lg:max-w-2xl text-left px-4">


        {/* Title with Conditional Underline */}
        <h1 className="text-4xl lg:text-5xl font-extrabold tracking-wider lg:tracking-wide text-left relative">
          {aboutUsData.title}
          {/* Underline only on small screens */}
          <span className="absolute left-0 bottom-[-8px] block w-full h-1 bg-orange-500 lg:hidden"></span>
        </h1>

        {/* Description */}
        <p className="text-base lg:text-xl text-gray-900 tracking-widest px-0 ">
          {aboutUsData.description}
        </p>
      </div>

      <div className="flex justify-center items-center relative ">
        <img
          src={aboutUsData.imageUrl}
          alt={aboutUsData.title}
          className="max-w-xs lg:max-w-lg w-full h-auto rounded-lg shadow-2xl"
        />
        <span className="absolute right-[-150px] top-[-100px] z-[-1] hidden lg:block">
          {/* Add decorative SVG or image if needed */}
        </span>
      </div>
    </div>
  );
};

export default Hero;
