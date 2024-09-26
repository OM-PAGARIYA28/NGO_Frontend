import React from "react";

const Card = ({ title, description, amount, image }) => {
  // Helper function to truncate the description to a fixed length
  const truncateDescription = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <div className="grid grid-cols-1 bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300 ease-in-out">
      <img
        src={image}
        className="rounded-t-lg object-cover h-64 w-full"
        alt={title} // Alt text should reflect the title
      />
      <div className="p-6 bg-gray-50 rounded-b-lg">
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
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-full text-xs mt-4 shadow-md hover:shadow-lg transition duration-200 ease-in-out">
          READ MORE
        </button>
      </div>
    </div>
  );
};

export default Card;
