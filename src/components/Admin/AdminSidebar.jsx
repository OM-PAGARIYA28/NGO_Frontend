import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTachometerAlt, faEnvelope, faHandHoldingHeart, faFileAlt, faUsers, faHome, faInfoCircle, faImage, faProjectDiagram, faCog, faSignOutAlt
} from '@fortawesome/free-solid-svg-icons'; // Import icons

const SidebarItem = ({ title, icon, children, link }) => {
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
          {link ? (
            <Link to={link} className="text-white">
              {title}
            </Link>
          ) : (
            <span>{title}</span>
          )}
        </div>
        <span>{children && (isOpen ? '▲' : '▼')}</span>
      </div>
      {isOpen && <div className="ml-4">{children}</div>}
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="w-64 bg-[#2A6FF1] h-screen p-6 overflow-y-auto">
      <div className="text-white text-2xl font-bold mb-10">NGO Admin</div>

      {/* Dashboard */}
      <SidebarItem title="Dashboard" icon={faTachometerAlt} link="/dashboard" />

      {/* Messages */}
      <SidebarItem title="Messages" icon={faEnvelope} link="/messages" />

      {/* NGO Services */}
      <div className="text-gray-400 uppercase py-2 px-4">NGO Services</div>
      <SidebarItem title="Donations" icon={faHandHoldingHeart}>
        <SidebarItem title="View Donations" link="/donations/view" />
      </SidebarItem>
      <SidebarItem title="Internship" icon={faFileAlt}>
        <SidebarItem title="Internship Application" link="/internship/applications" />
        <SidebarItem title="Add Internship Types" link="/internship/types" />
      </SidebarItem>
      <SidebarItem title="Campaigns" icon={faUsers}>
        <SidebarItem title="Manage Campaigns" link="/campaigns/manage" />
      </SidebarItem>

      {/* Website Edits */}
      <div className="text-gray-400 uppercase py-2 px-4">Website Edits</div>
      <SidebarItem title="Home Screen" icon={faHome}>
        <SidebarItem title="Sidebar" link="/home/sidebar" />
      </SidebarItem>
      <SidebarItem title="About Us" icon={faInfoCircle}>
        <SidebarItem title="About" link="/about" />
        <SidebarItem title="Mission" link="/mission" />
        <SidebarItem title="Vision" link="/vision" />
        <SidebarItem title="Impact" link="/impact" />
        <SidebarItem title="Contact Information" link="/contact" />
        <SidebarItem title="Manage FAQs" link="/faqs/manage" />
      </SidebarItem>
      <SidebarItem title="Gallery" icon={faImage}>
        <SidebarItem title="Manage" link="/gallery/manage" />
        <SidebarItem title="Edit Tiles" link="/gallery/edit" />
      </SidebarItem>
      <SidebarItem title="Upcoming Works" icon={faProjectDiagram}>
        <SidebarItem title="Manage" link="/works/manage" />
      </SidebarItem>

      {/* Account */}
      <div className="text-gray-400 uppercase py-2 px-4">Account</div>
      <SidebarItem title="Account" icon={faCog}>
        <SidebarItem title="Settings" link="/account/settings" />
        <SidebarItem title="Logout" link="/logout" icon={faSignOutAlt} />
      </SidebarItem>
    </div>
  );
};

export default Sidebar;
