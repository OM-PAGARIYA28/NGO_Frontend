import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './Card';

const CampaignTabs = () => {
  const [campaigns, setCampaigns] = useState([]);
  const navigate = useNavigate(); // Initialize navigate hook

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await fetch('https://ngo-backend-om-pagariyas-projects.vercel.app/admin/campaign/getallcampaign');
        const data = await response.json();
        setCampaigns(data);
      } catch (error) {
        console.error('Error fetching campaigns:', error);
      }
    };

    fetchCampaigns();
  }, []);

  // Function to handle "See All Campaigns" button click
  const handleSeeAllCampaigns = () => {
    navigate('/campaigns'); // Navigate to the Campaign page (adjust the route if needed)
  };

  return (
    <div className="container mx-auto py-8 mt-12 px-4 md:px-8">
      <div className="mb-8 border-b-4 border-blue-600 pb-4">
        <h1 className="text-5xl font-bold text-center">Campaigns</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {campaigns.length > 0 ? (
          campaigns.map((campaign) => (
            <Card
              key={campaign.id}
              title={campaign.title.trim()}
              description={campaign.description.trim()}
              amount={campaign.amountToBeRaised}
              image={campaign.photo}
            />
          ))
        ) : (
          <p className="text-center col-span-3">Loading campaigns...</p>
        )}
      </div>

      {/* See All Campaigns button */}
      <div className="mt-6 text-center">
        <button
          onClick={handleSeeAllCampaigns} // Handle button click
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-200 shadow-md hover:shadow-lg"
        >
          See All Campaigns
        </button>
      </div>
    </div>
  );
};

export default CampaignTabs;
