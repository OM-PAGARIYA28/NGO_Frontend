import React from 'react'

const Hero = ({title, imageUrl}) => {
    return (
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 pt-24 lg:pt-32 pb-32 lg:pb-24 container mx-auto">
            <div className="flex flex-col justify-center gap-12 lg:gap-20 lg:max-w-2xl">
                <h1 className="text-4xl lg:text-5xl font-extrabold tracking-wider lg:tracking-wide">
                    {title}
                </h1>
                <p className="text-lg lg:text-xl text-gray-900 tracking-wider">
                    At Happy Day Foundation, we believe that everyone deserves a chance to experience true joy. Our mission is to create brighter days for those in need within our community. We work tirelessly to provide support, resources, and opportunities that help individuals and families overcome challenges and reach their full potential.
                </p>
            </div>
            <div className="flex justify-center items-center relative">
                <img
                    src={imageUrl}
                    alt="Healthcare"
                    className="max-w-lg w-full h-auto"
                />
                <span className="absolute right-[-300px] top-[-200px] z-[-1] hidden lg:block">
                    {/* Add decorative SVG or image if needed */}
                </span>
            </div>
        </div>
    )
}

export default Hero;
