"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";

export function Index() {
  return (
    <>
    {/* Hero */}
    <div className="hero h-screen min-h-screen flex justify-center items-center z-10">
        <div className="hero-content relative text-center">
            <h1 className="xl:text-8xl lg:text-7xl md:text-6xl text-4xl unbounded-font font-bold text-white">
                Find Your Best <br/> travels Package
            </h1>
            <p className="pt-3 text-[#ffffffb3] md:pb-10 pb-5">
                Planning for a trip? We will organize your trip with the best places best buget!
            </p>
            <button className="btn bg-white group text-[#193555] hover:bg-[#193555] font-bold px-6 w-auto py-4 rounded-full cursor-pointer transition-all duration-300">
                <a href="#" className="unbounded-font text-sm xl:text-shadow-md uppercase group-hover:text-white transition-colors duration-300 tracking-wider">
                    View all Tours
                </a>
            </button>
        </div>
    </div>
    </>
  )
};