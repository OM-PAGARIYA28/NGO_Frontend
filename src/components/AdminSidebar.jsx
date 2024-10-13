import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTachometerAlt, faEnvelope, faHandHoldingHeart, faFileAlt, faUsers, faHome, faInfoCircle, faImage, faProjectDiagram, faCog, faSignOutAlt
} from '@fortawesome/free-solid-svg-icons'; // Import icons

const SidebarItem = ({ title, icon, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        onClick={toggleDropdown}
        className="flex items-center text-white py-2 px-4 hover:bg-blue-500 cursor-pointer rounded justify-between"
      >
        <div className="flex items-center">
          <FontAwesomeIcon icon={icon} className="mr-3" />
          <span>{title}</span>
        </div>
        <span>{children && (isOpen ? '▲' : '▼')}</span>
      </div>
      {isOpen && <div className="ml-4">{children}</div>}
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="w-64 bg-[#2A6FF1] h-screen p-6">
      <div className="text-white text-2xl font-bold mb-10">NGO Admin</div>

      {/* Dashboard */}
      <SidebarItem title="Dashboard" icon={faTachometerAlt} />

      {/* Messages */}
      <SidebarItem title="Messages" icon={faEnvelope} />

      {/* NGO Services */}
      <div className="text-gray-400 uppercase py-2 px-4">NGO Services</div>
      <SidebarItem title="Donations" icon={faHandHoldingHeart}>
        <SidebarItem title="View Donations" />
      </SidebarItem>
      <SidebarItem title="Internship" icon={faFileAlt}>
        <SidebarItem title="Internship Application" />
        <SidebarItem title="Add Internship Types" />
      </SidebarItem>
      <SidebarItem title="Campaigns" icon={faUsers}>
        <SidebarItem title="Manage Campaigns" />
      </SidebarItem>

      {/* Website Edits */}
      <div className="text-gray-400 uppercase py-2 px-4">Website Edits</div>
      <SidebarItem title="Home Screen" icon={faHome}>
        <SidebarItem title="Sidebar" />
      </SidebarItem>
      <SidebarItem title="About Us" icon={faInfoCircle}>
        <SidebarItem title="About" />
        <SidebarItem title="Mission" />
        <SidebarItem title="Vision" />
        <SidebarItem title="Impact" />
        <SidebarItem title="Contact Information" />
        <SidebarItem title="Manage FAQs" />
      </SidebarItem>
      <SidebarItem title="Gallery" icon={faImage}>
        <SidebarItem title="Manage" />
        <SidebarItem title="Edit Tiles" />
      </SidebarItem>
      <SidebarItem title="Upcoming Works" icon={faProjectDiagram}>
        <SidebarItem title="Manage" />
      </SidebarItem>

      {/* Account */}
      <div className="text-gray-400 uppercase py-2 px-4">Account</div>
      <SidebarItem title="Account" icon={faCog}>
        <SidebarItem title="Settings" />
        <SidebarItem title="Logout" icon={faSignOutAlt} />
      </SidebarItem>
    </div>
  );
};

export default Sidebar;
