import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Campaigns from './pages/Campaigns';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Donation from './pages/Donation';
import Volunteer from './pages/Volunteer';
import AdminLogin from './pages/AdminLogin';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/Admin/Dashboard';
import CampaignManager from './components/Admin/CampaignManager';
import UpcomingCampaignManager from './components/Admin/UpcomingCampaignManager';
import AdminLayout from './components/Admin/AdminLayout'; // Layout for admin pages

const App = () => {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/admin/login" element={<AdminLogin />} />

          {/* Protect all admin-related routes */}
          <Route element={<PrivateRoute />}>
            {/* Admin layout applies to all routes under this */}
            <Route element={<AdminLayout />}>
                <Route path="/admin" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard Route */}
                <Route path="/campaigns/manage" element={<CampaignManager />} /> {/* Campaign Manager */}
                <Route path="/works/manage" element={<UpcomingCampaignManager />} /> {/* Upcoming Campaigns */}
            </Route>
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
