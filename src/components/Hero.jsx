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
        const data = await response.json(); // Log the data to check if everything is correct

        // Update state with the fetched data
        setAboutUsData({
          title: data.title || 'Default Title', // Fallback to 'Default Title' if title is missing
          description: data.description || 'Default Description', // Fallback to 'Default Description' if description is missing
          imageUrl: data.image || 'https://via.placeholder.com/400', // Fallback to placeholder image if image URL is missing
        });
      } catch (error) {
        console.error('Error fetching about us data:', error);
      }
    };

    fetchAboutUsData(); // Fetch the data when the component mounts
  }, []); // Empty dependency array to run this effect only once

  return (
    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 pt-24 lg:pt-32 pb-32 lg:pb-24 container mx-auto">
      <div className="flex flex-col justify-center gap-12 lg:gap-20 lg:max-w-2xl">
        <h1 className="text-4xl lg:text-5xl font-extrabold tracking-wider lg:tracking-wide">
          {aboutUsData.title}
        </h1>
        <p className="text-lg lg:text-xl text-gray-900 tracking-wider">
          {aboutUsData.description}
        </p>
      </div>
      <div className="flex justify-center items-center relative">
        <img
          src={aboutUsData.imageUrl}
          alt={aboutUsData.title}
          className="max-w-lg w-full h-auto"
        />
        <span className="absolute right-[-300px] top-[-200px] z-[-1] hidden lg:block">
          {/* Add decorative SVG or image if needed */}
        </span>
      </div>
    </div>
  );
};

export default Hero;
