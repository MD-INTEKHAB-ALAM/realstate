"use client";
import React from 'react'
import Image from 'next/image';
import Logo from "@/assets/companylogo/Square_Yards.jpg";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
function Header() {
    const router = useRouter();
    const NavLinks = [
        {id:0, label:"About Us",href : "/about"},
        {id:1, label:"Services",href : "/services"},
        {id:2, label:"Contact Us",href : "/contact"},
    ]

    function handleClick(e) {
        router.push('/');
    }
    return (
        <div className="flex justify-between bg-black min-h-[35px] sticky top-0 z-50">
            <div className="w-[305px] h-[45px] my-auto ml-10 overflow-hidden cursor-pointer" onClick={handleClick}>
                <Image className="w-[50px] h-[50px] text-white" src={Logo} alt="Logo" width={205} height={65} />
            </div>
            <div className="flex flex-row">
            {NavLinks.map((link,index) => {
                return (
                <div key={index} className="p-3 text-xs text-white">
                    <Link href={link.href} key={index}>
                    {link.label}</Link>
                </div>
                )
            })}
            </div>
        </div>
    )
}

export default Header