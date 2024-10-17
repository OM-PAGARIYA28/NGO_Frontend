import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE_URL = "https://ngo-backend-om-pagariyas-projects.vercel.app/admin/campaign";

const CampaignManager = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [newCampaign, setNewCampaign] = useState({
    title: '',
    description: '',
    photo: null,
    amountToBeRaised: '',
  });
  const [showForm, setShowForm] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [error, setError] = useState('');

  // Fetch all campaigns on component load
  useEffect(() => {
    fetchCampaigns();
  }, []);

  const fetchCampaigns = async () => {
    try {
      const token = localStorage.getItem('token'); // Get token from local storage
      const response = await axios.get(`${API_BASE_URL}/getallcampaign`, {
        headers: {
          Authorization: `Bearer ${token}`, // Set token in headers
        },
      });
      setCampaigns(response.data);
    } catch (error) {
      console.error('Error fetching campaigns:', error);
      setError('Failed to fetch campaigns. Please try again later.'); // Error handling
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCampaign((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setNewCampaign((prev) => ({ ...prev, photo: e.target.files[0] }));
  };

  const handleCreateCampaign = async () => {
    const formData = new FormData();
    formData.append('title', newCampaign.title);
    formData.append('description', newCampaign.description);
    formData.append('amountToBeRaised', newCampaign.amountToBeRaised);
    formData.append('photo', newCampaign.photo);

    try {
      const token = localStorage.getItem('token'); // Get token from local storage
      await axios.post(`${API_BASE_URL}/create`, formData, {
        headers: {
          Authorization: `Bearer ${token}`, // Set token in headers
        },
      });
      fetchCampaigns();
      resetForm(); // Reset the form after creating
    } catch (error) {
      console.error('Error creating campaign:', error);
      setError('Failed to create campaign. Please try again.'); // Error handling
    }
  };

  const handleEditCampaign = async () => {
    const formData = new FormData();
    formData.append('title', newCampaign.title);
    formData.append('description', newCampaign.description);
    formData.append('amountToBeRaised', newCampaign.amountToBeRaised);
    formData.append('photo', newCampaign.photo);

    try {
      const token = localStorage.getItem('token'); // Get token from local storage
      await axios.patch(`${API_BASE_URL}/${selectedCampaign._id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`, // Set token in headers
        },
      });
      fetchCampaigns();
      resetForm(); // Reset the form after editing
      setEditMode(false);
    } catch (error) {
      console.error('Error updating campaign:', error);
      setError('Failed to update campaign. Please try again.'); // Error handling
    }
  };

  const handleDeleteCampaign = async (id) => {
    try {
      const token = localStorage.getItem('token'); // Get token from local storage
      await axios.delete(`${API_BASE_URL}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Set token in headers
        },
      });
      fetchCampaigns();
    } catch (error) {
      console.error('Error deleting campaign:', error);
      setError('Failed to delete campaign. Please try again.'); // Error handling
    }
  };

  const openEditForm = (campaign) => {
    setSelectedCampaign(campaign);
    setNewCampaign({
      title: campaign.title,
      description: campaign.description,
      amountToBeRaised: campaign.amountToBeRaised,
      photo: null, // Image handling can be extended
    });
    setEditMode(true);
    setShowForm(true);
  };

  const resetForm = () => {
    setNewCampaign({
      title: '',
      description: '',
      photo: null,
      amountToBeRaised: '',
    });
    setShowForm(false);
    setError(''); // Reset error message on form reset
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-blue-600">Campaign Manager</h1>
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-500 transition"
          onClick={() => {
            resetForm(); // Reset the form to add a new campaign
            setShowForm(true);
            setEditMode(false); // Set edit mode to false for adding a new campaign
          }}
        >
          Add New Campaign
        </button>
      </div>

      {/* Error Message */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Campaigns Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="py-3 px-5">ID</th>
              <th className="py-3 px-5">Title</th>
              <th className="py-3 px-5">Photo</th>
              <th className="py-3 px-5">Description</th>
              <th className="py-3 px-5">Amount to Be Raised</th>
              <th className="py-3 px-5">Actions</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((campaign) => (
              <tr key={campaign._id} className="border-b">
                <td className="py-3 px-5">{campaign._id}</td>
                <td className="py-3 px-5">{campaign.title}</td>
                <td className="py-3 px-5">
                  <img src={campaign.photo} alt={campaign.title} className="w-16 h-16 rounded-md object-cover" />
                </td>
                <td className="py-3 px-5">{campaign.description}</td>
                <td className="py-3 px-5">${campaign.amountToBeRaised}</td>
                <td className="py-3 px-5">
                  <button
                    className="bg-yellow-500 text-white px-4 py-1 rounded-lg mr-2 hover:bg-yellow-400 transition"
                    onClick={() => openEditForm(campaign)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-400 transition"
                    onClick={() => handleDeleteCampaign(campaign._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
            <h2 className="text-2xl mb-4">{editMode ? 'Edit Campaign' : 'Add New Campaign'}</h2>
            <input
              type="text"
              name="title"
              placeholder="Campaign Title"
              value={newCampaign.title}
              onChange={handleInputChange}
              className="border p-2 w-full rounded-lg mb-3"
            />
            <input
              type="file"
              name="photo"
              onChange={handleFileChange}
              className="border p-2 w-full rounded-lg mb-3"
            />
            <textarea
              name="description"
              placeholder="Description"
              value={newCampaign.description}
              onChange={handleInputChange}
              className="border p-2 w-full rounded-lg mb-3"
            />
            <input
              type="number"
              name="amountToBeRaised"
              placeholder="Amount to Be Raised"
              value={newCampaign.amountToBeRaised}
              onChange={handleInputChange}
              className="border p-2 w-full rounded-lg mb-3"
            />
            <div className="flex justify-between">
              <button
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-500 transition"
                onClick={editMode ? handleEditCampaign : handleCreateCampaign}
              >
                {editMode ? 'Update Campaign' : 'Create Campaign'}
              </button>
              <button
                className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-500 transition"
                onClick={resetForm}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CampaignManager;
