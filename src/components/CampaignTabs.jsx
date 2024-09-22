import React, { useState } from 'react';

const CampaignTabs = () => {
  const [activeTab, setActiveTab] = useState('education');

  const campaigns = {
    education: {
      title: "Education for All",
      description: "Help children access quality education through our 'Shiksha Na Ruke' initiative."
    },
    healthcare: {
      title: "Healthcare for All",
      description: "Our 'Health Cannot Wait' program ensures accessible healthcare services for rural communities."
    },
    empowerment: {
      title: "Women Empowerment",
      description: "Empower girls through 'She Can Fly' by providing education, health, and vocational training."
    }
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex space-x-4 mb-4">
        <button onClick={() => setActiveTab('education')} className={`py-2 px-4 ${activeTab === 'education' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
          Education
        </button>
        <button onClick={() => setActiveTab('healthcare')} className={`py-2 px-4 ${activeTab === 'healthcare' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
          Healthcare
        </button>
        <button onClick={() => setActiveTab('empowerment')} className={`py-2 px-4 ${activeTab === 'empowerment' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
          Empowerment
        </button>
      </div>

      <div className="p-4 bg-white shadow-md">
        <h2 className="text-2xl font-bold">{campaigns[activeTab].title}</h2>
        <p className="text-gray-700">{campaigns[activeTab].description}</p>
      </div>
    </div>
  );
};

export default CampaignTabs;
