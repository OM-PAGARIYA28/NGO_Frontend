import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Home page
import About from './pages/About'; // Import About page
import Campaigns from './pages/Campaigns'; // Import Campaigns page
import Gallery from './pages/Gallery'; // Import Gallery page
import Contact from './pages/Contact'; // Import Contact page
import Donation from './pages/Donation'; // Import Donation page
import Volunteer from './pages/Volunteer'; // Import Volunteer page
import Admin from './pages/Admin'; // Import Admin page
import './index.css'; // Import global styles

const App = () => {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home Page */}
          <Route path="/about" element={<About />} /> {/* About Page */}
          <Route path="/campaigns" element={<Campaigns />} /> {/* Campaigns Page */}
          <Route path="/gallery" element={<Gallery />} /> {/* Gallery Page */}
          <Route path="/contact" element={<Contact />} /> {/* Contact Page */}
          <Route path="/donation" element={<Donation />} /> {/* Donation Page */}
          <Route path="/volunteer" element={<Volunteer />} /> {/* Volunteer Page */}
          <Route path="/admin" element={<Admin />} /> {/* Admin Page */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
