import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const products = [
  { id: 1, name: "Solar Panel Kit", image: "https://cdn.britannica.com/94/192794-050-3F3F3DDD/panels-electricity-order-sunlight.jpg", price: "$299.99", description: "Harness the power of the sun with our easy-to-install solar kit" },
  { id: 2, name: "Eco Water Bottle", image: "https://m.media-amazon.com/images/I/419eMC79Q+L.jpg", price: "$24.99", description: "Reusable stainless steel bottle, plastic-free and BPA-free" },
  { id: 3, name: "Recycled Notebook", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVBiQZxK27hXghmPWXIiV9RFa-rtMUZJJWBw&s", price: "$12.99", description: "Made from 100% post-consumer cleaned recycled paper" },
  { id: 4, name: "Bamboo Toothbrush", image: "https://zizuka.in/cdn/shop/files/brush.jpg?v=1684524524", price: "$8.99", description: "Biodegradable handle with plant-based bristles toothbrush." },
  { id: 5, name: "Organic Cotton Bag", image: "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2024/8/13/30ac651f-d1ef-4311-8d04-3e894f8055eb_42824_1.png", price: "$19.99", description: "Durable tote made from organic, sustainably grown cotton" },
  { id: 6, name: "Organic Toys", image: "https://www.rubbishplease.co.uk/wp-content/uploads/2014/06/kids-crafts-300x159.jpg", price: "$15.99", description: "Get a good pack of organic toys for your beautiful kids." },
];

const ProductDetail = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  
  return (
    <div className="w-full bg-gradient-to-b from-green-50 to-green-100 py-16">
      <div data-aos="fade-up" className="w-full bg-green-800 py-12 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            Sustainable Living Products
          </h1>
          <p className="text-green-100 text-center mt-4 max-w-3xl mx-auto">
            Every purchase plants a tree and reduces your carbon footprint
          </p>
        </div>
      </div>
      <div data-aos="fale-right" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-8">
          <div className="h-1 flex-1 bg-green-300"></div>
          <h2 className="text-3xl font-bold text-green-800 px-6">
            Eco-Friendly Essentials
          </h2>
          <div className="h-1 flex-1 bg-green-300"></div>
        </div>
        <p className="text-green-700 text-center mb-10 max-w-2xl mx-auto">
          Discover our curated collection of sustainable products designed to help you reduce waste 
          and live in harmony with nature. All items ethically sourced and eco-certified.
        </p>
      </div>
      <div data-aos="flip-down" className="w-full px-4 sm:px-6 lg:px-8">
        <Swiper slidesPerView={1} spaceBetween={20} loop={true}  navigation={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }} modules={[ Navigation, Autoplay]} className="w-full"
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}>
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-green-200 hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="relative">
                  <img src={product.image} alt={product.name} className="w-full h-60 object-cover"/>
                  <div className="absolute top-3 right-3 bg-green-600 text-white text-xs font-bold rounded-full px-3 py-1">
                    Eco-Certified
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-green-800 mb-2">{product.name}</h3>
                  <p className="text-green-600 text-sm mb-3">{product.description}</p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="font-bold text-green-700">{product.price}</span>
                    <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm transition-colors duration-300">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductDetail;
