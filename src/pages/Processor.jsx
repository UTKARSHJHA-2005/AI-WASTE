import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  Leaf,
  MapPin,
  Phone,
  Mail,
  Search,
  Filter,
  ChevronDown,
  Star,
  Clock,
  CheckCircle,
  Calendar,
  Recycle,
  MessageCircle,
  UserPlus,
  ArrowRight
} from "lucide-react"
import Aos from "aos"
import "aos/dist/aos.css"
import { useNavigate } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import pros1 from "../assets/pros1.webp"
import pros2 from "../assets/pros2.webp"
import pros3 from "../assets/pros3.jpeg"
import pros4 from "../assets/pros4.jpg"
import map from "../assets/map.jpg"

const ProcessorsPage = () => {
  const navigate = useNavigate()
  const [location, setLocation] = useState("")
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedType, setSelectedType] = useState("All Types")
  const [selectedDistance, setSelectedDistance] = useState("Any Distance")
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [showContactForm, setShowContactForm] = useState(false)
  const [selectedProcessor, setSelectedProcessor] = useState(null)
  const [userLocation, setUserLocation] = useState(null)

  useEffect(() => {
    Aos.init({ duration: 1500 })
    setTimeout(() => {
      setUserLocation({
        latitude: 37.7749,
        longitude: -122.4194,
        address: "San Francisco, CA"
      })
    }, 1000)
  }, [])

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const hoverScale = {
    hover: { scale: 1.03, transition: { duration: 0.2 } }
  }

  const openContactForm = (processor) => {
    setSelectedProcessor(processor)
    setShowContactForm(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSubmitContactForm = (e) => {
    e.preventDefault()
    alert(`Message sent to ${selectedProcessor.name}! They will contact you shortly.`)
    setShowContactForm(false)
    setSelectedProcessor(null)
  }

  // Sample waste processor data
  const processors = [
    {
      id: 1,
      name: "GreenCycle Solutions",
      type: "Composting Facility",
      address: "123 Eco Way, San Francisco, CA 94110",
      distance: 2.4,
      rating: 4.8,
      reviews: 124,
      image: pros1,
      description: "Specializes in commercial and residential food waste composting with state-of-the-art technology.",
      wasteTypes: ["Food Waste", "Yard Waste", "Paper Products"],
      certifications: ["USCC Certified", "EPA Approved"],
      hours: "Mon-Sat: 8AM-5PM",
      phone: "(415) 555-0123",
      email: "info@greencycle.com",
      features: ["Drop-off Service", "Pickup Available", "Educational Tours"]
    },
    {
      id: 2,
      name: "BioEnergy Partners",
      type: "Biogas Plant",
      address: "456 Renewable Rd, Oakland, CA 94612",
      distance: 5.7,
      rating: 4.9,
      reviews: 89,
      image: pros2,
      description: "Converting organic waste into renewable biogas and fertilizer products using anaerobic digestion.",
      wasteTypes: ["Food Waste", "Agricultural Waste", "Organic Sludge"],
      certifications: ["RNG Certified", "Carbon Neutral"],
      hours: "Mon-Fri: 7AM-6PM",
      phone: "(510) 555-0456",
      email: "contact@bioenergy.com",
      features: ["Commercial Partnerships", "Waste-to-Energy", "Carbon Credits"]
    },
    {
      id: 3,
      name: "EcoTech Recycling",
      type: "Recycling Center",
      address: "789 Green Blvd, San Jose, CA 95113",
      distance: 12.3,
      rating: 4.7,
      reviews: 56,
      image: pros3,
      description: "Full-service recycling center handling all types of recyclable materials with AI sorting technology.",
      wasteTypes: ["Plastics", "Metals", "Glass", "E-Waste"],
      certifications: ["R2 Certified", "ISO 14001"],
      hours: "Mon-Sun: 9AM-7PM",
      phone: "(408) 555-0789",
      email: "support@ecotech.com",
      features: ["Cash for Recyclables", "E-Waste Handling", "Bulk Processing"]
    },
    {
      id: 4,
      name: "Urban Composter Collective",
      type: "Community Composting",
      address: "321 Community Lane, Berkeley, CA 94704",
      distance: 8.1,
      rating: 4.6,
      reviews: 42,
      image: pros4,
      description: "Community-based composting network that serves local neighborhoods and supports urban gardens.",
      wasteTypes: ["Food Scraps", "Plant Material", "Coffee Grounds"],
      certifications: ["Community Certified", "Local First"],
      hours: "Wed, Sat-Sun: 10AM-4PM",
      phone: "(510) 555-0321",
      email: "hello@urbancomposter.org",
      features: ["Volunteer Opportunities", "Community Gardens", "Workshops"]
    }
  ]

  // Filter processors based on selected criteria
  const filteredProcessors = processors.filter(processor => {
    if (selectedType !== "All Types" && processor.type !== selectedType) return false;
    if (selectedDistance !== "Any Distance") {
      const maxDistance = parseInt(selectedDistance);
      if (processor.distance > maxDistance) return false;
    }
    if (location.trim() !== "") {
      return processor.address.toLowerCase().includes(location.toLowerCase());
    }
    return true;
  });

  return (
    <div className="bg-gradient-to-b from-green-50 to-blue-50 min-h-screen overflow-x-hidden">
      {/* Navbar */}
      <Navbar />
      {/* Page Header */}
      <motion.div
        className="container mx-auto px-8 py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <motion.h1
              className="text-4xl font-bold text-green-700"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >
              Waste Processors Network
            </motion.h1>
            <motion.p
              className="text-gray-600 mt-2"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1 }}
            >
              Connect with local waste management facilities and recyclers
            </motion.p>
          </div>

          {userLocation && (
            <motion.div
              className="flex items-center mt-4 md:mt-0 bg-white px-4 py-2 rounded-lg shadow-sm"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <MapPin size={18} className="text-green-700 mr-2" />
              <span className="text-gray-700">Your location: {userLocation.address}</span>
            </motion.div>
          )}
        </div>

        {/* Contact Form */}
        {showContactForm && selectedProcessor && (
          <motion.div
            className="bg-white rounded-xl shadow-md p-6 mb-8 border-l-4 border-green-600"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-bold text-green-700">{`Contact ${selectedProcessor.name}`}</h2>
                <p className="text-gray-600">Fill out this form to send a message directly to this processor</p>
              </div>
              <motion.button
                onClick={() => setShowContactForm(false)}
                className="text-gray-500 hover:text-gray-700"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ✕
              </motion.button>
            </div>

            <form onSubmit={handleSubmitContactForm}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Your Email</label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Waste Type</label>
                  <select
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                    required
                  >
                    <option value="">Select waste type</option>
                    {selectedProcessor?.wasteTypes?.length > 0 ? (
                      selectedProcessor.wasteTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))
                    ) : (
                      <option disabled>No waste types available</option>
                    )}
                    <option value="Other">Other (specify in message)</option>
                  </select>
                </div>

                {/* Days, Rate, and Waste aligned in one row */}
                <div className="flex gap-4 w-full">
                  <div className="flex-1">
                    <label className="block text-gray-700 font-medium mb-2">Waste</label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                      placeholder="Enter your waste name"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-gray-700 font-medium mb-2">Days</label>
                    <input
                      type="number"
                      className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                      placeholder="How old is the waste?"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-gray-700 font-medium mb-2">Rate</label>
                    <input
                      type="number"
                      className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                      placeholder="Enter the rate per unit"
                    />
                  </div>
                </div>

                {/* Image Upload & Preview */}
                <div className="w-full">
                  <label className="block text-gray-700 font-medium mb-2">Image</label>
                  <input
                    type="file"
                    accept="image/*"
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        setSelectedImage(URL.createObjectURL(file)); // Preview the image
                      }
                    }}
                  />
                  {selectedImage && (
                    <div className="mt-4">
                      <p className="text-gray-600">Preview:</p>
                      <img src={selectedImage} alt="Selected" className="h-40 w-auto rounded-lg border" />
                    </div>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-gray-700 font-medium mb-2">Your Message</label>
                  <textarea
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none h-32"
                    placeholder="Describe your waste management needs, questions, or preferred contact times..."
                    required
                  />
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="consent"
                    className="mr-2 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    required
                  />
                  <label htmlFor="consent" className="text-gray-700 text-sm cursor-pointer">
                    I consent to sharing my contact information with this processor
                  </label>
                </div>
                <motion.button
                  type="submit"
                  className="bg-gradient-to-r from-green-700 to-green-600 text-white px-6 py-3 rounded-lg flex items-center shadow-md"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageCircle size={18} className="mr-2" />
                  Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}

        {/* Search and Filters */}
        <motion.div className="bg-white rounded-xl shadow-sm p-6 mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <div className="flex items-center w-full md:w-auto mb-4 md:mb-0">
              <div className="relative flex-grow md:w-80">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Enter location or zip code"
                  className="pl-10 pr-4 py-3 w-full border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <motion.button
                className="ml-2 bg-green-700 text-white px-4 py-3 rounded-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Search
              </motion.button>
            </div>

            <div className="flex items-center w-full md:w-auto">
              <Filter size={18} className="text-green-700 mr-2" />
              <span className="font-medium text-gray-800 mr-4">Filters</span>
              <motion.button
                className="text-green-700"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                whileHover={{ scale: 1.05 }}
              >
                <ChevronDown className={`transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
              </motion.button>
            </div>
          </div>
          {isFilterOpen && (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.3 }}>
              <div>
                <label className="block text-sm text-gray-600 mb-2">Processor Type</label>
                <select
                  className="w-full border border-gray-200 rounded-lg p-2 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                >
                  <option value="All Types">All Types</option>
                  <option value="Composting Facility">Composting Facility</option>
                  <option value="Biogas Plant">Biogas Plant</option>
                  <option value="Recycling Center">Recycling Center</option>
                  <option value="Community Composting">Community Composting</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">Distance</label>
                <select
                  className="w-full border border-gray-200 rounded-lg p-2 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none"
                  value={selectedDistance}
                  onChange={(e) => setSelectedDistance(e.target.value)}
                >
                  <option value="Any Distance">Any Distance</option>
                  <option value="5">Within 5 miles</option>
                  <option value="10">Within 10 miles</option>
                  <option value="25">Within 25 miles</option>
                  <option value="50">Within 50 miles</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">Waste Type</label>
                <select className="w-full border border-gray-200 rounded-lg p-2 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none">
                  <option value="All Types">All Types</option>
                  <option value="Food Waste">Food Waste</option>
                  <option value="Yard Waste">Yard Waste</option>
                  <option value="Recyclables">Recyclables</option>
                  <option value="E-Waste">E-Waste</option>
                </select>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Results Count */}
        <motion.div
          className="mb-6 text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Found {filteredProcessors.length} waste processors{location ? ` near "${location}"` : ''}
        </motion.div>

        {/* Processor Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
          variants={staggerChildren}
          initial="hidden"
          animate="visible"
        >
          {filteredProcessors.map((processor) => (
            <motion.div
              key={processor.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden border border-green-100"
              variants={fadeIn}
              whileHover={hoverScale.hover}
            >
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="md:col-span-1">
                  <img
                    src={processor.image}
                    alt={processor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 md:col-span-2">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-xl text-gray-800">
                      {processor.name}
                    </h3>
                    <div className="flex items-center">
                      <Star size={14} className="text-yellow-400 fill-yellow-400" />
                      <span className="text-gray-700 ml-1">{processor.rating}</span>
                    </div>
                  </div>

                  <div className="flex items-center text-gray-600 text-sm mb-2">
                    <div className="bg-green-100 text-green-800 px-2 py-1 rounded-md mr-2">
                      {processor.type}
                    </div>
                    <div className="flex items-center">
                      <MapPin size={14} className="mr-1" />
                      <span>{processor.distance} miles away</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{processor.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                    <div className="flex items-center text-gray-600 text-sm">
                      <Clock size={14} className="text-green-600 mr-1" />
                      <span>{processor.hours}</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <CheckCircle size={14} className="text-green-600 mr-1" />
                      <span>{processor.certifications.join(', ')}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm text-gray-700 font-medium mb-1">Accepted Waste Types:</div>
                    <div className="flex flex-wrap gap-1">
                      {processor.wasteTypes.map((type, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full"
                        >
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3">
                    <motion.button
                      className="w-full sm:w-auto flex items-center justify-center bg-green-700 text-white px-4 py-2 rounded-lg"
                      onClick={() => openContactForm(processor)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <MessageCircle size={14} className="mr-2" />
                      Contact
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Map Section - Placeholder for a real map implementation */}
        <motion.div
          className="rounded-xl overflow-hidden shadow-md mb-16 border border-green-100"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <div className="bg-green-700 text-white p-4">
            <h2 className="text-xl font-bold">Waste Processors Near You</h2>
            <p className="text-sm opacity-90">Map view shows processors in your area</p>
          </div>
          <div className="h-96 bg-gray-200 w-full relative">
            <img
              src={map}
              alt="Map of waste processors"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Join The Network CTA */}
        <motion.div
          className="bg-gradient-to-r from-green-100 to-blue-100 rounded-xl p-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          data-aos="fade-up"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold text-green-800 mb-2">Are You a Waste Management Facility?</h2>
              <p className="text-gray-700 max-w-xl">
                Join our network of sustainable waste processors and connect with eco-conscious
                customers in your area. Expand your reach and contribute to a circular economy.
              </p>
            </div>
            <motion.button
              className="bg-green-700 text-white px-6 py-3 rounded-lg flex items-center shadow-md"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate("/join-network")}
            >
              <UserPlus size={18} className="mr-2" />
              Join Our Network
            </motion.button>
          </div>
        </motion.div>

        {/* Scheduled Pickups Section */}
        <motion.div
          className="bg-white rounded-xl shadow-md p-6 mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          data-aos="fade-up"
        >
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold text-green-700">Schedule Regular Pickups</h2>
              <p className="text-gray-600">Set up recurring waste collection with our partner processors</p>
            </div>
            <motion.button
              className="text-green-700 flex items-center"
              whileHover={{ x: 5 }}
            >
              View All <ArrowRight size={16} className="ml-1" />
            </motion.button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Residential Pickup",
                description: "Regular collection of household waste and recyclables",
                icon: <Recycle size={24} className="text-green-600" />,
                frequency: "Weekly / Bi-weekly"
              },
              {
                title: "Commercial Service",
                description: "Customized waste management for businesses and offices",
                icon: <Calendar size={24} className="text-green-600" />,
                frequency: "Daily / Weekly"
              },
              {
                title: "Specialized Collection",
                description: "Targeted pickup for specific waste streams",
                icon: <CheckCircle size={24} className="text-green-600" />,
                frequency: "On-demand / Scheduled"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-b from-green-50 to-blue-50 rounded-lg p-5 border border-green-100"
                whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full mb-4 shadow-sm">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-green-700 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    <Clock size={14} className="inline mr-1" />
                    {service.frequency}
                  </span>
                  <motion.button
                    className="text-green-700 font-medium text-sm"
                    whileHover={{ scale: 1.05 }}
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
      {/* Footer Component */}
      <Footer />
    </div>
  )
}

export default ProcessorsPage