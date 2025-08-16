import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

function TopDeveloperCard({logo, name, totalProjects, experience, stats }) {
  const router = useRouter();
  function handleClick() {
    router.push('/property');
  }
  return (
    <div className="w-full max-w-[300px] h-full rounded-xl border border-gray-400 shadow-sm bg-white p-4 flex flex-col">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 flex-shrink-0 border border-gray-400 rounded-lg overflow-hidden flex items-center justify-center bg-gray-50">
          <Image src={logo} alt="logo" />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-600">{name}</h2>
          <div className="flex space-x-6 mt-1">
            <div>
              <p className="text-base font-semibold text-gray-600">{totalProjects}</p>
              <p className="text-xs text-gray-800">Total Projects</p>
            </div>
            <div>
              <p className="text-base font-semibold text-gray-600">{experience}</p>
              <p className="text-xs text-gray-800">Experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t my-4" />

      {/* Stats */}
      <div className="space-y-3 mt-auto">
        {stats.map((item, idx) => (
          <div
            key={idx}
            onClick={handleClick} 
            className="flex justify-between items-center border rounded-lg px-4 py-2 cursor-pointer hover:bg-gray-50 transition"
          >
            <span className="text-sm font-medium text-black">{item.label}</span>
            <span className="text-sm text-gray-600">{item.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopDeveloperCard;
