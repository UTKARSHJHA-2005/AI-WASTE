"use client"
import { motion } from "framer-motion"
import { Leaf, Sprout, Droplet } from "lucide-react"
import WhyWeAre from "./WhyWeAre"
import plant from "../assets/plant.png"
import FAQSection from "./FAQSection"
import Footer from "./Footer"
import { useNavigate } from "react-router-dom"
import ProductDetail from "./ProductDetail"

const HeroSection = () => {

    const navigate = useNavigate()
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  const slideFromRight = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  }

  const buttonHover = {
    rest: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  }

  const arrowAnimation = {
    rest: { x: 0 },
    hover: {
      x: 5,
      transition: {
        duration: 0.2,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      },
    },
  }

  return (
    <div className="relative bg-gray-50 min-h-screen overflow-x-hidden">
    {/* Navigation */}
    <motion.nav
      className="flex justify-between items-center py-4 px-8 md:px-16"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div className="flex items-center" whileHover={{ scale: 1.05 }}>
        <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
          <Sprout className="text-white" size={20} />
        </div>
      </motion.div>
  
      <motion.div className="hidden md:flex space-x-8" variants={staggerChildren} initial="hidden" animate="visible">
        {["About us", "Product", "FAQ"].map((item, index) => (
          <motion.a
            key={index}
            href="#"
            className="text-gray-800 hover:text-green-600 transition-colors"
            variants={fadeIn}
            whileHover={{ scale: 1.05 }}
          >
            {item}
          </motion.a>
        ))}
      </motion.div>
  
      <motion.div className="flex space-x-4" variants={staggerChildren} initial="hidden" animate="visible">
        <motion.button
          onClick={() => navigate("/login")}
          variants={fadeIn}
          whileHover={{ scale: 1.05 }}
          className="px-4 py-2 text-green-600 border border-green-600 rounded-md hover:bg-green-50 transition-colors"
        >
          Login
        </motion.button>
        <motion.button
          onClick={() => navigate("/signup")}
          variants={fadeIn}
          whileHover={{ scale: 1.05 }}
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
        >
          Sign Up
        </motion.button>
      </motion.div>
    </motion.nav>
  
    {/* Hero Content */}
    <div className="container mx-auto px-8 md:px-16 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left Column - Text Content */}
      <motion.div initial="hidden" animate="visible" variants={staggerChildren} className="max-w-xl">
        <motion.h1 className="text-6xl font-bold text-gray-900 mb-6" variants={fadeIn}>
          <motion.span className="block" variants={fadeIn}>
            E-Waste
          </motion.span>
          <motion.span className="block" variants={fadeIn}>
            Management
          </motion.span>
        </motion.h1>
  
        <motion.p className="text-gray-600 mb-8 text-lg" variants={fadeIn}>
          Turning food waste into clean energy and organic fertilizers, we create a sustainable future while reducing
          landfill pollution and carbon emissions.
        </motion.p>
  
        <motion.div className="flex items-center space-x-4" variants={fadeIn}>
          <motion.button
            className="bg-gray-900 text-white px-6 py-3 rounded-full flex items-center"
            variants={buttonHover}
            initial="rest"
            whileHover="hover"
          >
            <span>View Product</span>
            <motion.span className="ml-2" variants={arrowAnimation}>
              →
            </motion.span>
          </motion.button>
        </motion.div>
  
        <motion.div className="mt-16" variants={fadeIn}>
          <motion.p className="text-gray-600 text-sm">
            Turning food waste into clean energy and organic fertilizers.
          </motion.p>
          <motion.a href="#" className="text-green-600 text-sm hover:underline" whileHover={{ x: 5 }}>
            Learn More
          </motion.a>
        </motion.div>
      </motion.div>
  
      {/* Right Column - Image and Benefits */}
      <div className="relative">
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img src={plant} className="mx-auto" />
        </motion.div>
  
        {/* Benefits List */}
        <motion.div
          className="top-0 right-0 space-y-8 z-10"
          variants={staggerChildren}
          initial="hidden"
          animate="visible"
        >
          {[
            { text: "Decrease Carbon", icon: <Leaf className="text-green-600" /> },
            { text: "Promotes Soil Health", icon: <Sprout className="text-green-600" /> },
            { text: "Saves Water & Resources", icon: <Droplet className="text-green-600" /> },
          ].map((benefit, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-3 bg-[#bde0fe] p-3 rounded-lg shadow-sm"
              variants={slideFromRight}
              whileHover={{ x: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-8 h-8 flex items-center justify-center">{benefit.icon}</div>
              <span className="text-gray-700">{benefit.text}</span>
            </motion.div>
          ))}
        </motion.div>
  
        {/* Rating Box Positioned in the Bottom-Right Corner */}
        {/* <motion.div
          className="absolute bottom-0 mb-4 mr-4 bg-white p-4 rounded-lg shadow-sm z-10"
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex items-center">
            <span className="text-3xl font-bold text-gray-900">4.8</span>
            <span className="text-gray-900 text-xl">/5</span>
            <span className="text-yellow-500 ml-1">★</span>
          </div>
          <p className="text-xs text-gray-600">
            Explore our trusts &<br />
            customer Reviews
          </p>
        </motion.div> */}
      </div>
    </div>
  
    {/* Other Sections */}
    <WhyWeAre />
    <ProductDetail />
    <FAQSection />
    <Footer />
  </div>
  
  )
}

export default HeroSection

