import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const API_BASE_URL = "https://ngo-backend-om-pagariyas-projects.vercel.app/aboutus";

const AboutUsManager = () => {
    const { id } = useParams(); // Get ID from URL
    const navigate = useNavigate();
    const [data, setData] = useState({
        title: '',
        description: '',
        image: '',
    });
    const [error, setError] = useState('');
    const [newImage, setNewImage] = useState(null); // State for new image upload

    useEffect(() => {
        fetchData();
    }, [id]);

    const fetchData = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(`${API_BASE_URL}/getaboutus/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setData(response.data);
        } catch (error) {
            handleError(error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e) => {
        setNewImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateData(data)) return;

        const formData = createFormData(data);

        try {
            const token = localStorage.getItem('token');
            await axios.patch(`${API_BASE_URL}/${id}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                },
            });
            // Clear the new image upload section immediately after successful update
            setNewImage(null);
            // Refresh the page to get updated data
            window.location.reload(); // Refresh the page
        } catch (error) {
            handleError(error);
        }
    };

    const handleError = (error) => {
        console.error('Error:', error.response?.data || error.message);
        setError('An error occurred. Please try again.');
    };

    const validateData = (data) => {
        if (!data.title || !data.description) {
            setError('All fields must be filled out.');
            return false;
        }
        return true;
    };

    const createFormData = (data) => {
        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('description', data.description);
        if (newImage) {
            formData.append('image', newImage);
        }
        return formData;
    };

    return (
        <div className="w-full mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">
                Edit {id === '5' ? 'About Us' : id === '2' ? 'Mission' : id === '3' ? 'Vision' : 'Impact'}
            </h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={data.title}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                    />
                </div>
                <div className="flex mb-4">
                    <div className="flex-1 mr-2">
                        <label className="block text-gray-700">Description</label>
                        <textarea
                            name="description"
                            value={data.description}
                            onChange={handleChange}
                            rows="10" // Set the rows to allow for 10 lines
                            className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                        ></textarea>
                    </div>
                    <div className="w-1/3 ml-2">
                        <label className="block text-gray-700">Current Image</label>
                        {data.image && (
                            <img
                                src={data.image}
                                alt="Current"
                                className="mt-2 mb-2 w-full h-48 object-cover rounded-md"
                            />
                        )}
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Upload New Image</label>
                    <input
                        type="file"
                        onChange={handleImageChange}
                        className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-700 transition duration-300"
                >
                    Save
                </button>
            </form>
        </div>
    );
};

export default AboutUsManager;
