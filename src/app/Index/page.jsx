"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import toursData from '../ToursData.json';
import { useState } from "react";

export function Index() {

    const  [selectedTour, setSelectedTour] = useState(null);

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


    {/* Tours */}
    <div className="travel px-[2%] sm:px-[8%] lg:px-[12%] py-[80px] lg:py-[120px] flex flex-col gap-10 lg:gap-14">
        <div className="travel-content text-center">
            <h1 className="unbounded-font text-4xl font-semibold pb-3">Find Out The Best Travel Choice in Asia </h1>
            <p className="w-[60%] mx-auto text-[#193555]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem itaque.
            </p>
        </div>
        <div className="travel-wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 ">
            {toursData.map((tour) => (
                <Link href={`/TourDetails/${tour.id}`} key={tour.id}>
                    <div className="travel-item rounded-xl overflow-hidden relative group transition-all duration-300">
                        <Image 
                        src={tour.Images}
                        width={400}
                        height={300}
                        alt={tour.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                    </div>
                </Link>
            ))}
        </div>
    </div>
    </>
  )
};