import React, { useEffect, useState } from 'react';
import Card from './Card';

const UpcomingCampaigns = () => {
  const [upcomingCampaigns, setUpcomingCampaigns] = useState([]); // State to store campaigns data

  useEffect(() => {
    const fetchUpcomingCampaigns = async () => {
      try {
        const response = await fetch('https://ngo-backend-om-pagariyas-projects.vercel.app/upcomingwork/getallupcomingcampaign');
        const data = await response.json();
        console.log('Fetched Upcoming Campaigns:', data); // Log the API response for debugging

        // Update the state with the fetched data
        setUpcomingCampaigns(data); // Assuming data is an array of campaign objects
      } catch (error) {
        console.error('Error fetching upcoming campaigns:', error); // Handle errors
      }
    };

    fetchUpcomingCampaigns(); // Fetch the data when the component mounts
  }, []); // Empty dependency array to ensure this only runs once

  // Helper function to truncate descriptions
  const truncateDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return `${description.slice(0, maxLength)}...`;
    }
    return description;
  };

  return (
    <div className="container mx-auto py-8 mt-6">
      <div className="mb-8 border-b-4 border-green-600 pb-4">
        <h1 className="text-5xl font-bold text-center">Upcoming Campaigns</h1> {/* Bigger title */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {upcomingCampaigns.length > 0 ? (
          upcomingCampaigns.map((campaign) => (
            <Card
              key={campaign.id} // Assuming each campaign has a unique 'id'
              title={campaign.title}
              description={truncateDescription(campaign.description, 150)} // Truncate to 150 characters
              amount={campaign.amountToBeRaised}
              image={campaign.photo}
            />
          ))
        ) : (
          <p className="text-center col-span-3">Loading upcoming campaigns...</p> // Display while data is loading
        )}
      </div>
    </div>
  );
};

export default UpcomingCampaigns;
