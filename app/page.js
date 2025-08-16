"use client";
import Image from "next/image";
import { FaHome, FaBed, FaUser  } from "react-icons/fa";
import { IoMdPricetag } from "react-icons/io";
import { BiBuildings } from "react-icons/bi";
import { FaMapLocationDot, FaShop  } from "react-icons/fa6";
import { useEffect, useState,useRef} from "react";
import HotSelling from "@/components/HotSelling";
import TopDeveloper from "@/components/TopDevelopers";
import EverythingYouNeed from "@/components/EverythingYouNeed";
import IndiaLargestRealState from "@/components/IndiaLargestRealEstate";
import CardList from "@/components/CardList";
export default function Home() {
  const [value,setValue] = useState("");
  const countRef = useRef(1);

  const realStateOptions = [
    {id:0, label: "Buy", icon: <FaHome />},
    {id:1, label: "Rental", icon: <IoMdPricetag />},
    {id:2, label: "Projects", icon: <BiBuildings />},
    {id:3, label: "PG/Hostels", icon: <FaBed />},
    {id:4, label: "Plot & Land", icon: <FaMapLocationDot />},
    {id:5, label: "Commercial", icon: <FaShop />},
    {id:6, label: "Agents", icon: <FaUser />}
  ]

  const termsOptions = [
    {id:0,value:"Transactions"},
    {id:1,value:"Financing"},
    {id:2,value:"Interiors"},
    {id:3,value:"Property Management"},
    {id:4,value:"Site Visits"},
  ]

  useEffect(()=> {
    let timer = setInterval(()=> {
       setValue(termsOptions[countRef.current].value);
       countRef.current = (countRef.current + 1)%5;

    },2000);
    return ()=> clearInterval(timer);
  },[])

  return (
  <div className="w-ful">
    <div className="w-full h-[550px] bg-[linear-gradient(to_bottom,#050C77_0%,#003366_50%,#005F56_100%)] relative">
      <div className="mx-auto w-full absolute top-0 mt-30">
        <h1 className="text-center text-3xl p-4 font-bold">Real Estate Made Real Easy</h1>
        <p className="text-center text-lg  absoulute top-[100px]">We’ve got you covered ! From finding the perfect property to
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent font-extrabold">
          {" " + value}
          </span>
        </p>
      </div>

      <div className="flex flex-row gap-4 w-[900px] absolute bottom-65 left-1/2 -translate-x-1/2">
        {realStateOptions.map((realState, index) => (
          <div
            key={index}
           className="flex flex-row items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >
            <span className="text-xl text-gray-700 flex-shrink-0">{realState.icon}</span>
            <span className="text-sm font-medium text-gray-700">{realState.label}</span>
          </div>
        ))}
      </div>
  </div>
      <HotSelling/>
      <EverythingYouNeed/>
      <TopDeveloper/>
      <IndiaLargestRealState/>
    </div>
  );
}
         