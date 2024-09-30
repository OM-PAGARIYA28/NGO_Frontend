import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom'; // Added useLocation
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faInfoCircle,
  faHandsHelping,
  faImages,
  faPhoneAlt,
  faDonate,
  faBars,
  faTimes,
  faHandPaper
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation(); // Hook to track the current route

  // Update active tab based on the current URL
  useEffect(() => {
    const pathToTabName = {
      "/": "Home",
      "/about": "About",
      "/campaigns": "Campaigns",
      "/gallery": "Gallery",
      "/contact": "Contact",
    };

    const tabName = pathToTabName[location.pathname] || "Home";
    setActiveTab(tabName);
  }, [location.pathname]); // Run when location changes

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <div className="flex items-center space-x-4">
          <img
            src="https://hdfindia.org/admin/img/HDF%20logo1.jpg"
            alt="HDF Logo"
            className="h-10 w-10 rounded-full"
          />
          <h1 className="text-xl md:text-2xl font-bold tracking-wider text-white">
            Happy Day Foundation
          </h1>
        </div>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} className="text-white" />
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex space-x-6">
          <NavItem name="Home" icon={faHome} path="/" activeTab={activeTab} setActiveTab={setActiveTab} />
          <NavItem name="About" icon={faInfoCircle} path="/about" activeTab={activeTab} setActiveTab={setActiveTab} />
          <NavItem name="Campaigns" icon={faHandsHelping} path="/campaigns" activeTab={activeTab} setActiveTab={setActiveTab} />
          <NavItem name="Gallery" icon={faImages} path="/gallery" activeTab={activeTab} setActiveTab={setActiveTab} />
          <NavItem name="Contact" icon={faPhoneAlt} path="/contact" activeTab={activeTab} setActiveTab={setActiveTab} />
        </nav>

        {/* Donation and Volunteer Buttons */}
        <div className="hidden lg:flex space-x-4">
          <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full shadow-lg transition duration-300">
            <FontAwesomeIcon icon={faDonate} /> Donate
          </button>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-full shadow-lg transition duration-300">
            <FontAwesomeIcon icon={faHandPaper} /> Volunteer
          </button>
        </div>
      </div>

      {/* Sidebar for Mobile Menu */}
      <div className={`fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        <div className={`fixed right-0 top-0 w-64 bg-gray-900 h-full transform transition-transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"} shadow-lg z-50`}>
          <div className="flex justify-end p-4">
            <button onClick={toggleMenu}>
              <FontAwesomeIcon icon={faTimes} className="text-white" />
            </button>
          </div>
          <nav className="flex flex-col space-y-4 p-4">
            <NavItem name="Home" icon={faHome} path="/" activeTab={activeTab} setActiveTab={setActiveTab} />
            <NavItem name="About" icon={faInfoCircle} path="/about" activeTab={activeTab} setActiveTab={setActiveTab} />
            <NavItem name="Campaigns" icon={faHandsHelping} path="/campaigns" activeTab={activeTab} setActiveTab={setActiveTab} />
            <NavItem name="Gallery" icon={faImages} path="/gallery" activeTab={activeTab} setActiveTab={setActiveTab} />
            <NavItem name="Contact" icon={faPhoneAlt} path="/contact" activeTab={activeTab} setActiveTab={setActiveTab} />
          </nav>

          {/* Donation and Volunteer Buttons in Sidebar */}
          <div className="flex flex-col items-center p-4">
            <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full shadow-lg transition duration-300 mb-2">
              <FontAwesomeIcon icon={faDonate} /> Donate
            </button>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-full shadow-lg transition duration-300">
              <FontAwesomeIcon icon={faHandPaper} /> Volunteer
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

const NavItem = ({ name, icon, path, activeTab, setActiveTab }) => {
  const isActive = activeTab === name;
  return (
    <Link to={path}>
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
    </Link>
  );
};

export default Header;
