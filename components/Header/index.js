"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/assets/companylogo/Square_Yards.jpg";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

function Header() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const NavLinks = [
    { id: 0, label: "About Us", href: "/about" },
    { id: 1, label: "Services", href: "/services" },
    { id: 2, label: "Contact Us", href: "/contact" },
  ];

  function handleClick() {
    router.push("/");
  }

  return (
    <header className="bg-black sticky top-0 z-50 shadow-md">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-10 h-[55px]">
        {/* Logo */}
        <div
          className="flex items-center cursor-pointer"
          onClick={handleClick}
        >
          <Image
            src={Logo}
            alt="Logo"
            width={150}
            height={45}
            className="h-[40px] w-auto"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          {NavLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className="text-sm text-white hover:text-blue-400 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white text-2xl md:hidden"
        >
          {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-gray-700">
          {NavLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className="block px-4 py-3 text-sm text-white hover:bg-gray-800"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

export default Header;
