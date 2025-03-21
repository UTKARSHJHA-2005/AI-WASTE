import { Leaf, Instagram, Facebook, Linkedin, Mail, Phone, MapPin, Globe } from "lucide-react";
import Aos from "aos";
import { useEffect } from "react";
import 'aos/dist/aos.css';

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <footer className="bg-green-900 text-white pt-16 pb-8 px-6 md:px-16 relative overflow-hidden">
      {/* Decorative leaf pattern */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 via-green-400 to-green-500"></div>
      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-green-800 opacity-30"></div>
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-green-800 opacity-20"></div>
      <div className="absolute bottom-40 -left-10 w-40 h-40 rounded-full bg-green-800 opacity-20"></div>
      <div data-aos="fade-up" className="max-w-7xl mx-auto relative z-10">
        {/* Logo and Mission */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 pb-12 border-b border-green-700">
          <div className="flex items-center mb-6 md:mb-0">
            <Leaf size={28} className="text-green-400 mr-2" />
            <span className="text-2xl font-bold text-white">EcoGenie</span>
          </div>
          <p className="text-green-200 max-w-lg">
            Transforming food waste into sustainable organic fertilizers. 
            Together, we're building a greener future for our planet.
          </p>
        </div>
        <div data-aos="fade-left" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Navigation Links */}
          <div>
            <h3 className="text-green-300 font-semibold mb-4 flex items-center">
              <Globe size={18} className="mr-2" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-green-100 hover:text-white transition-colors duration-300 flex items-center">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="text-green-100 hover:text-white transition-colors duration-300 flex items-center">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>
                  See Products
                </a>
              </li>
              <li>
                <a href="#" className="text-green-100 hover:text-white transition-colors duration-300 flex items-center">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>
                  AI Analysis
                </a>
              </li>
              <li>
                <a href="#" className="text-green-100 hover:text-white transition-colors duration-300 flex items-center">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>
                  Find Recycler
                </a>
              </li>
            </ul>
          </div>
          {/* Social Media Links */}
          <div>
            <h3 className="text-green-300 font-semibold mb-4 flex items-center">
              <Globe size={18} className="mr-2" />
              Connect With Us
            </h3>
            <div className="space-y-3">
              <a href="#" className="flex items-center text-green-100 hover:text-white transition-colors duration-300">
                <Linkedin size={20} className="mr-3" />
                <span>LinkedIn</span>
              </a>
              <a href="#" className="flex items-center text-green-100 hover:text-white transition-colors duration-300">
                <Facebook size={20} className="mr-3" />
                <span>Facebook</span>
              </a>
              <a href="#" className="flex items-center text-green-100 hover:text-white transition-colors duration-300">
                <Instagram size={20} className="mr-3" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-green-300 font-semibold mb-4 flex items-center">
              <Mail size={18} className="mr-2" />
              Contact Info
            </h3>
            <div className="space-y-3">
              <a href="tel:+88032423423423523" className="flex items-center text-green-100 hover:text-white transition-colors duration-300">
                <Phone size={18} className="mr-3" />
                <span>+88032423423423523</span>
              </a>
              <a href="mailto:hello@fibostudio.com" className="flex items-center text-green-100 hover:text-white transition-colors duration-300">
                <Mail size={18} className="mr-3" />
                <span>hello@fibostudio.com</span>
              </a>
            </div>
          </div>
          {/* Address */}
          <div>
            <h3 className="text-green-300 font-semibold mb-4 flex items-center">
              <MapPin size={18} className="mr-2" />
              Address
            </h3>
            <p className="text-green-100 flex">
              <MapPin size={18} className="mr-3 flex-shrink-0 mt-1" />
              <span>336 East Shewrapara, Mirpur, Dhaka, Bangladesh</span>
            </p>
          </div>
        </div>
        {/* Newsletter */}
        <div className="bg-green-800 rounded-xl p-6 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-white font-bold text-lg mb-1">Subscribe to Our Newsletter</h3>
              <p className="text-green-200 text-sm">Get eco-friendly tips and exclusive offers</p>
            </div>
            <div className="w-full md:w-auto flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 rounded-lg bg-green-700 border border-green-600 text-white placeholder-green-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <button className="px-4 py-2 bg-green-500 hover:bg-green-400 transition-colors duration-300 text-white font-medium rounded-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between text-green-300 text-sm pt-6 border-t border-green-700">
          <p>© 2025 EcoGenie by Fibo Studio. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Accessibility</a>
          </div>
        </div>
        {/* Certification Badges */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
          <div className="bg-green-800 px-3 py-1 rounded-full text-xs text-green-300 flex items-center">
            <Leaf size={14} className="mr-1" />
            Certified Organic
          </div>
          <div className="bg-green-800 px-3 py-1 rounded-full text-xs text-green-300 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Carbon Neutral
          </div>
          <div className="bg-green-800 px-3 py-1 rounded-full text-xs text-green-300 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
            </svg>
            Zero Waste
          </div>
        </div>
      </div>
      {/* Background Text */}
      <div
        className="absolute bottom-0 left-0 w-full text-center opacity-5 text-green-500 text-[5rem] md:text-[8rem] lg:text-[10rem] font-bold leading-none pointer-events-none">
        ECOGENIE
      </div>
    </footer>
  );
};

export default Footer;