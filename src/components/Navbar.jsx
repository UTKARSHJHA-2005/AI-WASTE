import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import ecoLogo from "../assets/Logo.png";
import { Menu, X } from "lucide-react";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div>
      {/* Navbar */}
      <nav className="flex justify-between items-center py-4 px-8 md:px-16 bg-white/80 backdrop-blur-sm shadow-sm relative">
        {/* Logo */}
        <div onClick={() => navigate("/")} className="flex hover:scale-110 transition-transform items-center cursor-pointer">
          <img src={ecoLogo} alt="EcoGenie Logo" className="h-[30px] w-[30px]" />
          <p className="font-serif text-xl font-bold text-green-700 ml-2">ECOGENIE</p>
        </div>
        {/* Centered Menu */}
        <div className="hidden md:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
          {[{ name: "Dashboard", href: "/dashboard" }, { name: "Product", href: "/products" }, { name: "Processors", href: "/recycler" }].map((item, index) => (
            <a key={index} href={item.href} className={`font-medium transition-colors ${location.pathname === item.href ? "text-green-700 font-semibold" : "text-gray-800 hover:text-green-600"
              }`}>
              {item.name}
            </a>
          ))}
        </div>
        {/* User Icon */}
        <Link to="/profile">
          <div className="flex items-center cursor-pointer hover:scale-110 transition-transform border border-green-400 rounded-full p-2 shadow-inner shadow-green-500 md:flex">
            <FaUser className="text-2xl" />
          </div>
         </Link>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-green-700 text-2xl">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
  <div className="md:hidden flex flex-col items-center bg-white shadow-md p-4 space-y-4">
    {[{ name: "Dashboard", href: "/dashboard" }, { name: "Product", href: "/products" }, { name: "Processors", href: "/recycler" }].map((item, index) => (
      <Link  key={index} to={item.href} className={`font-medium transition-colors ${location.pathname === item.href ? "text-green-700 font-semibold" : "text-gray-800 hover:text-green-600"
          }`}onClick={() => setMenuOpen(false)}>
        {item.name}
      </Link>
    ))}
  </div>
)}
    </div>
  );
};

export default Navbar;
