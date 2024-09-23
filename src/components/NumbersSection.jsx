import React, { useEffect, useState } from 'react';

const NumbersSection = () => {
  const [stats, setStats] = useState({
    visitors: 0,
    customers: 0,
    awards: 0,
    listings: 0
  });

  useEffect(() => {
    // Faster animation settings
    let visitorsTimer = setInterval(() => setStats(prev => ({ ...prev, visitors: Math.min(prev.visitors + 30, 15) })), 25);
    let customersTimer = setInterval(() => setStats(prev => ({ ...prev, customers: Math.min(prev.customers + 30, 2000) })), 25);
    let awardsTimer = setInterval(() => setStats(prev => ({ ...prev, awards: Math.min(prev.awards + 150, 4000) })), 25);
    let listingsTimer = setInterval(() => setStats(prev => ({ ...prev, listings: Math.min(prev.listings + 15, 25) })), 25);

    return () => {
      clearInterval(visitorsTimer);
      clearInterval(customersTimer);
      clearInterval(awardsTimer);
      clearInterval(listingsTimer);
    };
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-100 to-blue-300 text-white py-12 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mx-8">
        {Object.entries(stats).map(([key, value], index) => (
          <div className="text-center flex-1 p-4" key={index}>
            <div className="font-extrabold text-5xl text-blue-900 animate-pulse transition-transform duration-500 hover:scale-105">{value}</div>
            <div className="text-lg text-blue-800 capitalize">{getLabel(key)}</div>
            <div className="w-16 h-1 bg-blue-500 mx-auto mt-2"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

const getLabel = (key) => {
  switch (key) {
    case 'visitors':
      return 'LAC CHILDREN IMPACTED';
    case 'customers':
      return 'VILLAGES REACHED OUT';
    case 'awards':
      return 'PROJECTS';
    case 'listings':
      return 'STATES';
    default:
      return '';
  }
};

export default NumbersSection;
