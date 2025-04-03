import React, { useState } from "react";

const BookNow = () => {
  const [formData, setFormData] = useState({
    destination: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
    rooms: 1,
    price: "5000",
    document: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileUpload = (e) => {
    setFormData({ ...formData, document: e.target.files[0] });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-2xl shadow-lg p-6 bg-white rounded-2xl">
        <h2 className="text-xl font-bold mb-4">Book Your Stay</h2>
        
        <label className="block text-sm font-medium text-gray-700">Destination</label>
        <input type="text" name="destination" value={formData.destination} onChange={handleChange} placeholder="Enter destination or property" className="w-full p-2 border rounded-md" />
        
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Check-in Date</label>
            <input type="date" name="checkIn" value={formData.checkIn} onChange={handleChange} className="w-full p-2 border rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Check-out Date</label>
            <input type="date" name="checkOut" value={formData.checkOut} onChange={handleChange} className="w-full p-2 border rounded-md" />
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Guests</label>
            <input type="number" name="guests" value={formData.guests} onChange={handleChange} min="1" className="w-full p-2 border rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Rooms</label>
            <input type="number" name="rooms" value={formData.rooms} onChange={handleChange} min="1" className="w-full p-2 border rounded-md" />
          </div>
        </div>
        
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Pricing</label>
          <p className="text-lg font-semibold">₹{formData.price}/night</p>
        </div>
        
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Upload Documents</label>
          <input type="file" onChange={handleFileUpload} className="w-full p-2 border rounded-md" />
        </div>
        
        <button className="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg">Confirm Booking</button>
      </div>
    </div>
  );
};

export default BookNow;

