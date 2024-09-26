import React, { useEffect, useState } from 'react';
import Card from './Card';

const UpcomingCampaigns = () => {
  const [upcomingCampaigns, setUpcomingCampaigns] = useState([]);

  useEffect(() => {
    const fetchUpcomingCampaigns = async () => {
      try {
        const response = await fetch('https://ngo-backend-om-pagariyas-projects.vercel.app/upcomingwork/getallupcomingcampaign');
        const data = await response.json();
        console.log('Fetched Upcoming Campaigns:', data);
        setUpcomingCampaigns(data);
      } catch (error) {
        console.error('Error fetching upcoming campaigns:', error);
      }
    };

    fetchUpcomingCampaigns();
  }, []);

  const truncateDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return `${description.slice(0, maxLength)}...`;
    }
    return description;
  };

  return (
    <div className="container mx-auto py-8 mt-6 px-4">
      <div className="mb-8 border-b-4 border-green-600 pb-4">
        <h1 className="text-5xl font-bold text-center">Upcoming Campaigns</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {upcomingCampaigns.length > 0 ? (
          upcomingCampaigns.map((campaign) => (
            <Card
              key={campaign.id}
              title={campaign.title}
              description={truncateDescription(campaign.description, 150)}
              amount={campaign.amountToBeRaised}
              image={campaign.photo}
            />
          ))
        ) : (
          <p className="text-center col-span-3">Loading upcoming campaigns...</p>
        )}
      </div>
    </div>
  );
};

export default UpcomingCampaigns;
