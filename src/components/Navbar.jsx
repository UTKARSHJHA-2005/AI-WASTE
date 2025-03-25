import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ecoLogo from "../assets/Logo.png";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div>
      {/* Navbar */}
      <nav className="flex  justify-between items-center py-4 px-8 md:px-16 bg-white/80 backdrop-blur-sm shadow-sm">
        {/* Logo */}
        <div onClick={() => navigate("/")} className="flex items-center cursor-pointer">
          <img src={ecoLogo} alt="EcoGenie Logo" className="h-[30px] w-[30px]" />
          <p className="font-serif text-xl font-bold text-green-700 ml-2">ECOGENIE</p>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {[
            { name: "Dashboard", href: "/dashboard" },
            { name: "Product", href: "/products" },
            { name: "Processors", href: "/recycler" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`font-medium transition-colors ${
                location.pathname === item.href ? "text-green-700 font-semibold" : "text-gray-800 hover:text-green-600"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-4">
          <button
            onClick={() => navigate("/login")}
            className="px-4 py-2 text-green-700 border border-green-700 rounded-full hover:bg-green-50 transition-colors"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="px-4 py-2 bg-green-700 text-white rounded-full hover:bg-green-800 transition-colors shadow-md"
          >
            Sign Up
          </button>
        </div>

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
          {[
            { name: "Dashboard", href: "/dashboard" },
            { name: "Product", href: "/products" },
            { name: "Processors", href: "/recycler" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`font-medium transition-colors ${
                location.pathname === item.href ? "text-green-700 font-semibold" : "text-gray-800 hover:text-green-600"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <button
            onClick={() => {
              navigate("/login");
              setMenuOpen(false);
            }}
            className="px-4 py-2 text-green-700 border border-green-700 rounded-full hover:bg-green-50 transition-colors w-full"
          >
            Login
          </button>
          <button
            onClick={() => {
              navigate("/signup");
              setMenuOpen(false);
            }}
            className="px-4 py-2 bg-green-700 text-white rounded-full hover:bg-green-800 transition-colors shadow-md w-full"
          >
            Sign Up
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
