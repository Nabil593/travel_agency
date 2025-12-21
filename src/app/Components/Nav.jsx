"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faUser, faBars, faTimes, faL, faLock } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faFlickr } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Nav() {

    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 80);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    },[])


  return (
    <nav className={`navber fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${isScrolled ? "shadow-md bg-white py-3 scrolled" : "py-0"}`}>

        {/* Nav top (hidden on scroll with transition) */}
        <div className={`nav-top w-full flex items-center justify-between gap-3 px-[2%] sm:px-[8%] lg:px-[12%] overflow-hidden transition-all duration-500 ease-in-out ${isScrolled ? "max-h-0 opacity-0 py-0" : "max-h-[200px] opacity-100 py-3"}`}>
            <ul className="hidden lg:flex items-center gap-3 text-[#727272]">
                <li className="text-sm ">
                    <FontAwesomeIcon icon={faPhone} className="pr-1 text-[#727272]"/>
                    <span>+91 54 0352 3524</span>
                </li>

                <li className="text-sm ">
                    <FontAwesomeIcon icon={faEnvelope} className="pr-1 text-[#8192a0]"/>
                    <span>booking@travel.com</span>
                </li>
            </ul>



            <div className="flex items-center justify-between lg:justify-center gap-3 text-[#727272] w-full lg:w-auto">
                <ul className="flex items-center gap-3">
                    <li><FontAwesomeIcon icon={faFacebook} className="text-[#8192a0]"/></li>
                    <li><FontAwesomeIcon icon={faFlickr} className="text-[#8192a0]"/></li>
                    <li><FontAwesomeIcon icon={faXTwitter} className="text-[#8192a0]"/></li>
                </ul>
                <ul className="flex items-center gap-4 ps-3">
                    <li className="lg:text-md text-xm cursor-pointer">
                         <FontAwesomeIcon icon={faLock} className="text-[#8192a0]"/>
                        <span>Login</span>
                    </li>
                    <li className="lg:text-md text-xm cursor-pointer">
                        <FontAwesomeIcon icon={faUser} className="text-[#8192a0]"/>
                        <span>Sign up</span>
                    </li>
                </ul>
            </div>
        </div>

        {/* Main Nav manu */}
        <div className={`w-full px-[2%] sm:px-[8%] lg:px-[12%] text-start lg:text-center relative flex justify-between lg:justify-center nav-menu-container transition-all duration-500 ease-in-out ${isScrolled ? "bg-white" : "bg-transparent"}`}>

            {/* Logo for mobile */}
            <div className="lg:hidden flex logo text-2xl uppercase font-semibold">
                <a href="#" className="unbounded-font">Travel<span className="unbounded-font">Agency</span></a>
            </div>

            {/* Desktop Menu */}
            <ul className="nav-menu hidden lg:flex w-full  justify-center items-center gap-14 py-5 relative">
                <li>
                    <Link href='/' className="active font-[500] hover:text-black transition-colors duration-500">Home</Link>
                </li>
                <li>
                    <Link href='/about' className="active font-[500] text-[#697e8a] hover:text-black transition-colors duration-500">About</Link>
                </li>
                <li>
                    <Link href='/tour' className="active font-[500] text-[#697e8a] hover:text-black transition-colors duration-500">Tour</Link>
                </li>
                <div className="logo text-3xl uppercase font-semibold">
                    <Link href="/" className="unbounded-font">Travel<span className="unbounded-font">Agency</span></Link>
                </div>
                <li>
                    <Link href='/faq' className="active font-[500] text-[#697e8a] hover:text-black transition-colors duration-500">Faq</Link>
                </li>
                <li>
                    <Link href='/blog' className="active font-[500] text-[#697e8a] hover:text-black transition-colors duration-500">Blog</Link>
                </li>
                <li>
                    <Link href='/contact' className="active font-[500] text-[#697e8a] hover:text-black transition-colors duration-500">Contact</Link>
                </li>
            </ul>

            {/* Mobile Toggle */}
            <div className="flex justify-center items-center">
                <div className="toggle btn lg:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                    <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="text-[#193555] text-xl"/>
                </div>
            </div>

            {/* Mobile menu dropdown */}
            <ul className={`lg:hidden flex flex-col items-center gap-6 bg-[#f7f7f7] shadow-md absolute left-0 w-full overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[500px] top-full mt-3 opacity-100 py-6" : "max-h-0 opacity-0 py-0 top-full"}`}>
                <li><a href="#" className="font-[500] hover:text-black">Home</a></li>
                <li><a href="#" className="font-[500] hover:text-black">About</a></li>
                <li><a href="#" className="font-[500] hover:text-black">Tour</a></li>
                <li><a href="#" className="font-[500] hover:text-black">Faq</a></li>
                <li><a href="#" className="font-[500] hover:text-black">Blog</a></li>
                <li><a href="#" className="font-[500] hover:text-black">Contact</a></li>
            </ul>

        </div>
    </nav>
  )
}
