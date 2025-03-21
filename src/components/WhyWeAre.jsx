import { useEffect } from "react";
import { Leaf, Sprout, Droplet, Recycle, Sun, Flower2 } from "lucide-react";
import Aos from "aos";
import 'aos/dist/aos.css';

const WhyWeAre = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const benefits = [
    {
      title: "Organic Fertilizer Production",
      description: "Our process transforms food waste into nutrient-rich fertilizers that restore soil health and reduce dependency on synthetic chemicals.",
      icon: <Sprout className="text-green-600 w-12 h-12" />,
      image: "https://media.istockphoto.com/id/1062930150/photo/trees-between-office-buildings.jpg?s=612x612&w=0&k=20&c=CMYu0cFOzBRnkQgVay10hU3M6U-f26GAG9EJ-8aLNVU=",
      imageAlt: "Green Infrastructure"
    },
    {
      title: "Water Conservation",
      description: "By diverting food waste from landfills, we prevent harmful leachate production and protect groundwater resources for future generations.",
      icon: <Droplet className="text-blue-500 w-12 h-12" />,
      image: "https://thumbs.dreamstime.com/b/world-environment-day-hand-child-planted-small-tree-green-color-grows-fertile-soil-forest-conservation-concept-147994084.jpg",
      imageAlt: "Soil Conservation"
    },
    {
      title: "Carbon Footprint Reduction",
      description: "Our AI-driven waste processing prevents methane emissions from landfills, significantly reducing the carbon impact of food waste disposal.",
      icon: <Leaf className="text-green-700 w-12 h-12" />,
      image: "https://static.vecteezy.com/system/resources/thumbnails/024/495/803/small/world-earth-day-concept-3d-render-the-eco-friendly-design-save-the-earth-concept-april-22-concept-eco-earth-day-environment-concept-generate-ai-free-photo.jpg",
      imageAlt: "Earth Concept"
    },
    {
      title: "Renewable Energy Generation",
      description: "Through biogas capture, we transform waste into clean energy that can power homes and businesses with minimal environmental impact.",
      icon: <Sun className="text-yellow-500 w-12 h-12" />,
      stats: "940 MWh of clean energy produced annually"
    },
    {
      title: "Circular Economy Support",
      description: "Our processes create a closed-loop system where waste becomes a valuable resource, supporting sustainable economic models.",
      icon: <Recycle className="text-green-600 w-12 h-12" />,
      stats: "2,450 tonnes of waste diverted from landfills"
    },
    {
      title: "Biodiversity Protection",
      description: "By reducing pollution and creating healthier ecosystems, our work helps preserve plant and animal habitats for future generations.",
      icon: <Flower2 className="text-pink-500 w-12 h-12" />,
      stats: "Supporting 40+ native plant species"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-green-100 to-green-50 py-20 px-4 md:px-12">
      <div data-aos="flip-left" className="max-w-7xl mx-auto">
        {/* Section Title with Environmental Decoration */}
        <div data-aos="flip-right" className="relative mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent">
            Why We Exist
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-6"/>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg">
            At EcoGenie, we're revolutionizing waste management through innovative AI technology. 
            Our comprehensive approach transforms food waste into valuable resources while tackling 
            some of our planet's most pressing environmental challenges.
          </p>
        </div>
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Top Row - Core Benefits with Images */}
          {benefits.slice(0, 3).map((benefit, index) => (
            <div data-aos="flip-up" key={index} className="flex flex-col h-full">
              <div className="relative overflow-hidden rounded-t-xl h-52">
                <img src={benefit.image} alt={benefit.imageAlt} 
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="text-xl font-bold">{benefit.title}</h3>
                  </div>
                </div>
              </div>
              <div className="bg-white flex-grow p-6 rounded-b-xl shadow-md border-t-4 border-green-500">
                <div className="flex items-start gap-4">
                  <div className="bg-green-50 p-3 rounded-full">
                    {benefit.icon}
                  </div>
                  <div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* Bottom Row - Additional Benefits with Stats */}
          {benefits.slice(3, 6).map((benefit, index) => (
            <div data-aos="flip-down" key={index} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500 flex flex-col h-full">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-green-50 p-3 rounded-full">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800">{benefit.title}</h3>
              </div> 
              <p className="text-gray-700 text-sm flex-grow">
                {benefit.description}
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-green-700 font-semibold text-sm">
                  {benefit.stats}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWeAre;