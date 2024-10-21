import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center text-white bg-gray-800">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Name Section */}
          <div className="mx-auto mt-3">
            <h6 className="text-lg font-bold uppercase mb-4">Happy Day Foundation</h6>
            <p>
                Empowering Change, Nurturing Hope.
            </p>
          </div>

          {/* Campaigns Section */}
          <div className="mx-auto mt-3">
            <h6 className="text-lg font-bold uppercase mb-4">Campaigns</h6>
            <p><a href="/campaigns" className="text-white">Women Empowerment</a></p>
            <p><a href="/campaigns" className="text-white">Child Education</a></p>
            <p><a href="/campaigns" className="text-white">Food Donation</a></p>
          </div>

          {/* Useful Links Section */}
          <div className="mx-auto mt-3">
            <h6 className="text-lg font-bold uppercase mb-4">Useful Links</h6>
            <p><a href="/" className="text-white">Home</a></p>
            <p><a href="/about" className="text-white">About</a></p>
            <p><a href="/campaigns" className="text-white">Campaigns</a></p>
            <p><a href="/contact" className="text-white">Contact</a></p>
          </div>

          {/* Contact Section */}
          <div className="mx-auto mt-3">
            <h6 className="text-lg font-bold uppercase mb-4">Contact</h6>
            <p><i className="fas fa-home mr-2"></i> E7, Laxamibai Kunkalol Market, Kolhar BK, Tal-Rahata, Dist-Ahmednagar. INDIA 413710 </p>
            <p><i className="fas fa-phone mr-2"></i> +91 9049977905</p>
            <p><i className="fas fa-envelope mr-2"></i> happydayfoundation@gmail.com </p>
          </div>
        </div>

        <hr className="my-3 border-gray-500" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p>© 2024 Copyright: Happy Day Foundation</p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-3">
            <a href="#" className="text-white p-2 rounded-full border border-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white p-2 rounded-full border border-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white p-2 rounded-full border border-white">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-white p-2 rounded-full border border-white">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
