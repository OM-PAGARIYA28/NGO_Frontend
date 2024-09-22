import React from 'react';
import Header from './Header';
import Carousel from './Carousel';
import CampaignTabs from './CampaignTabs';

const Home = () => {
  return (
    <div>
      <Header />
      <Carousel />
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our NGO</h1>
          <p className="text-lg text-gray-700 mb-8">
            We are committed to making the world a better place through education, healthcare, and empowerment.
          </p>
          <a href="/projects" className="bg-blue-600 text-white px-6 py-3 rounded-full">
            Explore Our Work
          </a>
        </div>
      </section>
      <CampaignTabs />
    </div>
  );
};

export default Home;
