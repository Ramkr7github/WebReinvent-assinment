
import React from 'react';

const ImageTextSection = () => {
  return (
    <div className="container mx-auto py-10 px-4 bg-indigo-400">
      <div className="flex flex-col md:flex-row items-center">
        

        {/* Text Section */}
        <div className="md:w-1/2 md:pl-8 mt-6 md:mt-0 text-center md:text-left">
        <h1 className="text-4xl font-bold mb-4">  Welcome </h1>
        <h1 className="text-4xl font-bold mb-4"> To the DashBoard!</h1>
          <a
            href="#"
            className="inline-block mt-4 px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg"
          >
            Learn More
          </a>
        </div>
        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src="https://webreinvent.com/images/hero-home-right.webp" 
            alt="Example"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageTextSection;
