import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandsHelping, faBookOpen, faUsers, faClock } from '@fortawesome/free-solid-svg-icons';

const Volunteer = () => {
  return (
    <div>
      <Header />

      {/* Image Section */}
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1616680214084-22670de1bc82?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Volunteers"
          className="w-full h-96 object-cover"
        />
      </div>

      {/* Button Section with Styled Background */}
      <div className="py-6 bg-cyan-100">
        <div className="container mx-auto flex justify-center">
          <div className="flex space-x-2">
            <a
              href="https://forms.gle/a626tDwJcobRacJR7"
              className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
            >
              Be a Volunteer
            </a>
            <a
              href="https://forms.gle/1r1Dv9wbxHcPPnzQ8"
              className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-6 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
            >
              Apply for Internship
            </a>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Why be a Volunteer */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Why Be a Volunteer?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li className="flex items-center">
              <FontAwesomeIcon icon={faHandsHelping} className="mr-2 text-green-500" />
              Make a difference in your community.
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faUsers} className="mr-2 text-green-500" />
              Meet new people and build friendships.
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faBookOpen} className="mr-2 text-green-500" />
              Gain valuable skills and experience.
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faClock} className="mr-2 text-green-500" />
              Flexible hours that fit your schedule.
            </li>
          </ul>
        </div>

        {/* Why Apply for Internship */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Why Apply for Internship?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li className="flex items-center">
              <FontAwesomeIcon icon={faBookOpen} className="mr-2 text-yellow-500" />
              Practical experience in your field of interest.
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faUsers} className="mr-2 text-yellow-500" />
              Build a professional network for future opportunities.
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faHandsHelping} className="mr-2 text-yellow-500" />
              Contribute to meaningful projects and initiatives.
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faClock} className="mr-2 text-yellow-500" />
              Enhance your resume with relevant experience.
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Volunteer;
