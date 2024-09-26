import React from 'react';
import Header from '../components/Header';
import Carousel, { slides } from '../components/Carousel'; // Import slides from Carousel
import CampaignTabs from '../components/CampaignTabs';
import Hero from '../components/Hero';
import NumbersSection from '../components/NumbersSection';
import Footer from '../components/Footer';
import UpcomingCampaigns from '../components/UpcomingCampaigns';

const Home = () => {
  return (
    <>
        <Header />
        <div>
            <Carousel slides={slides} /> {/* Pass the imported slides data to Carousel */}
        </div>
        <Hero
            title={"Welcome to Happy Day Foundation"}
            imageUrl={"/globe.jpg"}
        />
        <NumbersSection />
        <CampaignTabs />
        <UpcomingCampaigns />
        <Footer />
    </>
  );
};

export default Home;
