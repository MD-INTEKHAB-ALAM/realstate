"use client";
import React from "react";

const stats = [
  { value: "₹ 70,000 Cr+", label: "value of property sold" },
  { value: "₹ 125,000 Cr+", label: "Home loan disbursed" },
  { value: "2000+", label: "Top Developers" },
  { value: "150,000", label: "Projects across segments" },
  { value: "9", label: "Operations in Countries" },
  { value: "10 Lac+", label: "Active Listings" },
];

function IndiaLargestRealState() {
  return (
    <div className="max-w-7xl mx-auto bg-gray-800 text-white rounded-3xl p-8 my-12">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
        India’s Largest Real Estate Platform
      </h2>

      {/* Stats grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-gray-600 text-center">
        {stats.map((item, idx) => (
          <div key={idx} className="px-4 py-2">
            <div className="text-lg md:text-xl font-bold">{item.value}</div>
            <div className="text-sm text-gray-300">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IndiaLargestRealState;
