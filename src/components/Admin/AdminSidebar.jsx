import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTachometerAlt, faEnvelope, faHandHoldingHeart, faFileAlt, faUsers,
  faHome, faInfoCircle, faImage, faProjectDiagram, faCog, faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';

const SidebarItem = ({ title, icon, children, link, isActive }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        onClick={toggleDropdown}
        className={`flex items-center text-white py-2 px-4 hover:bg-blue-500 cursor-pointer rounded justify-between ${isActive ? 'bg-blue-600' : ''}`}
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
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location

  const handleLogout = () => {
    localStorage.removeItem('jwt_token');
    navigate('/admin/login'); // Adjust this path according to your login route
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-[#2A6FF1] p-6 overflow-y-auto">
        <div className="text-white text-2xl font-bold mb-10">NGO Admin</div>

        {/* Dashboard */}
        <SidebarItem title="Dashboard" icon={faTachometerAlt} link="/dashboard" isActive={location.pathname === '/dashboard'} />

        {/* Messages */}
        <SidebarItem title="Messages" icon={faEnvelope} link="/messages" isActive={location.pathname === '/messages'} />

        {/* NGO Services */}
        <div className="text-gray-400 uppercase py-2 px-4">NGO Services</div>
        <SidebarItem title="Donations" icon={faHandHoldingHeart} isActive={location.pathname.startsWith('/donations')}>
          <SidebarItem title="View Donations" link="/donations/view" icon={faHandHoldingHeart} isActive={location.pathname === '/donations/view'} />
        </SidebarItem>
        <SidebarItem title="Internship" icon={faFileAlt} isActive={location.pathname.startsWith('/internship')}>
          <SidebarItem title="Internship Application" link="/internship/applications" icon={faFileAlt} isActive={location.pathname === '/internship/applications'} />
          <SidebarItem title="Add Internship Types" link="/internship/types" icon={faFileAlt} isActive={location.pathname === '/internship/types'} />
        </SidebarItem>
        <SidebarItem title="Campaigns" icon={faUsers} isActive={location.pathname.startsWith('/campaigns')}>
          <SidebarItem title="Manage Campaigns" link="/campaigns/manage" icon={faUsers} isActive={location.pathname === '/campaigns/manage'} />
        </SidebarItem>

        {/* Website Edits */}
        <div className="text-gray-400 uppercase py-2 px-4">Website Edits</div>
        <SidebarItem title="About" icon={faInfoCircle} isActive={location.pathname.startsWith('/aboutus')}>
          <SidebarItem title="About Us" link="/aboutus/5" icon={faInfoCircle} isActive={location.pathname === '/aboutus/5'} />
          <SidebarItem title="Mission" link="/aboutus/2" icon={faInfoCircle} isActive={location.pathname === '/aboutus/2'} />
          <SidebarItem title="Vision" link="/aboutus/3" icon={faInfoCircle} isActive={location.pathname === '/aboutus/3'} />
          <SidebarItem title="Impact" link="/aboutus/4" icon={faInfoCircle} isActive={location.pathname === '/aboutus/4'} />
          <SidebarItem title="Contact Information" link="/contact" icon={faInfoCircle} isActive={location.pathname === '/contact'} />
          <SidebarItem title="Manage FAQs" link="/faqs/manage" icon={faInfoCircle} isActive={location.pathname === '/faqs/manage'} />
        </SidebarItem>
        <SidebarItem title="Gallery" icon={faImage} isActive={location.pathname.startsWith('/gallery')}>
          <SidebarItem title="Manage" link="/gallery/manage" icon={faImage} isActive={location.pathname === '/gallery/manage'} />
          <SidebarItem title="Edit Tiles" link="/gallery/edit" icon={faImage} isActive={location.pathname === '/gallery/edit'} />
        </SidebarItem>
        <SidebarItem title="Upcoming Works" icon={faProjectDiagram} isActive={location.pathname.startsWith('/works')}>
          <SidebarItem title="Manage" link="/works/manage" icon={faProjectDiagram} isActive={location.pathname === '/works/manage'} />
        </SidebarItem>

        {/* Account */}
        <div className="text-gray-400 uppercase py-2 px-4">Account</div>
        <SidebarItem title="Account" icon={faCog} isActive={location.pathname.startsWith('/account')}>
          <SidebarItem title="Settings" link="/account/settings" icon={faCog} isActive={location.pathname === '/account/settings'} />
          <div onClick={handleLogout} className="flex items-center text-white py-2 px-4 hover:bg-blue-500 cursor-pointer rounded">
            <FontAwesomeIcon icon={faSignOutAlt} className="mr-3" />
            <span>Logout</span>
          </div>
        </SidebarItem>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-6 bg-gray-100 overflow-y-auto">
        {/* Content will be rendered here based on the selected sidebar item */}
        {/* Example: <Routes> and <Route> components should be defined here to display the correct content */}
      </div>
    </div>
  );
};

export default Sidebar;
