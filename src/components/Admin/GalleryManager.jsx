import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE_URL = "https://ngo-backend-om-pagariyas-projects.vercel.app/gallery";

const GalleryManager = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [newItem, setNewItem] = useState({
    title: '',
    image: null,
  });
  const [editMode, setEditMode] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); // For controlling the modal

  useEffect(() => {
    fetchGalleryItems();
  }, []);

  const fetchGalleryItems = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(API_BASE_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setGalleryItems(response.data);
    } catch (error) {
      handleError(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setNewItem((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  const handleCreateItem = async () => {
    if (!validateItem(newItem)) return;

    const formData = createFormData(newItem);
    try {
      const token = localStorage.getItem('token');
      await axios.post(`${API_BASE_URL}/create`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      fetchGalleryItems();
      resetForm();
      closeModal(); // Close modal after adding
    } catch (error) {
      handleError(error);
    }
  };

  const handleEditItem = async () => {
    if (!validateItem(newItem)) return;

    const formData = createFormData(newItem);
    try {
      const token = localStorage.getItem('token');
      await axios.patch(`${API_BASE_URL}/${selectedItem.id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      fetchGalleryItems();
      resetForm();
      setEditMode(false);
      closeModal(); // Close modal after editing
    } catch (error) {
      handleError(error);
    }
  };

  const handleDeleteItem = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`${API_BASE_URL}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchGalleryItems();
    } catch (error) {
      handleError(error);
    }
  };

  const openEditForm = (item) => {
    setSelectedItem(item);
    setNewItem({
      title: item.title,
      image: null,
    });
    setEditMode(true);
    openModal(); // Open modal for editing
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    resetForm();
  };

  const resetForm = () => {
    setNewItem({
      title: '',
      image: null,
    });
    setError('');
    setEditMode(false);
  };

  const handleError = (error) => {
    console.error('Error:', error.response?.data || error.message);
    setError('An error occurred. Please try again.');
  };

  const validateItem = (item) => {
    if (!item.title) {
      setError('Title is required.');
      return false;
    }
    return true;
  };

  const createFormData = (item) => {
    const formData = new FormData();
    formData.append('title', item.title);
    if (item.image) {
      formData.append('image', item.image);
    }
    return formData;
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Gallery Manager</h1>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      {/* Add Item Button */}
      <button
        onClick={openModal}
        className="bg-green-500 text-white py-2 px-4 rounded-lg mb-6"
      >
        Add New Item
      </button>

      {/* Modal for Adding/Editing */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-1/3">
            <h2 className="text-xl font-bold mb-4">
              {editMode ? 'Edit Item' : 'Add New Item'}
            </h2>

            <input
              type="text"
              name="title"
              value={newItem.title}
              onChange={handleInputChange}
              placeholder="Title"
              className="border border-gray-300 rounded-lg p-2 mb-4 w-full"
            />
            <input
              type="file"
              onChange={handleFileChange}
              className="border border-gray-300 rounded-lg p-2 mb-4 w-full"
            />

            <div className="flex justify-end">
              {editMode ? (
                <button
                  onClick={handleEditItem}
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg mr-2"
                >
                  Update
                </button>
              ) : (
                <button
                  onClick={handleCreateItem}
                  className="bg-green-500 text-white py-2 px-4 rounded-lg mr-2"
                >
                  Add
                </button>
              )}
              <button
                onClick={closeModal}
                className="bg-gray-500 text-white py-2 px-4 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Gallery Items List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {galleryItems.map((item) => (
          <div key={item.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            {/* Wrapper to maintain 4:3 aspect ratio */}
            <div className="relative pb-[75%] bg-gray-200"> {/* pb-[75%] gives the 4:3 ratio */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <button
                onClick={() => openEditForm(item)}
                className="bg-blue-500 text-white py-1 px-3 rounded-lg mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteItem(item.id)}
                className="bg-red-500 text-white py-1 px-3 rounded-lg"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryManager;
