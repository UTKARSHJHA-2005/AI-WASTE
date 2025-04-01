import React, { useState } from "react";
import {
  Phone,
  Mail,
  Edit2,
  Check,
  X,
  Calendar,
  Clock,
  Award,
  MapPin,
} from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion"


const UserProfile = () => {
  const [profileMode, setProfileMode] = useState("normal"); // 'normal' or 'processor'
  const [editMode, setEditMode] = useState(false);
  const [showRequests, setShowRequests] = useState(false);

  // Sample user data
  const [userData, setUserData] = useState({
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    phone: "(415) 555-7890",
    location: "San Francisco, CA",
    businessName: "GreenCycle Solutions",
    facilityType: "Composting Facility",
    rating: 4.8,
    distance: "2.4 miles away",
    description:
      "Specializes in commercial and residential food waste composting with state-of-the-art technology.",
    operatingHours: "Mon-Sat: 8AM-5PM",
    certifications: "USCC Certified, EPA Approved",
    acceptedWasteTypes: ["Food Waste", "Yard Waste", "Paper Products"],
  });

  // Sample waste processing requests
  const wasteRequests = [
    {
      userName: "Sarah Miller",
      userImage: "https://eliteadmin.themedesigner.in/demos/bt4/university/dist/images/users/11.jpg",
      wasteType: "Food Waste",
      wasteImage: "https://media.istockphoto.com/id/1427644063/photo/expired-organic-bio-waste-mix-vegetables-and-fruits-in-a-huge-container-in-a-rubbish-bin-heap.jpg?s=612x612&w=0&k=20&c=t-qMfoZV30Jk8h8L2CV5uklXwvfv01aPZxKazeKS-SA=",
      wasteAge: "3 Days Old",
      priceDemand: "$15",
      message: "I have about 5 pounds of vegetable scraps from my restaurant.",
      phone: "(415) 555-1234",
      email: "sarah.m@example.com",
    },
    {
      userName: "David Chen",
      userImage: "https://eliteadmin.themedesigner.in/demos/bt4/university/dist/images/users/12.jpg",
      wasteType: "Paper Products",
      wasteImage: "https://t4.ftcdn.net/jpg/01/18/16/79/360_F_118167926_oxo3NBJHyd556dEJnwYzImJBuwgedR3I.jpg",
      wasteAge: "1 Week Old",
      priceDemand: "$10",
      message: "Cardboard boxes and paper packaging from recent move.",
      phone: "(415) 555-5678",
      email: "david.c@example.com",
    },
  ];

  // const ProccessorData = {
  //   businessName: "GreenCycle Solutions",
  //   rating: "4.8",
  //   facilityType: "Composting Facility",
  //   distance: "2.4 miles away",
  //   description: "Specializes in commercial and residential food waste composting with state-of-the-art technology.",
  //   operatingHours: "Mon-Sat: 8AM-5PM",
  //   certifications: "USCC Certified, EPA Approved",
  //   acceptedWasteTypes: ["Food Waste", "Yard Waste", "Paper Products"]
  // };

  // Sample requests data
  const requestsData = [
    {
      id: "REQ-001",
      processor: "GreenCycle Solutions",
      wasteType: "Food Waste",
      requestDate: "Mar 25, 2025",
      status: "Accepted",
      scheduledDate: "Apr 3, 2025",
    },
    {
      id: "REQ-002",
      processor: "EcoWaste Management",
      wasteType: "Mixed Recycling",
      requestDate: "Mar 28, 2025",
      status: "Pending",
      scheduledDate: "-",
    },
    {
      id: "REQ-003",
      processor: "GreenCycle Solutions",
      wasteType: "Yard Waste",
      requestDate: "Mar 30, 2025",
      status: "Rejected",
      scheduledDate: "-",
      rejectionReason: "Facility at capacity",
    },
  ];

  // Status badge styling based on request status
  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "Accepted":
        return "bg-green-100 text-green-800";
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      case "Rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleSaveProfile = () => {
    setEditMode(false);
    // Would normally save data to backend here
  };

  const handleInvest = async () => {
    try {
      if (typeof window.ethereum !== "undefined") {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        const userAccount = accounts[0];
        const transactionParameters = {
          to: "0x4b567f404c7fd52f948e2bc8758945b3339d5092",
          from: userAccount,
          value: "0x2386F26FC10000",
        };
        const trans = await window.ethereum.request({
          method: "eth_sendTransaction",
          params: [transactionParameters],
        });
        console.log(trans)
        toast.success("Transaction sent successfully!");
        const newCoins = coins + 4;
        setCoins(newCoins);
        localStorage.setItem("coins", newCoins);
      } else {
        toast.error("MetaMask is not installed. Please install MetaMask to proceed.");
      }
    } catch (error) {
      console.error("Error during transaction:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="bg-gradient-to-b from-green-50 to-blue-50 min-h-screen">
      {/* Header with logo and navigation */}
      <Navbar />

      <motion.main className="max-w-7xl mx-auto px-4 py-8 sm:px-6" initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Profile Card */}
          <motion.div className="md:col-span-1" variants={staggerChildren}
            initial="hidden"
            animate="visible">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-start">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Profile
                </h2>
                {!editMode && (
                  <button
                    onClick={() => setEditMode(true)}
                    className="text-green-600 hover:text-green-800 flex items-center"
                  >
                    <Edit2 size={16} className="mr-1" /> Edit
                  </button>
                )}
              </div>

              {/* Profile Picture */}
              <motion.div className="flex flex-col items-center my-4" initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}>
                <div className="w-24 h-24 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-3xl font-bold">
                  {userData.name.charAt(0)}
                </div>
              </motion.div>

              {editMode ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={userData.name}
                      onChange={handleInputChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={userData.email}
                      onChange={handleInputChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Phone
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={userData.phone}
                      onChange={handleInputChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Location
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={userData.location}
                      onChange={handleInputChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                  <div className="flex justify-end space-x-3 mt-6">
                    <button
                      onClick={() => setEditMode(false)}
                      className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSaveProfile}
                      className="px-4 py-2 bg-green-600 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-green-700"
                    >
                      Save
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Name</h3>
                    <p className="mt-1 text-sm text-gray-900">
                      {userData.name}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Email</h3>
                    <p className="mt-1 text-sm text-gray-900">
                      {userData.email}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Phone</h3>
                    <p className="mt-1 text-sm text-gray-900">
                      {userData.phone}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">
                      Location
                    </h3>
                    <p className="mt-1 text-sm text-gray-900">
                      {userData.location}
                    </p>
                  </div>
                </div>
              )}

              {/* Profile Mode Toggle */}
              <div className="mt-8">
                <h3 className="text-sm font-medium text-gray-500 mb-2">
                  Profile Mode
                </h3>
                <div className="flex rounded-md shadow-sm">
                  <button
                    onClick={() => setProfileMode("normal")}
                    className={`px-4 py-2 text-sm font-medium rounded-l-md border ${profileMode === "normal"
                        ? "bg-green-600 text-white border-green-600"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                      }`}
                  >
                    Normal Profile
                  </button>
                  <button
                    onClick={() => setProfileMode("processor")}
                    className={`px-4 py-2 text-sm font-medium rounded-r-md border ${profileMode === "processor"
                        ? "bg-green-600 text-white border-green-600"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                      }`}
                  >
                    Waste Processor
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Content Area */}
          <motion.div className="md:col-span-2" initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3 }}>
            {profileMode === "normal" ? (
              <motion.div className="bg-white rounded-lg shadow p-6" initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Account Overview
                </h2>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-gray-600">
                    Welcome to your Ecogenie dashboard! From here, you can
                    manage your waste disposal requests and connect with local
                    waste processors.
                  </p>
                  <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div className="bg-green-50 overflow-hidden shadow rounded-lg">
                      <div className="px-4 py-5 sm:p-6">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 bg-green-100 rounded-md p-3">
                            <Calendar className="h-6 w-6 text-green-600" />
                          </div>
                          <div className="ml-5 w-0 flex-1">
                            <dl>
                              <dt className="text-sm font-medium text-gray-500 truncate">
                                Active Requests
                              </dt>
                              <dd>
                                <div className="text-lg font-medium text-gray-900">
                                  3
                                </div>
                              </dd>
                            </dl>
                            <p
                              onClick={() => setShowRequests(!showRequests)}
                              className="hover:underline cursor-pointer text-sm text-blue-500"
                            >
                              View
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 overflow-hidden shadow rounded-lg">
                      <div className="px-4 py-5 sm:p-6">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 bg-green-100 rounded-md p-3">
                            <Award className="h-6 w-6 text-green-600" />
                          </div>
                          <div className="ml-5 w-0 flex-1">
                            <dl>
                              <dt className="text-sm font-medium text-gray-500 truncate">
                                Eco Points
                              </dt>
                              <dd>
                                <div className="text-lg font-medium text-gray-900">
                                  245
                                </div>
                              </dd>
                            </dl>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* User active request */}
                {showRequests && (
                  <motion.div className="mt-4 border border-gray-200 rounded-lg overflow-hidden" initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}>
                    <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                      <h3 className="text-md font-medium text-gray-700">
                        Your Active Requests
                      </h3>
                    </div>
                    <div className="divide-y divide-gray-200">
                      {requestsData.map((request) => (
                        <div key={request.id} className="p-4">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h4 className="font-medium text-gray-900">
                                {request.processor}
                              </h4>
                              <p className="text-sm text-gray-500">
                                Request ID: {request.id}
                              </p>
                            </div>
                            <span
                              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadgeClass(
                                request.status
                              )}`}
                            >
                              {request.status}
                            </span>
                          </div>
                          <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                            <div>
                              <span className="text-gray-500">Waste Type:</span>{" "}
                              {request.wasteType}
                            </div>
                            <div>
                              <span className="text-gray-500">Requested:</span>{" "}
                              {request.requestDate}
                            </div>
                            <div>
                              <span className="text-gray-500">Scheduled:</span>{" "}
                              {request.scheduledDate}
                            </div>
                            {request.rejectionReason && (
                              <div className="col-span-2 text-red-600">
                                Reason: {request.rejectionReason}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ) : (
              <div className="space-y-6">
                {/* Waste Processor Profile */}
                <motion.div className="bg-white rounded-lg shadow p-6" initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}>
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">
                    Waste Processor Profile
                  </h2>

                  {editMode ? (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Business Name
                        </label>
                        <input
                          type="text"
                          name="businessName"
                          value={userData.businessName}
                          onChange={handleInputChange}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Facility Type
                        </label>
                        <input
                          type="text"
                          name="facilityType"
                          value={userData.facilityType}
                          onChange={handleInputChange}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Description
                        </label>
                        <textarea
                          name="description"
                          value={userData.description}
                          onChange={handleInputChange}
                          rows={3}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Operating Hours
                        </label>
                        <input
                          type="text"
                          name="operatingHours"
                          value={userData.operatingHours}
                          onChange={handleInputChange}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Certifications
                        </label>
                        <input
                          type="text"
                          name="certifications"
                          value={userData.certifications}
                          onChange={handleInputChange}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                        />
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="mb-4 flex justify-between items-center">
                        <h3 className="text-xl font-bold text-gray-900">
                          {userData.businessName}
                        </h3>
                        <div className="flex items-center">
                          <span className="text-yellow-400 mr-1">⭐</span>
                          <span>{userData.rating}</span>
                        </div>
                      </div>

                      <div className="mb-4 flex items-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {userData.facilityType}
                        </span>
                        <div className="ml-4 flex items-center text-gray-500 text-sm">
                          <MapPin size={16} className="mr-1" />
                          {userData.distance}
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4">
                        {userData.description}
                      </p>

                      <div className="border-t border-gray-200 py-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <div className="flex items-center text-gray-500">
                              <Clock size={16} className="mr-2" />
                              <span>{userData.operatingHours}</span>
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center text-gray-500">
                              <Award size={16} className="mr-2" />
                              <span>{userData.certifications}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-gray-200 py-4">
                        <h4 className="text-sm font-medium text-gray-500 mb-2">
                          Accepted Waste Types
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {userData.acceptedWasteTypes.map((type, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                            >
                              {type}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>




                {/* Waste Processing Requests */}
                <motion.div className="bg-white rounded-lg shadow p-6" initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.5 }}>
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">
                    Waste Processing Requests
                  </h2>

                  {wasteRequests.length === 0 ? (
                    <p className="text-gray-500">
                      No pending waste processing requests.
                    </p>
                  ) : (
                    <div className="space-y-6">
                      {wasteRequests.map((request, index) => (
                        <div
                          key={index}
                          className="border border-gray-200 rounded-lg p-4"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex items-center">
                              <img
                                src={request.userImage}
                                alt={request.userName}
                                className="h-10 w-10 rounded-full"
                              />
                              <div className="ml-3">
                                <h3 className="text-sm font-medium text-gray-900">
                                  {request.userName}
                                </h3>
                                <div className="flex items-center text-xs text-gray-500">
                                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800 mr-2">
                                    {request.wasteType}
                                  </span>
                                  <span>{request.wasteAge}</span>
                                </div>
                              </div>
                            </div>
                            <div>
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                {request.priceDemand}
                              </span>
                            </div>
                          </div>

                          <div className="mt-4 grid grid-cols-3 gap-4">
                            <div className="col-span-2">
                              <p className="text-sm text-gray-600">
                                {request.message}
                              </p>
                              <div className="mt-2 flex items-center text-xs text-gray-500">
                                <Phone size={14} className="mr-1" />
                                <span className="mr-3">{request.phone}</span>
                                <Mail size={14} className="mr-1" />
                                <span>{request.email}</span>
                              </div>
                            </div>
                            <div className="col-span-1">
                              <img
                                src={request.wasteImage}
                                alt={`${request.wasteType} image`}
                                className="rounded-md w-full h-20 object-cover"
                              />
                            </div>
                          </div>

                          <div className="mt-4 flex justify-end space-x-3">
                            <button onClick={handleInvest} className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded text-white bg-green-600 hover:bg-green-700">
                              <Check size={14} className="mr-1" /> Approve
                            </button>
                            <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50">
                              <X size={14} className="mr-1" /> Reject
                            </button>
                            <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50">
                              <Phone size={14} className="mr-1" /> Call
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              </div>
            )}
          </motion.div>
        </div>
      </motion.main>
      <ToastContainer />
    </div>
  );
};

export default UserProfile;
