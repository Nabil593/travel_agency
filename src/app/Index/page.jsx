"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import toursData from "../ToursData.json";
import { useState } from "react";
import testimonials from "../testimonials";
import About01 from "../../../public/Images/about-01.webp";
import About02 from "../../../public/Images/about-02.webp";
import About03 from "../../../public/Images/about-03.webp";
import Author01 from "../../../public/Images/author-01.webp";
import Author02 from "../../../public/Images/author-02.webp";
import Author03 from "../../../public/Images/author-03.webp";
import Author04 from "../../../public/Images/author-04.webp";

import BlogPage01 from "../../app/assest/Blog-Page-01.webp";
import BlogPage02 from "../../app/assest/Blog-Page-02.webp";
import BlogPage03 from "../../app/assest/Blog-Page-03.webp";
import CountUp from "../Components/CountUp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export function Index() {
  const [selectedTour, setSelectedTour] = useState(null);

  return (
    <>
      {/* Hero */}
      <div className="hero h-screen min-h-screen flex justify-center items-center z-10">
        <div className="hero-content relative text-center">
          <h1 className="xl:text-8xl lg:text-7xl md:text-6xl text-4xl unbounded-font font-bold text-white">
            Find Your Best <br /> travels Package
          </h1>
          <p className="pt-3 text-[#ffffffb3] md:pb-10 pb-5">
            Planning for a trip? We will organize your trip with the best places
            best buget!
          </p>
          <button className="btn bg-white group text-[#193555] hover:bg-[#193555] font-bold px-6 w-auto py-4 rounded-full cursor-pointer transition-all duration-300">
            <a
              href="#"
              className="unbounded-font text-sm xl:text-shadow-md uppercase group-hover:text-white transition-colors duration-300 tracking-wider"
            >
              View all Tours
            </a>
          </button>
        </div>
      </div>

      {/* Tours */}
      <div className="travel px-[2%] sm:px-[8%] lg:px-[12%] py-[80px] lg:py-[120px] flex flex-col gap-10 lg:gap-14">
        <div className="travel-content text-center">
          <h1 className="unbounded-font text-4xl font-semibold pb-3">
            Find Out The Best Travel Choice in Asia{" "}
          </h1>
          <p className="w-[60%] mx-auto text-[#193555]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem itaque.
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
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className="travel-content absolute bottom-0 left-0 flex justify-between items-center w-full p-3 z-10 text-white bg-gradient-to-t from-black/70 to-transparent">
                  <div>
                    <h2 className="text-xl font-semibold unbounded-font pb-1 ">
                      {tour.title}
                    </h2>
                    <p className="text-[#ffffff] text-xs flex items-center gap-1">
                      <FontAwesomeIcon icon={faLocationDot} />
                      {tour.location}
                    </p>
                  </div>
                  <h4 className="text-xl font-semibold unbounded-font text-right">
                    <span className="text-[#ffffff91] text-xs font-normal">
                      Start From
                    </span>{" "}
                    <br />
                    {tour.Price}
                  </h4>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="about py-[50px] lg:py-[90px] px-[2%] sm:px-[8%] lg:px-[12%]">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* LEFT CONTENT */}
          <div className="lg:w-1/2 relative">
            <div className="about-heading max-w-xl">
              <h1 className="text-2xl xl:text-4xl font-bold mb-4 leading-snug">
                Begin Your New Life Experience With Exploring New Destination
              </h1>

              <p className="mb-4 text-[#7a7a7a] text-sm leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                perspiciatis vel repellat dolore beatae nulla ratione
                laudantium.
              </p>

              <p className="text-[#7a7a7a] text-sm leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                vitae illo corrupti nam possimus distinctio.
              </p>
            </div>

            {/* LEFT IMAGE */}
            <div className="hidden lg:block mt-12 relative w-full max-w-[545px] h-[515px] rounded-2xl overflow-hidden">
              <Image
                src={About01}
                alt="About01"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="lg:w-1/2 flex flex-col gap-10">
            {/* CUSTOMER CARD */}
            <div className="bg-black text-white p-6 rounded-2xl flex flex-col md:flex-row gap-8 items-center">
              <div className="text-center">
                <div className="flex -space-x-3">
                  {[Author01, Author02, Author03, Author04].map((img, i) => (
                    <Image
                      key={i}
                      src={img}
                      alt="Author"
                      className="w-12 h-12 rounded-full border-2 border-black"
                    />
                  ))}
                </div>
                <CountUp end={1200} duration={2500} />
              </div>

              <div>
                <h3 className="text-xl mb-2">
                  Customer Love The Tour Experiences
                </h3>
                <p className="text-[#7a7a7a] text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
              </div>
            </div>

            {/* BIG IMAGE */}
            <Image
              src={About02}
              alt="About02"
              className="rounded-2xl h-[300px] w-full object-cover"
            />

            {/* IMAGE + CTA */}
            <div className="flex flex-col sm:flex-row gap-5">
              <Image
                src={About03}
                alt="About03"
                className="rounded-2xl h-[300px] sm:w-1/2 w-full object-cover"
              />

              <div className="bg-black text-white p-6 rounded-2xl sm:w-[300px] w-full flex items-center">
                <div>
                  <h3 className="text-xl mb-3">Join Our Asian Travel Trip</h3>
                  <p className="text-[#7a7a7a] text-sm leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="testimonials bg-[#0e0700] px-[2%] sm:px-[8%] lg:px-[12%] py-[50px] lg:py-[90px]">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between gap-6 pb-10">
          <h2 className="lg:w-1/2 text-white text-4xl leading-tight unbounded-font">
            What Our Customers Say About Us?
          </h2>

          <div className="lg:w-1/2">
            <p className="text-[#ffffff91] pb-5 text-sm">
              Real experiences from our happy travelers around the world.
            </p>

            <button className="bg-white group text-[#193555] hover:bg-[#193555] font-bold px-6 py-4 rounded-full transition-all duration-300">
              <span className="unbounded-font text-sm uppercase group-hover:text-white tracking-wider">
                Learn More
              </span>
            </button>
          </div>
        </div>

        {/* Swiper */}
        <Swiper
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#1a120a] p-6 rounded-2xl h-full flex flex-col gap-4 border border-[#ffffff14] hover:border-white transition-all duration-300">
                <p className="text-[#ffffffb3] text-sm leading-relaxed">
                  “{item.review}”
                </p>

                <div className="flex items-center gap-4 pt-4">
                  <img
                    src={item.image.src}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-white font-semibold text-sm">
                      {item.name}
                    </h4>
                    <span className="text-[#ffffff91] text-xs">
                      {item.role}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
