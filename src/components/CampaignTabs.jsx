import React from 'react';
import Card from './Card';

const CampaignTabs = () => {
  const campaigns = {
    empowerment: {
      title: "Women Empowerment",
      description: "Women empowerment is not just about women; it is about creating stronger families, communities, and nations. When women thrive, everyone benefits.",
      amount: 100000,
      image: "https://hdfindia.org/admin/uploads/campaigns/gal-4.png"
    },
    education: {
      title: "Child Education",
      description: "Child education encompasses more than academics. It nurtures a childs physical, emotional, social, and cognitive development, preparing them for future success and well-being.",
      amount: 150000,
      image: "https://hdfindia.org/admin/uploads/campaigns/pexels-photo-6647037.jpeg"
    },
    foodDonation: {
      title: "Food Donation",
      description: "Every donation counts! Join our food drive and help feed our neighbors.",
      amount: 120000,
      image: "https://hdfindia.org/admin/uploads/campaigns/image_08.jpg"
    }
  };

  return (
    <div className="container mx-auto py-8 mt-12">
      <div className="mb-8 border-b-4 border-blue-600 pb-4">
        <h1 className="text-5xl font-bold text-center">Campaigns</h1> {/* Bigger title */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.keys(campaigns).map((key) => (
          <Card
            key={key}
            title={campaigns[key].title}
            description={campaigns[key].description}
            amount={campaigns[key].amount}
            image={campaigns[key].image}
          />
        ))}
      </div>

      {/* See All Campaigns button */}
      <div className="mt-6 text-center">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200">
          See All Campaigns
        </button>
      </div>
    </div>
  );
};

export default CampaignTabs;
