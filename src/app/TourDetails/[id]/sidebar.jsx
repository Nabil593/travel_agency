"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCalendarAlt, faUsers } from "@fortawesome/free-solid-svg-icons";

export default function BookingSidebar({ tour }) {
  const [date, setDate] = useState("");
  const [adult, setAdult] = useState(1);
  const [child, setChild] = useState(0);

  const totalPrice = adult * (tour.adultPrice || 0) + child * (tour.childPrice || 0);

  return (
    <aside className="w-full lg:w-[40%] xl:w-[30%] sticky top-24 border border-gray-200 rounded-xl p-5">
      <h3 className="text-xl font-semibold pb-4">Booking Details</h3>

      {/* Date Picker */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Date</label>
        <div className="relative">
          <FontAwesomeIcon
            icon={faCalendarAlt}
            className="absolute left-3 top-3 text-gray-400"
          />
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
          <FontAwesomeIcon
            icon={faUser}
            className="absolute left-3 top-3 text-gray-400"
          />
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
          <FontAwesomeIcon
            icon={faUsers}
            className="absolute left-3 top-3 text-gray-400"
          />
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
        className="w-full mt-5 bg-[#193555] text-white py-3 rounded-md font-semibold hover:opacity-90 transition"
      >
        Book Now
      </button>
    </aside>
  );
}
