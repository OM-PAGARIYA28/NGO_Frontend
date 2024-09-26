import React from "react";

const Card = ({ title, description, amount, image }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300 ease-in-out">
            {/* Fixed size for the image */}
            <div className="h-64">
                <img
                    src={image}
                    className="w-full h-full object-cover rounded-t-lg"
                    alt="Campaign"
                />
            </div>

            {/* Content Area */}
            <div className="flex flex-col justify-between h-64 p-6 bg-gray-50 rounded-b-lg">
                {/* Top section: Amount, Title, and Description */}
                <div>
                    <p className="text-sm text-gray-500 font-medium">
                        To Be Raised: <span className="text-green-600 font-bold">₹{amount.toLocaleString()}</span>
                    </p>
                    <h2 className="text-xl font-semibold text-gray-800 mt-2">
                        {title}
                    </h2>
                    {/* Description with Tailwind line clamping */}
                    <p className="text-sm text-gray-600 mt-3 line-clamp-5">
                        {description}
                    </p>
                </div>

                {/* Bottom Section: Read More button with consistent placement */}
                <div className="mt-auto">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-full text-xs shadow-md hover:shadow-lg transition duration-200 ease-in-out">
                        READ MORE
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
