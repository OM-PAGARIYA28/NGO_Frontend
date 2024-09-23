import React from 'react';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import CampaignTabs from '../components/CampaignTabs';
import Hero from '../components/Hero';
import NumbersSection from '../components/NumbersSection';
import Footer from '../components/Footer';

const slides = [
    {
      city: 'Paris',
      country: 'France',
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/paris.jpg',
    },
    {
      city: 'Singapore',
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/singapore.jpg',
    },
    {
      city: 'Prague',
      country: 'Czech Republic',
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/prague.jpg',
    },
    {
      city: 'Amsterdam',
      country: 'Netherlands',
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/amsterdam.jpg',
    },
    {
      city: 'Moscow',
      country: 'Russia',
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/moscow.jpg',
    },
  ];


const Home = () => {
  return (
    <>
        <Header />
        <div>
            <Carousel slides={slides}/>
        </div>
        <Hero
            title={
            "Welcome to Happy Day Foundation"
            }
            imageUrl={"/globe.jpg"}
        />
      <NumbersSection />
      <CampaignTabs />
      <Footer />
    </>
  );
};

export default Home;
