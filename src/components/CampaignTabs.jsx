import React, { useEffect, useState } from 'react';
import Card from './Card';

const CampaignTabs = () => {
  const [campaigns, setCampaigns] = useState([]); // Use array instead of object

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        // Fetching campaigns from your backend API
        const response = await fetch('https://ngo-backend-om-pagariyas-projects.vercel.app/admin/campaign/getallcampaign');
        const data = await response.json();// Log the API response for debugging
        setCampaigns(data); // Set the campaigns data as an array
      } catch (error) {
        console.error('Error fetching campaigns:', error); // Handle errors
      }
    };

    fetchCampaigns(); // Call the function when component mounts
  }, []); // Empty dependency array ensures this only runs once

  return (
    <div className="container mx-auto py-8 mt-12">
      <div className="mb-8 border-b-4 border-blue-600 pb-4">
        <h1 className="text-5xl font-bold text-center">Campaigns</h1> {/* Bigger title */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {campaigns.length > 0 ? (
          campaigns.map((campaign) => (
            <Card
              key={campaign.id}
              title={campaign.title.trim()} // Trimming any extra white spaces
              description={campaign.description.trim()}
              amount={campaign.amountToBeRaised}
              image={campaign.photo}
            />
          ))
        ) : (
          <p className="text-center col-span-3">Loading campaigns...</p> // Display while data is loading
        )}
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
