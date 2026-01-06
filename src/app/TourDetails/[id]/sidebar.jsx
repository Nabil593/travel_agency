"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCalendarAlt, faUsers, faLocationDot, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import toursData from "../../ToursData.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import Image from "next/image";

export default function BookingSidebar({ tour }) {
  const [date, setDate] = useState("");
  const [adult, setAdult] = useState(1);
  const [child, setChild] = useState(0);
  const [showModal, setShowModal] = useState(false); // For pop-up

  const totalPrice = adult * (tour.adultPrice || 0) + child * (tour.childPrice || 0);

    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

   const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can send data to server or API
    console.log({ name, email, phone, date, adult, child, notes, totalPrice });
    alert("Booking submitted! 🎉");
    setShowModal(false);
    // Reset form (optional)
    setName(""); setEmail(""); setPhone(""); setDate(""); setAdult(1); setChild(0); setNotes("");
  };

  return (
    <aside className="w-full lg:w-[40%] xl:w-[30%] sticky top-24 border border-gray-200 rounded-xl p-5">
      <h3 className="text-xl font-semibold pb-4">Booking Details</h3>

      {/* Date Picker */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Date</label>
        <div className="relative">
          <FontAwesomeIcon icon={faCalendarAlt} className="absolute left-3 top-3 text-gray-400" />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border rounded-md pl-10 pr-3 py-2 outline-none"
          />
        </div>
      </div>

      {/* Adult */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Adult</label>
        <div className="relative">
          <FontAwesomeIcon icon={faUser} className="absolute left-3 top-3 text-gray-400" />
          <input
            type="number"
            min="1"
            value={adult}
            onChange={(e) => setAdult(Number(e.target.value))}
            className="w-full border rounded-md pl-10 pr-3 py-2 outline-none"
          />
        </div>
      </div>

      {/* Child */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Child</label>
        <div className="relative">
          <FontAwesomeIcon icon={faUsers} className="absolute left-3 top-3 text-gray-400" />
          <input
            type="number"
            min="0"
            value={child}
            onChange={(e) => setChild(Number(e.target.value))}
            className="w-full border rounded-md pl-10 pr-3 py-2 outline-none"
          />
        </div>
      </div>

      {/* Book Button */}
      <button
        type="button"
        onClick={() => setShowModal(true)}
        className="w-full mt-5 mb-10 bg-[#193555] text-white py-3 rounded-md font-semibold hover:opacity-90 transition"
      >
        Book Now
      </button>

      {/* Modal Form */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-500">
          <div className="bg-white rounded-xl p-6 w-[95%] max-w-lg relative">
            <h3 className="text-xl font-semibold mb-4">Complete Your Booking</h3>
            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Name */}
              <div className="relative">
                <FontAwesomeIcon icon={faUser} className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border rounded-md pl-10 pr-3 py-2 outline-none"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <FontAwesomeIcon icon={faEnvelope} className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border rounded-md pl-10 pr-3 py-2 outline-none"
                />
              </div>

              {/* Phone */}
              <div className="relative">
                <FontAwesomeIcon icon={faPhone} className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="tel"
                  required
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border rounded-md pl-10 pr-3 py-2 outline-none"
                />
              </div>

              {/* Date */}
              <div className="relative">
                <FontAwesomeIcon icon={faCalendarAlt} className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full border rounded-md pl-10 pr-3 py-2 outline-none"
                />
              </div>

              {/* Adults & Children */}
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <FontAwesomeIcon icon={faUser} className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="number"
                    min="1"
                    required
                    value={adult}
                    onChange={(e) => setAdult(Number(e.target.value))}
                    className="w-full border rounded-md pl-10 pr-3 py-2 outline-none"
                    placeholder="Adults"
                  />
                </div>
                <div className="relative flex-1">
                  <FontAwesomeIcon icon={faUsers} className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="number"
                    min="0"
                    required
                    value={child}
                    onChange={(e) => setChild(Number(e.target.value))}
                    className="w-full border rounded-md pl-10 pr-3 py-2 outline-none"
                    placeholder="Children"
                  />
                </div>
              </div>

              {/* Notes */}
              <textarea
                placeholder="Special requests / notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full border rounded-md p-3 outline-none"
              ></textarea>



              {/* Buttons */}
              <div className="flex justify-end gap-3 mt-2">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#193555] text-white rounded-md hover:opacity-90"
                >
                  Confirm Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      )}


      {/* Recommendation Tour */}
      <h4 className="text-[20px] font-semibold mt-5 pb-2">Recommendation Tours</h4>

      <Swiper spaceBetween={20} slidesPerView={1} pagination={{ clickable: true }} navigation className="travel-wrapper">
        {toursData.map((tour) => (
          <SwiperSlide key={tour.id}>
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
                    <h2 className="text-xl font-semibold unbounded-font pb-1">{tour.title}</h2>
                    <p className="text-[#ffffff] text-xs flex items-center gap-1">
                      <FontAwesomeIcon icon={faLocationDot} />
                      {tour.location}
                    </p>
                  </div>
                  <h4 className="text-xl font-semibold unbounded-font text-right">
                    <span className="text-[#ffffff91] text-xs font-normal">Start From</span> <br />
                    {tour.Price}
                  </h4>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </aside>
  );
}
