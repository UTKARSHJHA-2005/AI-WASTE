import React, { useState } from 'react';
import { MapPin, Clock, Award, ChevronRight, ChevronDown } from 'lucide-react';

const WasteProcessorCard = () => {
  const [showRequests, setShowRequests] = useState(false);
  
  // Sample processor data
  const userData = {
    businessName: "GreenCycle Solutions",
    rating: "4.8",
    facilityType: "Composting Facility",
    distance: "2.4 miles away",
    description: "Specializes in commercial and residential food waste composting with state-of-the-art technology.",
    operatingHours: "Mon-Sat: 8AM-5PM",
    certifications: "USCC Certified, EPA Approved",
    acceptedWasteTypes: ["Food Waste", "Yard Waste", "Paper Products"]
  };
  
  // Sample requests data
  const requestsData = [
    {
      id: "REQ-001",
      processor: "GreenCycle Solutions",
      wasteType: "Food Waste",
      requestDate: "Mar 25, 2025",
      status: "Accepted",
      scheduledDate: "Apr 3, 2025"
    },
    {
      id: "REQ-002",
      processor: "EcoWaste Management",
      wasteType: "Mixed Recycling",
      requestDate: "Mar 28, 2025",
      status: "Pending",
      scheduledDate: "-"
    },
    {
      id: "REQ-003",
      processor: "GreenCycle Solutions",
      wasteType: "Yard Waste",
      requestDate: "Mar 30, 2025",
      status: "Rejected",
      scheduledDate: "-",
      rejectionReason: "Facility at capacity"
    }
  ];
  
  // Status badge styling based on request status
  const getStatusBadgeClass = (status) => {
    switch(status) {
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

  return (
    <div className="w-full max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="mb-4 flex justify-between items-center">
        <h3 className="text-xl font-bold text-gray-900">{userData.businessName}</h3>
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
        <h4 className="text-sm font-medium text-gray-500 mb-2">Accepted Waste Types</h4>
        <div className="flex flex-wrap gap-2">
          {userData.acceptedWasteTypes.map((type, index) => (
            <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
              {type}
            </span>
          ))}
        </div>
      </div>   
      <div className="mt-4">
        <button onClick={() => setShowRequests(!showRequests)}
        className="w-full flex justify-between items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
          <span>View Requests</span>
          {showRequests ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
        </button>
      </div>
      {showRequests && (
        <div className="mt-4 border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
            <h3 className="text-md font-medium text-gray-700">Your Active Requests</h3>
          </div>
          <div className="divide-y divide-gray-200">
            {requestsData.map((request) => (
              <div key={request.id} className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-medium text-gray-900">{request.processor}</h4>
                    <p className="text-sm text-gray-500">Request ID: {request.id}</p>
                  </div>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadgeClass(request.status)}`}>
                    {request.status}
                  </span>
                </div>
                <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="text-gray-500">Waste Type:</span> {request.wasteType}
                  </div>
                  <div>
                    <span className="text-gray-500">Requested:</span> {request.requestDate}
                  </div>
                  <div>
                    <span className="text-gray-500">Scheduled:</span> {request.scheduledDate}
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
        </div>
      )}
    </div>
  );
};

export default WasteProcessorCard;