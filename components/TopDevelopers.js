import React from 'react'
import HotsellingData from "@/utils/HotsellingData";
import HotSellingCard from './HotSellingCard';
import TopDeveloperCard from './TopDeveloperCard';
import { TopDevelopersData } from '@/utils/TopDevelopersData';

function TopDeveloper() {
  return (
    <div className="w-full min-h-[550px] px-4 bg-white-200 bg-gray-100 py-8 cursor-pointer">
      {/* Only this div is moved down */}
      <div className="max-w-6xl rounded-2xl shadow-md mx-auto p-6 bg-white mt-6">
        <h2 className="text-2xl font-bold px-3 py-2 text-black">
          Top Developers in India
        </h2>
        <p className="px-3 mb-6 text-gray-700">
          The top developers in India offer expertise, high-quality construction, and a proven track record of timely delivery. Their projects offer a mix of ready-to-move homes, under-construction units, and new launches across key cities.
        </p>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
            {TopDevelopersData.map((dev, idx) => (
                <TopDeveloperCard
                key={idx}
                logo={dev.logo}
                name={dev.name}
                totalProjects={dev.totalProjects}
                experience={dev.experience}
                stats={dev.stats}
                />
            ))}
        </div>

      </div>
    </div>
  );
}

export default TopDeveloper;
