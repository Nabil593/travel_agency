import { notFound } from "next/navigation";
import toursData from "../../ToursData.json";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import BookingSidebar from "./sidebar";

export default async function Page({ params }) {
  const { id } = await params;

  const tour = toursData.find((t) => t.id.toString() === id);

  if (!tour) return notFound();

  return (
    <>
      {/* Banner */}
      <section className="section-banner px-[2%] sm:px-[8%] lg:px-[12%] py-[50px] lg:py-[90px] min-h-[450px] lg:min-h-[500px] relative">
        <h2 className="text-4xl text-white text-center unbounded-font">
          {tour.title}
        </h2>

        <ul className="text-white flex items-center gap-6 justify-center mt-4">
          <li className="text-sm">
            <Link href="/">Home</Link>
          </li>
          <li className="text-sm relative">
            <FontAwesomeIcon
              icon={faAngleRight}
              className="absolute -left-4 top-1"
            />
            <span>Tour Details</span>
          </li>
        </ul>
      </section>

      {/* Content */}
      <section className="tour-details-container flex flex-col lg:flex-row gap-6 px-[2%] sm:px-[8%] lg:px-[12%] py-[50px]">
        
        {/* Left Content */}
        <div className="w-full lg:w-[60%] xl:w-[70%]">
          {/* Image */}
          <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
            <Image
            src={tour.MainImage}
    alt="Tour"
    fill
    className="object-cover"
    priority
            />
          </div>

          {/* Info */}
          <div className="pt-5">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold">
                  {tour.title}
                </h2>
                <p className="text-gray-500 text-sm mt-1 flex items-center gap-2">
                  <FontAwesomeIcon icon={faLocationDot} />
                  {tour.location}
                </p>
              </div>

              <div className="text-right">
                <p className="text-xs text-gray-500">Start From</p>
                <p className="text-xl font-bold unbounded-font">
                  {tour.Price}
                </p>
              </div>
            </div>

            {/* Description */}
            <h4 className="text-xl font-semibold pt-6 pb-2">
              Tour Description
            </h4>
            <p className="text-gray-500 text-sm leading-6">
              This is a wonderful trip to {tour.title} located in{" "}
              {tour.location}. Enjoy culture, food, and breathtaking views.
              Prices start from {tour.Price}.
            </p>
            <p className='text-[#94a3b8] text-sm pb-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae repudiandae deleniti corporis animi iste sunt sint perferendis officia dolores! Ducimus est ipsum eaque officia. Amet corporis facilis eos quos! Atque.
            </p>

            {/* Comment Form */}
            <h4 className="text-xl font-semibold pt-8 pb-4">
              Leave a Comment
            </h4>

            <form className="space-y-4">
              <div className="flex flex-col lg:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full border rounded-md px-4 py-2 outline-none"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full border rounded-md px-4 py-2 outline-none"
                />
              </div>

              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full border rounded-md px-4 py-2 outline-none"
                required
              />

              <button
                type="submit"
                className="w-full bg-[#193555] text-white py-3 rounded-md font-semibold hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Sidebar */}
        <BookingSidebar tour={tour} />
      </section>
    </>
  );
}
