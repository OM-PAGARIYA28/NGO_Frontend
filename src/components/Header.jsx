import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faInfoCircle, faHandsHelping, faImages, faPhoneAlt, faDonate } from "@fortawesome/free-solid-svg-icons";
import { faHandPaper } from "@fortawesome/free-regular-svg-icons";

const Header = () => {
  const [activeTab, setActiveTab] = useState("Home");

  return (
<<<<<<< HEAD
    <header className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">NGO Website</div>
        <nav className="space-x-4 text-white">
          <a href="/" className="hover:text-gray-200">Home</a>
          <a href="/about" className="hover:text-gray-200">About</a>
          <a href="/projects" className="hover:text-gray-200">Projects</a>
          <a href="/Campaigns" className="hover:text-gray-200">Campaigns</a>
          <a href="/contact" className="hover:text-gray-200">Contact</a>
=======
    <header className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        {/* Logo and Title */}
        <div className="flex items-center space-x-4">
          <img
            src="https://hdfindia.org/admin/img/HDF%20logo1.jpg"
            alt="HDF Logo"
            className="h-10 w-10 rounded-full"
          />
          <h1 className="text-2xl font-bold tracking-wider text-white">
            Happy Day Foundation
          </h1>
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-6">
          <NavItem
            name="Home"
            icon={faHome}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <NavItem
            name="About"
            icon={faInfoCircle}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <NavItem
            name="Campaigns"
            icon={faHandsHelping}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <NavItem
            name="Gallery"
            icon={faImages}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <NavItem
            name="Contact"
            icon={faPhoneAlt}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
>>>>>>> tejas
        </nav>

        {/* Buttons */}
        <div className="space-x-4">
          <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full shadow-lg transition duration-300">
            <FontAwesomeIcon icon={faDonate} /> Donate
          </button>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-full shadow-lg transition duration-300">
            <FontAwesomeIcon icon={faHandPaper} /> Volunteer
          </button>
        </div>
      </div>
    </header>
  );
};

const NavItem = ({ name, icon, activeTab, setActiveTab }) => {
  const isActive = activeTab === name;
  return (
    <div
      className={`flex items-center space-x-2 cursor-pointer transition duration-200 ${
        isActive ? "text-blue-500" : "text-gray-400 hover:text-white"
      }`}
      onClick={() => setActiveTab(name)}
    >
      <div
        className={`p-2 rounded-full ${
          isActive ? "bg-blue-500 text-white" : "bg-transparent"
        } transition duration-300`}
      >
        <FontAwesomeIcon icon={icon} />
      </div>
      <span className="font-medium">{name}</span>
    </div>
  );
};

export default Header;
