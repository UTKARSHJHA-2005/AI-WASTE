import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { 
  Leaf, 
  ShoppingCart, 
  Heart, 
  Filter, 
  Upload, 
  ChevronDown, 
  Star, 
  Plus, 
  Minus,
  Truck,
  Recycle
} from "lucide-react"
import Aos from "aos"
import "aos/dist/aos.css"
import { useNavigate } from "react-router-dom"
import Footer from "../components/Footer"
import ecoLogo from "../assets/Logo.png";
import Navbar from "../components/Navbar"
import prod1 from "../assets/prod1.jpg"
import prod2 from "../assets/prod2.jpg"
import prod3 from "../assets/prod3.webp"
import prod4 from "../assets/prod4.jpeg"
import prod5 from "../assets/prod5.webp"


// In a real implementation, these would come from your backend
const CATEGORIES = ["Compost Bins", "Fertilizers", "Biogas Equipment", "Recycling Tools", "Smart Sensors"]

const ProductPage = () => {
  const navigate = useNavigate()
  const [selectedCategory, setSelectedCategory] = useState("All Products")
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [cart, setCart] = useState([])
  const [wishlist, setWishlist] = useState([])
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    Aos.init({ duration: 1500 })
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

  const addToCart = (product) => {
    setCart([...cart, {...product, quantity}])
    // Show notification
    alert(`Added ${product.name} to cart!`)
  }

  const toggleWishlist = (productId) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter(id => id !== productId))
    } else {
      setWishlist([...wishlist, productId])
    }
  }

  // Sample products data - in a real app, this would come from your backend
  const products = [
    {
      id: 1,
      name: "Smart Compost Bin",
      category: "Compost Bins",
      price: 199.99,
      rating: 4.8,
      reviews: 124,
      image: prod1,
      description: "AI-powered compost bin that automatically manages temperature, humidity, and aeration for optimal decomposition.",
      features: ["Temperature Sensor", "Humidity Control", "Mobile App Integration", "Odor-Free Design"],
      ecoImpact: "Reduces household waste by up to 30%",
      availability: "In Stock"
    },
    {
      id: 2,
      name: "Premium Organic Fertilizer",
      category: "Fertilizers",
      price: 29.99,
      rating: 4.9,
      reviews: 89,
      image: prod2,
      description: "Nutrient-rich organic fertilizer made from processed food waste. Perfect for gardens and indoor plants.",
      features: ["100% Organic", "Balanced Nutrients", "Slow Release", "No Chemicals"],
      ecoImpact: "Made from 100% recycled food waste",
      availability: "In Stock"
    },
    {
      id: 3,
      name: "BioDome Home Biogas",
      category: "Biogas Equipment",
      price: 499.99,
      rating: 4.7,
      reviews: 56,
      image: prod3,
      description: "Compact biogas generator that converts food scraps into cooking gas and liquid fertilizer for home use.",
      features: ["2L Daily Gas Output", "Safe Operation", "Low Maintenance", "Compact Design"],
      ecoImpact: "Produces renewable energy from waste",
      availability: "Limited Stock"
    },
    {
      id: 4,
      name: "EcoGenie Waste Scanner",
      category: "Smart Sensors",
      price: 149.99,
      rating: 4.6,
      reviews: 42,
      image: prod4,
      description: "AI-powered scanner that identifies optimal recycling and composting methods for different types of waste.",
      features: ["Material Recognition", "Recycling Guidance", "Waste Tracking", "Educational Content"],
      ecoImpact: "Improves recycling efficiency by 40%",
      availability: "In Stock"
    }
  ]

  const filteredProducts = selectedCategory === "All Products" 
    ? products 
    : products.filter(product => product.category === selectedCategory)

  return (
    <div className="bg-gradient-to-b from-green-50 to-blue-50 min-h-screen overflow-x-hidden">
      {/* Navigation Bar */}
      <Navbar/>

      {/* Page Header */}
      <motion.div 
        className="container mx-auto px-8 py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex justify-between items-center mb-8">
          <div>
            <motion.h1 
              className="text-4xl font-bold text-green-700"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >
              Sustainable Products
            </motion.h1>
            <motion.p 
              className="text-gray-600 mt-2"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1 }}
            >
              Eco-friendly solutions for a zero-waste lifestyle
            </motion.p>
          </div>
          
          <motion.div 
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05 }}
            >
              <ShoppingCart className="text-green-700 cursor-pointer" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </motion.div>
            
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05 }}
            >
              <Heart className={`cursor-pointer ${wishlist.length > 0 ? 'text-red-500 fill-red-500' : 'text-gray-600'}`} />
              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </motion.div>
            
            <motion.button
              className="bg-white border border-green-700 text-green-700 px-4 py-2 rounded-full flex items-center"
              whileHover={{ scale: 1.05, backgroundColor: "#f0fdf4" }}
            >
              <Upload size={16} className="mr-2" />
              <span>Sell Product</span>
            </motion.button>
          </motion.div>
        </div>
        
        {/* Filters */}
        <motion.div 
          className="bg-white rounded-xl shadow-sm p-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Filter size={18} className="text-green-700" />
              <span className="font-medium text-gray-800">Filter Products</span>
            </div>
            <motion.button
              className="text-green-700"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              whileHover={{ scale: 1.05 }}
            >
              <ChevronDown className={`transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
            </motion.button>
          </div>
          
          {isFilterOpen && (
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <label className="block text-sm text-gray-600 mb-2">Category</label>
                <select 
                  className="w-full border border-gray-200 rounded-lg p-2 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="All Products">All Products</option>
                  {CATEGORIES.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm text-gray-600 mb-2">Price Range</label>
                <select className="w-full border border-gray-200 rounded-lg p-2 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none">
                  <option>All Prices</option>
                  <option>Under $50</option>
                  <option>$50 - $100</option>
                  <option>$100 - $250</option>
                  <option>$250+</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm text-gray-600 mb-2">Eco-Impact</label>
                <select className="w-full border border-gray-200 rounded-lg p-2 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none">
                  <option>All Impacts</option>
                  <option>Waste Reduction</option>
                  <option>Energy Production</option>
                  <option>Carbon Neutral</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm text-gray-600 mb-2">Availability</label>
                <select className="w-full border border-gray-200 rounded-lg p-2 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none">
                  <option>All</option>
                  <option>In Stock</option>
                  <option>Limited Stock</option>
                  <option>Pre-order</option>
                </select>
              </div>
            </motion.div>
          )}
        </motion.div>
        
        {/* Product Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={staggerChildren}
          initial="hidden"
          animate="visible"
        >
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden border border-green-100 group"
              variants={fadeIn}
              whileHover={hoverScale.hover}
            >
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-48 object-cover"
                />
                <motion.button
                  className={`absolute top-3 right-3 p-2 rounded-full bg-white shadow-md ${wishlist.includes(product.id) ? 'text-red-500 fill-red-500' : 'text-gray-400'}`}
                  onClick={() => toggleWishlist(product.id)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Heart size={18} />
                </motion.button>
                <div className="absolute bottom-3 left-3 bg-green-600 text-white text-xs px-2 py-1 rounded-full flex items-center">
                  <Leaf size={12} className="mr-1" />
                  <span>{product.ecoImpact}</span>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg text-gray-800 group-hover:text-green-700 transition-colors">
                    {product.name}
                  </h3>
                  <span className="font-bold text-green-700">${product.price}</span>
                </div>
                
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
                
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={`${
                          i < Math.floor(product.rating) 
                            ? 'text-yellow-400 fill-yellow-400' 
                            : i < product.rating 
                              ? 'text-yellow-400 fill-yellow-400 opacity-50' 
                              : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-600 text-sm ml-2">{product.rating} ({product.reviews})</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center border border-gray-200 rounded-lg">
                    <motion.button
                      className="p-1 text-gray-500 hover:text-green-700"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      disabled={quantity <= 1}
                    >
                      <Minus size={16} />
                    </motion.button>
                    <span className="px-3 py-1">{quantity}</span>
                    <motion.button
                      className="p-1 text-gray-500 hover:text-green-700"
                      onClick={() => setQuantity(quantity + 1)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Plus size={16} />
                    </motion.button>
                  </div>
                  
                  <motion.button
                    className="bg-gradient-to-r from-green-700 to-green-600 text-white px-4 py-2 rounded-lg flex items-center"
                    onClick={() => addToCart(product)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ShoppingCart size={16} className="mr-2" />
                    Add to Cart
                  </motion.button>
                </div>
              </div>
              
              <div className="px-4 pb-4 pt-2 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center">
                  <Truck size={14} className="mr-1" />
                  <span>{product.availability}</span>
                </div>
                <div className="flex items-center">
                  <Recycle size={14} className="mr-1" />
                  <span>{product.category}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Featured Product - Detailed View */}
        <motion.div 
          className="mt-16 bg-white rounded-xl shadow-md overflow-hidden border border-green-100"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          data-aos="fade-up"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8">
              <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">Featured Product</span>
              <h2 className="text-3xl font-bold text-gray-800 mt-4">EcoGenie Biodigester Pro</h2>
              <div className="flex items-center mt-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < 5 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
                    />
                  ))}
                </div>
                <span className="text-gray-600 text-sm ml-2">5.0 (36 reviews)</span>
              </div>
              
              <p className="text-gray-700 mb-6">
                Our flagship biodigester uses patented AI technology to process up to 5kg of food waste daily, 
                producing biogas for cooking and high-quality liquid fertilizer. The smart system optimizes the 
                digestion process and connects to your home automation system.
              </p>
              
              <div className="mb-6">
                <h3 className="font-semibold text-gray-800 mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {["5kg Daily Capacity", "Smart Home Integration", "Mobile App Control", "Automatic pH Balancing", "Energy Efficient Operation"].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3">
                        <Leaf size={12} className="text-green-700" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-3xl font-bold text-green-700">$899.99</span>
                  <span className="text-gray-500 line-through ml-2">$999.99</span>
                </div>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-lg text-sm">
                  Save $100
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <motion.button
                  className="bg-gradient-to-r from-green-700 to-green-600 text-white px-6 py-3 rounded-lg flex items-center flex-grow md:flex-grow-0"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <ShoppingCart size={18} className="mr-2" />
                  Add to Cart
                </motion.button>
                
                <motion.button
                  className="border border-green-700 text-green-700 px-6 py-3 rounded-lg flex items-center"
                  whileHover={{ scale: 1.03, backgroundColor: "#f0fdf4" }}
                  whileTap={{ scale: 0.97 }}
                >
                  Buy Now
                </motion.button>
              </div>
            </div>
            
            <div className="relative md:h-auto h-64">
              <img 
                src={prod5} 
                alt="EcoGenie Biodigester Pro" 
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-sm p-3 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <Recycle className="text-green-700" size={20} />
                    </div>
                    <div>
                      <span className="block text-sm font-medium text-gray-800">Eco Impact</span>
                      <span className="block text-xs text-green-700">Saves 1.8 tons of CO₂ yearly</span>
                    </div>
                  </div>
                  <div>
                    <span className="bg-green-600 text-white text-xs rounded-full px-2 py-1">Top Rated</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Sell Your Products Section */}
        <motion.div 
          className="mt-16 mb-16 bg-gradient-to-r from-green-100 to-blue-100 rounded-xl p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          data-aos="fade-up"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold text-green-800 mb-2">Have Sustainable Products to Share?</h2>
              <p className="text-gray-700 max-w-xl">
                Join our marketplace of eco-conscious sellers and list your sustainable products.
                Help us build a circular economy and earn while making a positive impact.
              </p>
            </div>
            <motion.button
              className="bg-green-700 text-white px-6 py-3 rounded-lg flex items-center shadow-md"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate("/sell-product")}
            >
              <Upload size={18} className="mr-2" />
              Become a Seller
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
      {/* Footer Component */}
      <Footer />
    </div>
  )
}

export default ProductPage
