import React from 'react';
import Card from './Card';

const UpcomingCampaigns = () => {
  const upcomingCampaign = {
    title: "Seed Bank for Happy Day",
    description: "Seeds are the foundation of our food, our environment, and the delicate balance of life on Earth. But sadly, plant diversity is rapidly declining. Climate change, habitat destruction, and industrial agriculture threaten the survival of countless plant species, risking our future food security and the health of our planet.",
    amount: 200000,
    image: "https://hdfindia.org/admin/uploads/upcomingworks/Seed-bank-hands.png"
  };

  return (
    <div className="container mx-auto py-8 mt-6">
      <div className="mb-8 border-b-4 border-green-600 pb-4">
        <h1 className="text-5xl font-bold text-center">Upcoming Campaigns</h1> {/* Bigger title */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          title={upcomingCampaign.title}
          description={upcomingCampaign.description}
          amount={upcomingCampaign.amount}
          image={upcomingCampaign.image}
        />
      </div>
    </div>
  );
};

export default UpcomingCampaigns;
