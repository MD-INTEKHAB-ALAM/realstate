"use client";
import React from "react";
import Image from "next/image";

function Card({
  images,
  title,
  location,
  priceRange,
  description,
  badges = [],
  logo,
  units,
}) {
  return (
    <div className="flex border rounded-2xl shadow-sm bg-white overflow-hidden">
      {/* Left: Image */}
      <div className="relative w-64 h-56 flex-shrink-0">
        <Image
          src={images}
          alt={title}
          fill
          className="object-cover rounded-l-2xl"
        />
        {/* Overlay buttons */}
        <div className="absolute top-2 left-2 flex gap-2">
          <span className="bg-black/70 text-white text-xs px-2 py-1 rounded-md">
            11
          </span>
          <span className="bg-black/70 text-white text-xs px-2 py-1 rounded-md">
            Video
          </span>
        </div>
      </div>

      {/* Right: Info */}
      <div className="flex-1 p-4 flex flex-col">
        {/* Top Row */}
        <div className="flex justify-between items-start">
          <div>
            <div className="flex gap-2 mb-1">
              {badges.map((b, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 rounded-md font-medium text-gray-700"
                  style={{ backgroundColor: b.color }}
                >
                  {b.label}
                </span>
              ))}
            </div>
            <h2 className="text-lg font-bold text-black">{title}</h2>
            <p className="text-sm text-gray-600">{location}</p>
            <p className="text-purple-700 font-semibold mt-1">{priceRange}</p>
            <p className="text-sm text-gray-500 line-clamp-2">{description}</p>
          </div>
          {logo && (
            <Image
              src={logo}
              alt="developer logo"
              width={60}
              height={60}
              className="object-contain"
            />
          )}
        </div>

        {/* Units */}
        <div className="mt-3 border rounded-lg overflow-hidden">
          <div className="grid grid-cols-3 bg-gray-100 text-sm font-medium p-2 text-black">
            <span c>Unit</span>
            <span>Size</span>
            <span>Price</span>
          </div>
          {units.map((u, i) => (
            <div
              key={i}
              className="grid grid-cols-3 text-sm p-2 border-t last:border-b-0"
            >
              <span className="text-black">{u.type}</span>
              <span className="text-black">{u.size}</span>
              <span className="text-purple-700 font-semibold">{u.price}</span>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-4">
          <button className="flex-1 border border-green-600 text-green-600 py-2 rounded-lg font-medium">
            Whatsapp
          </button>
          <button className="flex-1 bg-green-600 text-white py-2 rounded-lg font-medium">
            Get a Call Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
