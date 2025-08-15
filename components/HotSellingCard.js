import React from "react";
import Image from "next/image";

function HotSellingCard({ imageSrc, title, location, price }) {
  return (
    <div className="w-[260px] h-[275px] rounded-lg shadow-lg overflow-hidden border border-gray-200 bg-white cursor-pointer">
      {/* Image section (65% height) */}
      <div className="h-[65%] relative transform transition-transform duration-300 hover:scale-105">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>

      <div className="p-4 flex flex-col justify-between h-[35%]">
        <h2 className="font-semibold text-lg text-gray-900">{title}</h2>
        <p className="text-sm text-gray-500">{location}</p>
        <p className="text-md font-semibold text-purple-600">{price}</p>
      </div>
    </div>
  );
}

export default HotSellingCard;
