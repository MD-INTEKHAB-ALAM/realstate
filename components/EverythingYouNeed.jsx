"use client";
import React, { useState } from "react";
import { forBuyers, forOwners, forTenants } from "@/utils/EverythingYouNeedData";
import EverythingYouNeedCard from "./EverythingYouNeedCard";

function EverythingYouNeed() {
  const [card, setCard] = useState(forBuyers);
  const [activeTab, setActiveTab] = useState("forBuyers");

  function handleCard(tab) {
    setActiveTab(tab);
    switch (tab) {
      case "forBuyers":
        setCard(forBuyers);
        break;
      case "forOwners":
        setCard(forOwners);
        break;
      case "forTenants":
        setCard(forTenants);
        break;
      default:
        setCard([]);
    }
  }

  const tabs = [
    { key: "forBuyers", label: "For Buyers" },
    { key: "forOwners", label: "For Owners" },
    { key: "forTenants", label: "For Tenants" },
  ];

  return (
    <div className="max-w-6xl mx-3 md:mx-auto mt-6 md:-mt-6 rounded-2xl border border-gray-300 mb-12 ">
      <h1 className="text-2xl font-bold text-gray-800 mb-4 ml-4 mt-3">
        Everything You Need at One Place
      </h1>

      {/* Tabs */}
      <div className="flex mb-0 cursor-pointer ml-10 mt-8">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => handleCard(tab.key)}
            className={`
              px-4 py-1 text-md font-large transition-colors cursor-pointer ml-3
              ${activeTab === tab.key
                ? "bg-white text-blue-600 border-t border-l border-r rounded-t-md"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-200 rounded-t-xl"}
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Card container */}
      <div className="-mt-[1px] mx-5">
        <EverythingYouNeedCard cardItem={card} />
      </div>
    </div>
  );
}

export default EverythingYouNeed;
