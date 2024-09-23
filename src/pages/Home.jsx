import React from 'react';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import CampaignTabs from '../components/CampaignTabs';
import Hero from '../components/Hero';
import NumbersSection from '../components/NumbersSection';

const Home = () => {
  return (
    <>
        <Header />
      <Hero
        title={
          "Welcome to Happy Day Foundation"
        }
        imageUrl={"/globe.jpg"}
      />
      <NumbersSection />
      <CampaignTabs />
    </>
  );
};

export default Home;
