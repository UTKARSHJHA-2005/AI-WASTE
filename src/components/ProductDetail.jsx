"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import plant2 from "../assets/plant2.jpg";

const ProductDetail = () => {
  const [selectedWeight, setSelectedWeight] = useState("1 kg");
  const [quantity, setQuantity] = useState(2);
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  const weights = [
    { value: "1 kg", label: "1 kg" },
    { value: "0.5 kg", label: "0.5 kg" },
    { value: "250 g", label: "250 g" },
  ];

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const buttonAnimation = {
    rest: { scale: 1 },
    hover: { scale: 1.03, transition: { duration: 0.2 } },
  };

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    console.log(`Added ${quantity} of Premium Organic Fertilizer (${selectedWeight}) to cart`);
  };

  return (
    <div ref={ref} className="w-full bg-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Product Image Section */}
          <motion.div
            className="relative h-full md:h-auto flex items-stretch"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/30 z-10" />
            <img src={plant2} alt="Premium Organic Fertilizer" className="w-full h-full object-cover" />
          </motion.div>

          {/* Product Details Section */}
          <motion.div
            className="bg-[#7a9a3e] p-8 md:p-12 flex flex-col justify-center h-full"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <motion.h1 className="text-3xl md:text-4xl font-bold mb-4">
              Premium Organic Fertilizer – 100% Natural & Pure
            </motion.h1>

            <motion.div className="flex items-center mb-4">
              <div className="flex text-yellow-400">{[...Array(5)].map((_, i) => <span key={i}>★</span>)}</div>
              <span className="ml-2 text-sm">49 Reviews</span>
            </motion.div>

            <motion.div className="flex items-baseline mb-6">
              <span className="text-2xl md:text-3xl font-bold">$14.00</span>
              <span className="ml-2 text-sm line-through opacity-70">$16.00</span>
            </motion.div>

            <motion.p className="text-sm mb-8">
              Turning food waste into clean energy and organic fertilizers, we create a sustainable future while
              reducing landfill pollution and carbon emissions.
            </motion.p>

            {/* Weight Selection */}
            <motion.div className="mb-6">
              <h3 className="font-medium mb-3">Weight</h3>
              <div className="flex space-x-2">
                {weights.map((weight) => (
                  <motion.button
                    key={weight.value}
                    onClick={() => setSelectedWeight(weight.value)}
                    className={`px-4 py-2 rounded-full text-sm ${
                      selectedWeight === weight.value
                        ? "bg-yellow-500 text-gray-900 font-medium"
                        : "bg-white/20 hover:bg-white/30"
                    }`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {weight.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Quantity Selector */}
            <motion.div className="mb-8">
              <h3 className="font-medium mb-3">Quantity</h3>
              <div className="flex items-center w-32 h-10">
                <motion.button
                  onClick={decrementQuantity}
                  className="w-10 h-full flex items-center justify-center bg-white/20 rounded-l-full"
                  whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Minus size={16} />
                </motion.button>
                <div className="flex-1 h-full flex items-center justify-center bg-white/10">{quantity}</div>
                <motion.button
                  onClick={incrementQuantity}
                  className="w-10 h-full flex items-center justify-center bg-white/20 rounded-r-full"
                  whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Plus size={16} />
                </motion.button>
              </div>
            </motion.div>

            {/* Add to Cart Button */}
            <motion.button
              onClick={handleAddToCart}
              className="w-full bg-black text-white py-3 rounded-full flex items-center justify-center"
              variants={buttonAnimation}
              initial="rest"
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
            >
              <ShoppingCart size={18} className="mr-2" />
              Add to Cart
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
