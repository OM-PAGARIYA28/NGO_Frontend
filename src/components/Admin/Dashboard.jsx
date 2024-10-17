import React from 'react';

const Dashboard = () => {
  const data = {
    liveCampaigns: 3,
    totalDonations: 10000,
    messages: 131,
    internshipApplications: 0,
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Live Campaigns Block */}
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-xl font-semibold">Live Campaigns</h2>
          <p className="text-lg">{data.liveCampaigns}</p>
        </div>

        {/* Total Donations Block */}
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-xl font-semibold">Total Donations Received</h2>
          <p className="text-lg">INR {data.totalDonations}</p>
        </div>

        {/* Messages Block */}
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-xl font-semibold">Messages</h2>
          <p className="text-lg">{data.messages}</p>
        </div>

        {/* Internship Applications Block */}
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-xl font-semibold">Internship Applications</h2>
          <p className="text-lg">{data.internshipApplications}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
