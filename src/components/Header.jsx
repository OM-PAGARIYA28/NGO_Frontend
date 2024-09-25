import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">NGO Website</div>
        <nav className="space-x-4 text-white">
          <a href="/" className="hover:text-gray-200">Home</a>
          <a href="/about" className="hover:text-gray-200">About</a>
          <a href="/projects" className="hover:text-gray-200">Projects</a>
          <a href="/Campaigns" className="hover:text-gray-200">Campaigns</a>
          <a href="/contact" className="hover:text-gray-200">Contact</a>
        </nav>
        <div className="space-x-2">
          <button className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-full">
            Donate Now
          </button>
          <button className="bg-yellow-500 hover:bg-yellow-700 text-white py-2 px-4 rounded-full">
            Volunteer
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
