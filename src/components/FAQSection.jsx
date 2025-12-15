import { useState ,useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css"
import { useNavigate } from "react-router-dom";
import { ChevronDown, ChevronUp, Leaf, Info, Recycle, Shield } from "lucide-react";

const faqs = [
  {
    question: "What is organic fertilizer made from food waste?",
    answer:
      "Our organic fertilizer is produced by converting food waste into nutrient-rich compost through a natural, eco-friendly process. It enhances soil health and promotes sustainable farming.",
    icon: <Leaf className="text-green-600" size={20} />,
  },
  {
    question: "How is it different from chemical fertilizers?",
    answer: "Unlike synthetic chemical fertilizers that can damage soil microbiota over time, our organic fertilizers are derived from natural food waste, making them environmentally friendly. They release nutrients slowly, support beneficial soil organisms, and help create a sustainable ecosystem in your garden.",
    icon: <Info className="text-green-600" size={20} />,
  },
  {
    question: "What are the benefits of using this fertilizer?",
    answer: "Our organic fertilizer improves soil structure, enhances water retention, provides essential nutrients without chemical runoff, reduces waste in landfills, and helps sequester carbon in the soil. Plants grown with organic fertilizers tend to be more resilient and nutritious.",
    icon: <Recycle className="text-green-600" size={20} />,
  },
  {
    question: "Is it safe for all types of plants?",
    answer: "Yes, our organic fertilizer is safe for all types of plants, including vegetables, flowers, trees, and indoor plants. It's gentle enough for seedlings yet nutrient-rich enough for established plants. It's also pet and child-friendly, containing no harsh chemicals or toxins.",
    icon: <Shield className="text-green-600" size={20} />,
  },
];

const FAQSection = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const navigate=useNavigate();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-16 px-6 md:px-16 bg-gradient-to-b from-green-100 to-green-50 min-h-screen flex flex-col items-center justify-center">
      {/* Decorative leaves */}
      <div data-aos="fade-up" className="max-w-3xl w-full text-center relative z-10">
        <div className="inline-block bg-green-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
          Sustainable Solutions
        </div>
        <h2 className="text-3xl font-bold mb-4 text-green-800">Frequently Asked Questions</h2>
        <div className="h-1 w-24 bg-green-400 mx-auto mb-6"></div>
        <p className="text-green-700 mb-12">
          Turning food waste into clean energy and organic fertilizers, we create a sustainable
          future while reducing landfill pollution and carbon emissions.
        </p>
      </div>
      <div data-aos="fade-down" className="max-w-3xl w-full relative z-10">
        {faqs.map((faq, index) => (
          <div
            key={index} className={`mb-4 overflow-hidden rounded-xl shadow-sm ${
              openIndex === index ? "ring-2 ring-green-500" : ""
            }`}>
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className={`w-full flex justify-between items-center p-5 text-left focus:outline-none transition-colors duration-300 ${
                openIndex === index 
                  ? "bg-green-600 text-white" 
                  : "bg-white text-green-800 hover:bg-green-50"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`${openIndex === index ? "bg-white" : "bg-green-100"} p-2 rounded-full`}>
                  {faq.icon}
                </div>
                <span className="font-semibold">{faq.question}</span>
              </div>
              {openIndex === index ? (
                <ChevronUp className="flex-shrink-0" />
              ) : (
                <ChevronDown className="flex-shrink-0" />
              )}
            </button>
            {openIndex === index && (
              <div
                className="p-5 bg-white border-t border-green-200 text-green-800"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
              >
                <p className="leading-relaxed">{faq.answer}</p>
                <div className="mt-4 pt-4 border-t border-green-100 flex gap-4">
                  <div className="flex items-center gap-2 bg-green-50 px-3 py-1 rounded-full text-xs text-green-700">
                    <Leaf size={14} />
                    <span>Eco-friendly</span>
                  </div>
                  <div className="flex items-center gap-2 bg-green-50 px-3 py-1 rounded-full text-xs text-green-700">
                    <Recycle size={14} />
                    <span>Sustainable</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
