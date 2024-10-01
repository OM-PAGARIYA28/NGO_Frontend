import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Reusable Section Component
const Section = ({ title, description, imgSrc, imgAlt, imgFirst }) => {
  return (
    <section className="py-12 px-6 md:flex md:justify-between md:items-center border-b border-gray-200">
      {imgFirst && (
        <div className="md:w-1/2 md:pr-6 mb-6 md:mb-0">
          <img
            src={imgSrc}
            alt={imgAlt}
            className="h-auto w-full aspect-[16/9] object-cover rounded-lg shadow-lg transition-transform hover:scale-105"
          />
        </div>
      )}
      <div className="md:w-1/2">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">{title}</h2>
        <p className="text-lg text-gray-600 mb-4 leading-relaxed">{description}</p>
      </div>
      {!imgFirst && (
        <div className="md:w-1/2 md:pl-6 mb-6 md:mb-0">
          <img
            src={imgSrc}
            alt={imgAlt}
            className="h-auto w-full aspect-[16/9] object-cover rounded-lg shadow-lg transition-transform hover:scale-105"
          />
        </div>
      )}
    </section>
  );
};

const About = () => {
  return (
    <div className="bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Us Section */}
        <Section
          title="About Us"
          description="At Happy Day Foundation, we believe that everyone deserves a chance to experience true joy. Our mission is to create brighter days for those in need within our community. We work tirelessly to provide support, resources, and opportunities that help individuals and families overcome challenges and reach their full potential."
          imgSrc="/NGO-About.png" // Replace with your actual image path
          imgAlt="About Us"
          imgFirst={false}
        />

        {/* Mission Section */}
        <Section
          title="Mission"
          description="The Happy Day Foundation is dedicated to making a tangible difference in the lives of those who face adversity. We envision a community where everyone has the resources they need to thrive. Through targeted programs and partnerships, we address fundamental needs like food security, housing support, educational assistance, and mental health resources. Join us in building a happier, more equitable future for all."
          imgSrc="https://www.hdfindia.org/assets/img/mission.jpg" // Replace with your actual image path
          imgAlt="Mission"
          imgFirst={true}
        />

        {/* Vision Section */}
        <Section
          title="Vision"
          description="The Happy Day Foundation was born from a simple act of kindness. Inspired by the impact of that single action, we have grown into a movement dedicated to empowering those around us. Today, we are a network of volunteers, donors, and community partners all working to make every day a little brighter."
          imgSrc="https://www.hdfindia.org/assets/img/vision.jpg" // Replace with your actual image path
          imgAlt="Vision"
          imgFirst={false}
        />

        {/* Impact Section */}
        <Section
          title="Impact"
          description="The Happy Day Foundation is dedicated to making a tangible difference in the lives of those who face adversity. We envision a community where everyone has the resources they need to thrive. Through targeted programs and partnerships, we address fundamental needs like food security, housing support, educational assistance, and mental health resources. Join us in building a happier, more equitable future for all."
          imgSrc="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Replace with your actual image path
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
