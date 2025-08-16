import React from 'react'
import HotsellingData from "@/utils/HotsellingData";
import HotSellingCard from './HotSellingCard';

function HotSelling() {
  return (
    <div className="w-full min-h-[550px] px-4 bg-white-200">
      {/* Only this div is moved down */}
      <div className="max-w-6xl rounded-2xl shadow-md mx-auto p-6 bg-white mt-12">
        <h2 className="text-2xl font-bold px-3 py-2 text-black">
          Hot Selling Real Estate Projects in India
        </h2>
        <p className="px-3 mb-6 text-gray-700">
          A handpicked collection of the country’s most in-demand residential developments. 
          These properties, from modern apartments to premium villas, offer unmatched value 
          in top cities with ideal locations, smart amenities, and trusted builders.
        </p>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 place-items-center">
          {HotsellingData.map((item, index) => (
            <HotSellingCard
              key={index}
              slug={item.slug}
              title={item.title}
              location={item.location}
              price={item.price}
              imageSrc={item.imageSrc}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HotSelling;
