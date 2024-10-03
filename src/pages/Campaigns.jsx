import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Campaigns = () => {
  const [campaigns, setCampaigns] = useState([]);

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

  return (
    <div>
      <Header />

      <div className="container mx-auto py-8 px-4 md:px-8">
        <h1 className="text-5xl font-bold text-center mb-8">All Campaigns</h1>

        {campaigns.length > 0 ? (
          <div className="space-y-8">
            {campaigns.map((campaign) => (
              <div
                key={campaign.id}
                className="flex flex-col md:flex-row items-center bg-gradient-to-r from-blue-50 to-blue-100 shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105"
              >
                {/* Image Section */}
                <div className="w-full md:w-1/3">
                  <img
                    src={campaign.photo}
                    alt={campaign.title}
                    className="rounded-lg object-cover w-full h-64 shadow-md"
                  />
                </div>

                {/* Text and Button Section */}
                <div className="flex flex-col justify-between w-full md:w-2/3 mt-4 md:mt-0 md:ml-6 h-full">
                  {/* Title and Details */}
                  <div>
                    <h2 className="text-3xl font-bold mb-2 text-gray-900">{campaign.title.trim()}</h2>
                    <p className="text-gray-700 text-lg mb-2">
                      <strong>To be raised:</strong> ${campaign.amountToBeRaised}
                    </p>
                    <p className="text-gray-600">
                      {campaign.description.trim()}
                    </p>
                  </div>

                  {/* Donate Button Positioned at the Bottom */}
                  <div className="mt-auto">
                    <button className="bg-blue-600 text-white w-full md:w-auto px-6 py-3 mt-6 rounded-md hover:bg-blue-700 transition duration-200 shadow-lg hover:shadow-xl">
                      Donate Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-xl">Loading campaigns...</p>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Campaigns;
