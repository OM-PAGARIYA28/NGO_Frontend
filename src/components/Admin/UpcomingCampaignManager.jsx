import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE_URL = "https://ngo-backend-om-pagariyas-projects.vercel.app/upcomingwork";

const UpcomingCampaignManager = () => {
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

  useEffect(() => {
    fetchCampaigns();
  }, []);

  const fetchCampaigns = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${API_BASE_URL}/getallupcomingcampaign`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCampaigns(response.data);
    } catch (error) {
      handleError(error);
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
    if (!validateCampaign(newCampaign)) return;

    const formData = createFormData(newCampaign);

    try {
      const token = localStorage.getItem('token');
      await axios.post(`${API_BASE_URL}/create`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data', // Use multipart/form-data for file uploads
        },
      });
      fetchCampaigns();
      resetForm();
    } catch (error) {
      handleError(error);
    }
  };

  const handleEditCampaign = async () => {
    if (!validateCampaign(newCampaign)) return;

    const formData = createFormData(newCampaign);

    try {
      const token = localStorage.getItem('token');
      await axios.patch(`${API_BASE_URL}/${selectedCampaign.id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data', // Use multipart/form-data for file uploads
        },
      });
      fetchCampaigns();
      resetForm();
      setEditMode(false);
    } catch (error) {
      handleError(error);
    }
  };

  const handleDeleteCampaign = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`${API_BASE_URL}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      fetchCampaigns();
    } catch (error) {
      handleError(error);
    }
  };

  const openEditForm = (campaign) => {
    setSelectedCampaign(campaign);
    setNewCampaign({
      title: campaign.title,
      description: campaign.description,
      amountToBeRaised: campaign.amountToBeRaised,
      photo: null,
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
    setError('');
  };

  const handleError = (error) => {
    console.error('Error:', error.response?.data || error.message);
    setError('An error occurred. Please try again.');
  };

  const validateCampaign = (campaign) => {
    if (!campaign.title || !campaign.description || !campaign.amountToBeRaised) {
      setError('All fields must be filled out.');
      return false;
    }
    return true;
  };

  const createFormData = (campaign) => {
    const formData = new FormData();
    formData.append('title', campaign.title);
    formData.append('description', campaign.description);
    formData.append('amountToBeRaised', campaign.amountToBeRaised);
    if (campaign.photo) {
      formData.append('photo', campaign.photo);
    }
    return formData;
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-blue-600">Upcoming Campaigns Manager</h1>
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-500 transition"
          onClick={() => {
            resetForm();
            setShowForm(true);
            setEditMode(false);
          }}
        >
          Add New Campaign
        </button>
      </div>
      {error && <p className="text-red-500">{error}</p>}
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
              <tr key={campaign.id} className="border-b">
                <td className="py-3 px-5">{campaign.id}</td>
                <td className="py-3 px-5">{campaign.title}</td>
                <td className="py-3 px-5">
                  <img src={campaign.photo} alt={campaign.title} className="w-16 h-16 rounded-md object-cover" />
                </td>
                <td className="py-3 px-5">{campaign.description}</td>
                <td className="py-3 px-5">${campaign.amountToBeRaised}</td>
                <td className="py-3 px-5">
                  <button
                    className="bg-yellow-500 text-white px-4 py-1 rounded-lg mr-2 hover:bg-yellow-400 transition my-2"
                    onClick={() => openEditForm(campaign)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-400 transition"
                    onClick={() => handleDeleteCampaign(campaign.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showForm && (
        <div className="mt-6 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">{editMode ? 'Edit Campaign' : 'Add New Campaign'}</h2>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Title:</label>
            <input
              type="text"
              name="title"
              value={newCampaign.title}
              onChange={handleInputChange}
              className="border border-gray-300 p-2 w-full rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Description:</label>
            <textarea
              name="description"
              value={newCampaign.description}
              onChange={handleInputChange}
              className="border border-gray-300 p-2 w-full rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Amount to Be Raised:</label>
            <input
              type="number"
              name="amountToBeRaised"
              value={newCampaign.amountToBeRaised}
              onChange={handleInputChange}
              className="border border-gray-300 p-2 w-full rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Photo:</label>
            <input
              type="file"
              onChange={handleFileChange}
              className="border border-gray-300 p-2 w-full rounded-lg"
              required={!editMode} // Required only when adding a new campaign
            />
          </div>
          <div className="flex justify-end">
            <button
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-500 transition"
              onClick={editMode ? handleEditCampaign : handleCreateCampaign}
            >
              {editMode ? 'Update Campaign' : 'Create Campaign'}
            </button>
            <button
              className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg ml-2 hover:bg-gray-200 transition"
              onClick={resetForm}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpcomingCampaignManager;
