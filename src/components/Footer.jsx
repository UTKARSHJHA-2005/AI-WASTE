"use client";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-16 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Navigation Links */}
        <div>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Product</li>
            <li className="hover:text-white cursor-pointer">FAQ</li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-gray-400 mb-2">Social Media</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-white cursor-pointer">LinkedIn</li>
            <li className="hover:text-white cursor-pointer">Facebook</li>
            <li className="hover:text-white cursor-pointer">Instagram</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-gray-400 mb-2">Contact Info</h3>
          <p className="text-gray-300">+88032423423423523</p>
          <p className="text-gray-300">hello@fibostudio.com</p>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-gray-400 mb-2">Address</h3>
          <p className="text-gray-300">
            336 East Shewrapara, Mirpur, Dhaka, Bangladesh
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
        <p>© 2025 Fibo Studio, All rights reserved.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <p className="hover:text-white cursor-pointer">Privacy Policy</p>
          <p className="hover:text-white cursor-pointer">Terms of Services</p>
          <p className="hover:text-white cursor-pointer">Accessibility</p>
        </div>
      </div>

      {/* Background Text */}
      <motion.div
        className="absolute bottom-0 left-0 w-full text-center text-[5rem] md:text-[8rem] font-bold text-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
      >
        Eco-Friendly Fertilizer
      </motion.div>
    </footer>
  );
};

export default Footer;
