import { motion } from "framer-motion"
import { Leaf, Sprout, Droplet, Recycle, Sun, Wind } from "lucide-react"
import { useNavigate } from "react-router-dom"
import Aos from "aos"
import "aos/dist/aos.css"
import React, { useEffect } from "react"
// Import components
import WhyWeAre from "../components/WhyWeAre"
import FAQSection from "../components/FAQSection"
import Footer from "../components/Footer"
import ProductDetail from "../components/ProductDetail"
// Import images (assuming these paths remain valid)
import ecoLogo from '../assets/Logo.png'
import sustainablePlant from "../assets/plant.png"

const HeroSection = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

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
    <div className="relative bg-gradient-to-b from-green-50 to-blue-50 min-h-screen overflow-x-hidden">
      {/* Sustainable Design Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-30 transition-opacity duration-700 ease-in-out">
        <div className="absolute top-10 left-10 transition-opacity duration-700 ease-in-out">
          <Leaf size={80} className="text-green-700 opacity-70 hover:opacity-100" />
        </div>
        <div className="absolute top-20 right-20 opacity-50 transition-opacity duration-700 ease-in-out">
          <Droplet size={50} className="text-blue-500 hover:opacity-100" />
        </div>
      </div>
      {/* Navigation */}
      <motion.nav
        className="flex justify-between items-center py-4 px-8 md:px-16 bg-white/80 backdrop-blur-sm"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div className="flex items-center" whileHover={{ scale: 1.05 }}>
          <div className="flex items-center cursor-pointer">
            <img src={ecoLogo} alt="EcoGenie Logo" className="h-[30px] w-[30px]" />
            <p className="font-serif text-xl font-bold text-green-700">ECOGENIE</p>
          </div>
        </motion.div>

        <motion.div className="hidden md:flex space-x-8" variants={staggerChildren} initial="hidden" animate="visible">
          {[
            { name: "Dashboard", href: "/dashboard" },
            { name: "Product", href: "#product" },
            { name: "Find Recycler", href: "#faq" }
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              className="text-gray-800 hover:text-green-600 transition-colors font-medium"
              variants={fadeIn}
              whileHover={{ scale: 1.05 }}
            >
              {item.name}
            </motion.a>
          ))}
        </motion.div>

        <motion.div className="flex space-x-4" variants={staggerChildren} initial="hidden" animate="visible">
          <motion.button
            onClick={() => navigate("/login")}
            variants={fadeIn}
            whileHover={{ scale: 1.05 }}
            className="px-4 py-2 text-green-700 border border-green-700 rounded-full hover:bg-green-50 transition-colors"
          >
            Login
          </motion.button>
          <motion.button
            onClick={() => navigate("/signup")}
            variants={fadeIn}
            whileHover={{ scale: 1.05 }}
            className="px-4 py-2 bg-green-700 text-white rounded-full hover:bg-green-800 transition-colors shadow-md"
          >
            Sign Up
          </motion.button>
        </motion.div>
      </motion.nav>

      {/* Hero Content */}
      <div className="container mx-auto px-8 md:px-16 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text Content */}
        <motion.div initial="hidden" animate="visible" variants={staggerChildren} className="max-w-xl z-10">
          <motion.h1 className="text-6xl font-bold mb-6" variants={fadeIn}>
            <motion.span className="block bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent" variants={fadeIn}>
              AI-Powered
            </motion.span>
            <motion.span className="block bg-gradient-to-r from-green-600 to-blue-500 bg-clip-text text-transparent" variants={fadeIn}>
              Waste Management
            </motion.span>
          </motion.h1>

          <motion.p className="text-gray-700 mb-8 text-lg leading-relaxed" variants={fadeIn}>
            Transform food waste into clean energy and nutrient-rich organic fertilizers.
            Join our mission to create a zero-waste future while reducing landfill pollution
            and carbon emissions.
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row items-center gap-4" variants={fadeIn}>
            <motion.button
              className="bg-gradient-to-r from-green-700 to-green-600 text-white px-8 py-3 rounded-full flex items-center shadow-lg w-full sm:w-auto justify-center"
              variants={buttonHover}
              initial="rest"
              whileHover="hover">
              <span>Start AI Analysis</span>
              <motion.span className="ml-2" variants={arrowAnimation}>
                →
              </motion.span>
            </motion.button>
            <motion.button
              className="bg-white text-green-700 border border-green-700 px-8 py-3 rounded-full flex items-center w-full sm:w-auto justify-center"
              variants={buttonHover}
              initial="rest"
              whileHover="hover">
              <span>Learn More</span>
            </motion.button>
          </motion.div>

          <motion.div className="mt-12 bg-white/80 backdrop-blur-sm p-4 rounded-lg border-l-4 border-green-700 shadow-sm" variants={fadeIn}>
            <motion.p className="text-gray-700 text-sm">
              Every year, an estimated 1.3 billion tonnes of food is wasted globally.
              Our AI solution can help reduce this waste by up to 40%.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Right Column - Image and Benefits */}
        <div className="relative z-10">
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-green-200 to-blue-200 rounded-full blur-3xl opacity-30"></div>
            <img src={sustainablePlant} className="mx-auto relative z-10" alt="Sustainable plant illustration" />
          </motion.div>

          {/* Benefits List */}
          <motion.div
            className="space-y-4 mt-8 max-w-md mx-auto"
            variants={staggerChildren}
            initial="hidden"
            animate="visible"
          >
            {[
              { text: "Reduces Carbon Emissions", icon: <Leaf className="text-green-600" /> },
              { text: "Enhances Soil Health & Biodiversity", icon: <Sprout className="text-green-600" /> },
              { text: "Conserves Water Resources", icon: <Droplet className="text-blue-500" /> },
              { text: "Zero-Waste Circular Economy", icon: <Recycle className="text-green-700" /> },
              { text: "Renewable Energy Generation", icon: <Sun className="text-yellow-500" /> },
              { text: "Low Environmental Impact", icon: <Wind className="text-blue-400" /> },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-4 bg-gradient-to-r from-green-50 to-blue-50 p-3 rounded-lg shadow-sm border border-green-100"
                variants={slideFromRight}
                whileHover={{ x: -5, transition: { duration: 0.2 } }}
              >
                <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm">
                  {benefit.icon}
                </div>
                <span className="text-gray-700 font-medium">{benefit.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      {/* How It Works Section */}
      <div data-aos="zoom-out"
        className="py-16 bg-gradient-to-b from-green-50 to-green-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <div className="container mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-700">How EcoGenie Works</h2>
            <p className="text-gray-600 mt-2">Our AI-driven approach to sustainable waste management</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "AI Analysis",
                description: "Our smart sensors and AI algorithms analyze your waste composition in real-time.",
                icon: <motion.div
                  className="text-green-600"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                ><Recycle size={32} /></motion.div>,
                delay: 0
              },
              {
                title: "Conversion Process",
                description: "Food waste is converted into biogas through anaerobic digestion and into rich fertilizer.",
                icon: <Sprout size={32} className="text-green-700" />,
                delay: 0.2
              },
              {
                title: "Green Products",
                description: "The process yields clean energy and organic fertilizers with minimal environmental impact.",
                icon: <Leaf size={32} className="text-green-600" />,
                delay: 0.4
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-sm p-6 border border-green-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: step.delay + 0.7, duration: 0.5 }}
                whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="w-16 h-16 flex items-center justify-center bg-green-50 rounded-full mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-green-700 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
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