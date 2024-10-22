import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ title, description, amount, image }) => {
  const navigate = useNavigate();

  // Helper function to truncate the description to a fixed length
  const truncateDescription = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  // Function to handle "READ MORE" click
  const handleReadMore = () => {
    // Navigate to the Campaigns page (you can modify the path as needed)
    navigate("/campaigns");
  };

  return (
    <div className="flex flex-col bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300 ease-in-out">
      <img
        src={image}
        className="rounded-t-lg object-cover h-64 w-full"
        alt={title} // Alt text should reflect the title
      />
      <div className="p-6 bg-gray-50 rounded-b-lg flex-grow">
        <p className="text-sm text-gray-500 font-medium">
          To Be Raised:{" "}
          <span className="text-green-600 font-bold">
            ₹{amount ? Number(amount).toLocaleString() : "N/A"}
          </span>
        </p>
        <h2 className="text-xl font-semibold text-gray-800 mt-2">{title}</h2>
        {/* Truncate the description to 150 characters */}
        <p className="text-sm text-gray-600 mt-3">
          {truncateDescription(description, 150)} {/* Limit to 150 characters */}
        </p>
        <div className="mt-4">
          <button
            onClick={handleReadMore} // Call handleReadMore on click
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-full text-xs shadow-md hover:shadow-lg transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
          >
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
