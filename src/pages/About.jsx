import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Reusable Section Component
const Section = ({ title, description, imgSrc, imgAlt, imgFirst }) => {
  return (
    <section className="py-12 px-6 md:flex md:justify-between md:items-center border-b border-gray-200">
      <div className={`flex flex-col-reverse ${imgFirst ? 'md:flex-row-reverse' : 'md:flex-row'} md:w-full`}>
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img
            src={imgSrc}
            alt={imgAlt}
            className="h-auto w-full aspect-[16/9] object-cover rounded-lg shadow-lg transition-transform hover:scale-105"
          />
        </div>
        <div className="md:w-1/2 md:pl-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">{title}</h2>
          <p className="text-lg text-gray-600 mb-4 leading-relaxed mr-2">{description}</p>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  const [aboutData, setAboutData] = useState({});
  const [missionData, setMissionData] = useState({});
  const [visionData, setVisionData] = useState({});
  const [impactData, setImpactData] = useState({});

  // Fetch data for About Us
  useEffect(() => {
    fetch('https://ngo-backend-om-pagariyas-projects.vercel.app/aboutus/getaboutus/5')
      .then((response) => response.json())
      .then((data) => setAboutData(data))
      .catch((error) => console.error('Error fetching About Us data:', error));
  }, []);

  // Fetch data for Mission
  useEffect(() => {
    fetch('https://ngo-backend-om-pagariyas-projects.vercel.app/aboutus/getaboutus/2')
      .then((response) => response.json())
      .then((data) => setMissionData(data))
      .catch((error) => console.error('Error fetching Mission data:', error));
  }, []);

  // Fetch data for Vision
  useEffect(() => {
    fetch('https://ngo-backend-om-pagariyas-projects.vercel.app/aboutus/getaboutus/3')
      .then((response) => response.json())
      .then((data) => setVisionData(data))
      .catch((error) => console.error('Error fetching Vision data:', error));
  }, []);

  // Fetch data for Impact
  useEffect(() => {
    fetch('https://ngo-backend-om-pagariyas-projects.vercel.app/aboutus/getaboutus/4')
      .then((response) => response.json())
      .then((data) => setImpactData(data))
      .catch((error) => console.error('Error fetching Impact data:', error));
  }, []);

  return (
    <div className="bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Us Section */}
        <Section
          title={aboutData.title || "About Us"}
          description={aboutData.description || "Loading..."}
          imgSrc={aboutData.image || "/NGO-About.png"}
          imgAlt="About Us"
          imgFirst={false}
        />

        {/* Mission Section */}
        <Section
          title={missionData.title || "Mission"}
          description={missionData.description || "Loading..."}
          imgSrc={missionData.image || "https://www.hdfindia.org/assets/img/mission.jpg"}
          imgAlt="Mission"
          imgFirst={true}
        />

        {/* Vision Section */}
        <Section
          title={visionData.title || "Vision"}
          description={visionData.description || "Loading..."}
          imgSrc={visionData.image || "https://www.hdfindia.org/assets/img/vision.jpg"}
          imgAlt="Vision"
          imgFirst={false}
        />

        {/* Impact Section */}
        <Section
          title={impactData.title || "Impact"}
          description={impactData.description || "Loading..."}
          imgSrc={impactData.image || "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}
          imgAlt="Impact"
          imgFirst={true}
        />
      </div>

      <div className="border-t border-gray-300 mt-12"></div> {/* Separator */}
      <Footer />
    </div>
  );
};

export default About;
