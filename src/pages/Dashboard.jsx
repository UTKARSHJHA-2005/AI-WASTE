import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Aos from "aos";
import { useNavigate } from "react-router-dom";
import "aos/dist/aos.css";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend, PieChart, Pie, Cell, LineChart, Line, AreaChart, Area } from "recharts";
import Navbar from "../components/Navbar";

const Dashboard = () => {
    const navigate = useNavigate();
    
    // Animation variants
    const staggerChildren = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    // Sample data
    const wasteData = [
        { name: "Recycled", value: 65, fill: "#10B981" },
        { name: "Composted", value: 25, fill: "#F59E0B" },
        { name: "Landfill", value: 10, fill: "#DC2626" }
    ];
    
    const revenueData = [
        { name: "Eco Products", value: 8000, fill: "#059669" },
        { name: "Material Recovery", value: 5000, fill: "#0EA5E9" },
    ];
    
    const carbonData = [
        { month: "Jan", emissions: 120, offset: 40, net: 80 },
        { month: "Feb", emissions: 115, offset: 45, net: 70 },
        { month: "Mar", emissions: 110, offset: 50, net: 60 },
        { month: "Apr", emissions: 105, offset: 55, net: 50 },
        { month: "May", emissions: 100, offset: 60, net: 40 }
    ];
    
    const waterData = [
        { month: "Jan", usage: 2000, saved: 500 },
        { month: "Feb", usage: 1900, saved: 600 },
        { month: "Mar", usage: 1850, saved: 650 },
        { month: "Apr", usage: 1800, saved: 700 },
        { month: "May", usage: 1750, saved: 750 }
    ];

    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, []);

    // Custom statistics cards with icons
    const statCards = [
        { title: "Waste Diverted", value: "45%", icon: "🌱", color: "green" },
        { title: "Energy Saved", value: "320 kWh", icon: "⚡", color: "yellow" },
        { title: "Products Bought", value: "42", icon: "🌳", color: "green" },
        { title: "Products Sold", value: "18", icon: "🌍", color: "blue" },
    ];

    return (
        <div className="min-h-screen overflow-x-hidden overflow-y-hidden bg-gradient-to-br from-green-50 to-blue-50">
            {/* Navigation Bar */}
            <Navbar/>

            <div className="container mx-auto px-4 py-8">
                {/* Hero section */}
                <motion.div  className="text-center mb-12" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.7 }}>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
                        Environmental <span className="text-green-600">Impact</span> Dashboard
                    </h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Tracking our collective progress toward a greener, more sustainable future
                    </p>
                </motion.div>
                {/* Sustainability Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 mb-12" data-aos="zoom-out">
                    {statCards.map((stat, index) => (
                        <div key={index} 
                        className="bg-white rounded-xl shadow-green-400 shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                            <div className={`h-2 ${stat.color === 'green' ? 'bg-green-500' : stat.color === 'yellow' ? 'bg-yellow-500' : 'bg-blue-400'}`}></div>
                            <div className="p-5 flex flex-col items-center">
                                <span className="text-3xl mb-2">{stat.icon}</span>
                                <h3 className="text-gray-600 text-sm font-medium mb-1">{stat.title}</h3>
                                <p className={`text-2xl font-bold ${
                                    stat.color === 'green' ? 'text-green-600' : 
                                    stat.color === 'yellow' ? 'text-yellow-600' : 
                                    'text-blue-600'
                                }`}>{stat.value}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Main Charts Section */}
                <div className="grid md:grid-cols-2 gap-8 mb-10">
                    {/* Waste Management Chart */}
                    <div className="bg-white p-6 border-green-400 rounded-xl shadow-md border-4" data-aos="zoom-in">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2 flex items-center">
                            <span className="mr-2">♻️</span> Waste Management
                        </h2>
                        <p className="text-gray-500 text-sm mb-4">Breakdown of waste processing methods</p>
                        <ResponsiveContainer width="100%" height={280}>
                            <PieChart>
                                <Pie
                                    data={wasteData}
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={100}
                                    dataKey="value"
                                    labelLine={true}
                                    label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                                >
                                    {wasteData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.fill} />
                                    ))}
                                </Pie>
                                <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Revenue Sources */}
                    <div className="bg-white p-6 rounded-xl shadow-md border-green-500 border-4" data-aos="zoom-in">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2 flex items-center">
                            <span className="mr-2">💰</span> Sustainable Revenue
                        </h2>
                        <p className="text-gray-500 text-sm mb-4">Income from eco-friendly initiatives</p>
                        <ResponsiveContainer width="100%" height={280}>
                            <BarChart data={revenueData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'Revenue']} />
                                <Legend />
                                <Bar dataKey="value" name="Amount ($)" radius={[4, 4, 0, 0]}>
                                    {revenueData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.fill} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Waste Analysis Section */}
                <div className="bg-white p-6 rounded-xl shadow-md border-4 border-blue-400 mb-10" data-aos="flip-up" id="carbon">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2 flex items-center">
                        <span className="mr-2">🌍</span> Waste Analysis
                    </h2>
                    <p className="text-gray-500 text-sm mb-4">Monthly waste you selled and how much you saved Mother Earth.</p>
                    <ResponsiveContainer width="100%" height={300}>
                        <AreaChart data={carbonData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip formatter={(value) => [`${value} tons`]} />
                            <Legend />
                            <Area type="monotone" dataKey="emissions" stackId="1" stroke="#EF4444" fill="#FEE2E2" name="Carbon Emissions" />
                            <Area type="monotone" dataKey="offset" stackId="2" stroke="#10B981" fill="#D1FAE5" name="Waste" />
                            <Line type="monotone" dataKey="net" stroke="#6366F1" strokeWidth={2} name="Net Impact" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>

                {/* Eco Tips Section */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl shadow-md border border-green-400 mb-8" data-aos="flip-down">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                        <span className="mr-2">💡</span> Today's Eco Tips
                    </h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                            <h3 className="font-medium text-green-600 mb-2">Reduce Food Waste</h3>
                            <p className="text-gray-600 text-sm">Plan meals in advance and store leftovers properly to minimize food waste.</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                            <h3 className="font-medium text-green-600 mb-2">Energy Conservation</h3>
                            <p className="text-gray-600 text-sm">Unplug electronics when not in use to reduce your household's phantom energy usage.</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                            <h3 className="font-medium text-green-600 mb-2">Water Wisdom</h3>
                            <p className="text-gray-600 text-sm">Install a rain barrel to collect rainwater for gardening and outdoor cleaning needs.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;